#!/usr/bin/env python3
"""Build and validate the Cø / N* student textbook.

The source stays human-editable Markdown. Pandoc supplies semantic structure,
python-docx supplies the student-edition design system, and LibreOffice creates
the tagged PDF. The release is published only after structural and artifact QA.
"""

from __future__ import annotations

import fcntl
import hashlib
import json
import math
import os
import re
import shutil
import statistics
import subprocess
import sys
import tempfile
import zipfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import (
    WD_CELL_VERTICAL_ALIGNMENT,
    WD_ROW_HEIGHT_RULE,
    WD_TABLE_ALIGNMENT,
)
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor
from pypdf import PdfReader


PROJECT = Path(__file__).resolve().parents[1]
SOURCE_DIR = PROJECT / "student-textbook"
FRONTMATTER = SOURCE_DIR / "frontmatter.md"
CHAPTER_SOURCES = (
    SOURCE_DIR / "drafts" / "chapters-01-05.md",
    SOURCE_DIR / "drafts" / "chapters-06-10.md",
    SOURCE_DIR / "drafts" / "chapters-11-14-and-backmatter.md",
)
CORPUS_SOURCES = (
    PROJECT / "public" / "paper.pdf",
    PROJECT / "papers" / "where-is-the-conscious-subject" / "manuscript.md",
    PROJECT / "papers" / "consciousness-without-report" / "manuscript.md",
    PROJECT / "papers" / "indeterminacy-as-scientific-result" / "manuscript.md",
    PROJECT / "papers" / "ablating-n-star" / "manuscript.md",
    PROJECT / "papers" / "from-phenomenal-presence-to-phenomenal-character" / "manuscript.md",
    PROJECT / "papers" / "consciousness-in-the-schematic" / "manuscript.md",
)
ASSEMBLED_SOURCE = SOURCE_DIR / "student-textbook.md"
DOCX_OUT = PROJECT / "output" / "doc" / "learning-c0-n-star-student-textbook.docx"
PDF_OUT = PROJECT / "output" / "pdf" / "learning-c0-n-star-student-textbook.pdf"
MANIFEST_OUT = PROJECT / "output" / "student-textbook-build-manifest.json"

TITLE = "Learning Cø / N*: A Student Textbook of Phenomenal Presence"
EDITION = "1.0"
CORPUS_BASELINE = "July 18, 2026"
BODY_FONT = os.environ.get("C0_TEXTBOOK_BODY_FONT", "Liberation Serif")
DISPLAY_FONT = os.environ.get("C0_TEXTBOOK_DISPLAY_FONT", "Liberation Sans")

# Exact samples from the user-supplied five-swatch image.
BURGUNDY = "601D1F"
SANDSTONE = "AA9062"
ESPRESSO = "3B2317"
UMBER = "8A5C39"
PALE_GOLD = "FBE4AA"

# Palette-derived paper tints used for long-form readability.
PAPER = "FFFDF8"
CREAM = "FBF3DE"
BLUSH = "F4E5E1"
MUSHROOM = "EEE7DF"
WHITE = "FFFFFF"
TEXT = RGBColor(59, 35, 23)

EXPECTED_CHAPTERS = {
    1: "The Explanandum and the Theory Landscape",
    2: "The Core Biconditional and Network-Dynamics Model",
    3: "Where Is the Conscious Subject?",
    4: "Viability and Integration: Realization and Unity",
    5: "Consciousness Without Report: System-Wide Availability",
    6: "Recurrent Stability and Temporal Presence",
    7: "What Does the Evidence License?",
    8: "Does Every Conjunct Earn Its Place?",
    9: "From Phenomenal Presence to Phenomenal Character",
    10: "Reading Consciousness from the Schematic",
    11: "Biological and Clinical Applications",
    12: "Nonhuman Animals, Organoids, and Artificial Systems",
    13: "Differentiation, Validation, and the Strongest Objections",
    14: "Capstone Adversarial Research Design",
}

CHAPTER_PATTERN = re.compile(
    r"^#\s+Chapter\s+(\d+)\s*(?:[—–:-])\s*(.+?)\s*$", re.MULTILINE
)
FORBIDDEN_PATTERNS = {
    "instructor key": re.compile(r"\binstructor\s+key\b", re.I),
    "answer guide": re.compile(r"\banswer\s+guide\b", re.I),
    "reveal sheet": re.compile(r"\breveal\s+sheet\b", re.I),
    "controlled reveal": re.compile(r"\bcontrolled[- ]reveal\b", re.I),
    "provided solution": re.compile(r"\b(?:correct|model)\s+answer\s*:", re.I),
    "placeholder": re.compile(r"\b(?:TODO|TBD|FIXME|lorem ipsum)\b", re.I),
}


def run(*args: str, cwd: Path | None = None) -> subprocess.CompletedProcess[str]:
    completed = subprocess.run(
        args,
        cwd=cwd or PROJECT,
        check=False,
        capture_output=True,
        text=True,
    )
    if completed.returncode:
        raise RuntimeError(
            f"Command failed ({completed.returncode}): {' '.join(args)}\n"
            f"stdout:\n{completed.stdout}\nstderr:\n{completed.stderr}"
        )
    return completed


def find_tool(name: str, env_name: str) -> str:
    override = os.environ.get(env_name)
    if override:
        path = Path(override).expanduser().resolve()
        if not path.exists():
            raise FileNotFoundError(f"{env_name} does not exist: {path}")
        return str(path)
    found = shutil.which(name)
    if not found:
        raise FileNotFoundError(f"Required executable not found: {name}")
    return found


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def word_count(text: str) -> int:
    without_code = re.sub(r"```.*?```", " ", text, flags=re.S)
    return len(re.findall(r"\b[\wÀ-ÖØ-öø-ÿ*øØ]+(?:[-’'][\wÀ-ÖØ-öø-ÿ*]+)*\b", without_code))


def assemble_source() -> str:
    missing = [
        path
        for path in (FRONTMATTER, *CHAPTER_SOURCES, *CORPUS_SOURCES)
        if not path.exists()
    ]
    if missing:
        raise FileNotFoundError("Missing textbook source: " + ", ".join(map(str, missing)))
    parts = [path.read_text(encoding="utf-8").rstrip() for path in (FRONTMATTER, *CHAPTER_SOURCES)]
    # Heading styles own pagination. Removing raw page-break commands prevents
    # accidental blank leaves when authors also add a break before a chapter.
    assembled = "\n\n".join(parts) + "\n"
    assembled = re.sub(r"^\\newpage\s*$", "", assembled, flags=re.MULTILINE)
    return assembled


def chapter_sections(markdown: str) -> dict[int, tuple[str, str]]:
    matches = list(CHAPTER_PATTERN.finditer(markdown))
    sections: dict[int, tuple[str, str]] = {}
    for match in matches:
        number = int(match.group(1))
        title = match.group(2).strip().rstrip("#").strip()
        next_h1 = re.search(r"^#\s+", markdown[match.end() :], re.MULTILINE)
        end = match.end() + next_h1.start() if next_h1 else len(markdown)
        sections[number] = (title, markdown[match.start() : end])
    return sections


def validate_source(markdown: str) -> dict[str, object]:
    sections = chapter_sections(markdown)
    if set(sections) != set(EXPECTED_CHAPTERS):
        raise ValueError(
            f"Expected chapters 1–14 exactly; found {sorted(sections)}"
        )

    chapter_qa: dict[str, object] = {}
    for number, expected_title in EXPECTED_CHAPTERS.items():
        title, body = sections[number]
        if title.casefold() != expected_title.casefold():
            raise ValueError(
                f"Chapter {number} title mismatch: expected {expected_title!r}, found {title!r}"
            )
        words = word_count(body)
        if words < 2400:
            raise ValueError(f"Chapter {number} is underdeveloped at {words} words")
        required_sections = (
            "Chapter map",
            "Practice studio",
            "Chapter summary",
            "Key terms",
        )
        for heading in required_sections:
            if not re.search(rf"^##\s+{re.escape(heading)}\s*$", body, re.I | re.M):
                raise ValueError(f"Chapter {number} is missing section: {heading}")
        if number < 14:
            if not re.search(r"^##\s+Looking ahead\s*$", body, re.I | re.M):
                raise ValueError(f"Chapter {number} is missing Looking ahead")
        elif not re.search(
            r"^##\s+(?:Looking ahead|Where inquiry goes next)\s*$", body, re.I | re.M
        ):
            raise ValueError("Chapter 14 needs a forward-looking final section")

        analogy_limits = len(re.findall(r"\*\*Where the analogy breaks\.\*\*", body, re.I))
        thought_experiments = len(re.findall(r"thought experiment", body, re.I))
        if analogy_limits < 2:
            raise ValueError(f"Chapter {number} needs at least two analogy-limit annotations")
        if thought_experiments < 2:
            raise ValueError(f"Chapter {number} needs at least two thought experiments")

        annotations = {
            label: len(re.findall(rf"\*\*{re.escape(label)}\.\*\*", body, re.I))
            for label in ("Plain language", "Why it matters", "Do not infer", "Method note", "Checkpoint")
        }
        minimums = {
            "Plain language": 1,
            "Why it matters": 1,
            "Do not infer": 1,
            "Method note": 1,
            "Checkpoint": 1,
        }
        deficient = [label for label, minimum in minimums.items() if annotations[label] < minimum]
        if deficient:
            raise ValueError(f"Chapter {number} lacks required annotations: {', '.join(deficient)}")

        studio = body.split("## Practice studio", 1)[1]
        for marker in (
            "Quick check",
            "Individual",
            "Collaborative",
            "Counterexample",
            "Exit ticket",
        ):
            if marker.casefold() not in studio.casefold():
                raise ValueError(f"Chapter {number} practice studio lacks {marker!r}")

        chapter_qa[str(number)] = {
            "title": title,
            "words": words,
            "analogy_limit_annotations": analogy_limits,
            "thought_experiment_mentions": thought_experiments,
            "annotations": annotations,
        }

    for label, pattern in FORBIDDEN_PATTERNS.items():
        match = pattern.search(markdown)
        if match:
            line = markdown.count("\n", 0, match.start()) + 1
            raise ValueError(f"Forbidden student-edition content ({label}) at line {line}")

    required_backmatter = (
        "Appendix A — Notation at a Glance",
        "Appendix B — How to Read an Empirical Claim",
        "Appendix C — How to Argue Fairly Across Theories",
        "Appendix D — Student Capstone Workbook",
        "Glossary",
        "References and Source Trail",
    )
    for heading in required_backmatter:
        if not re.search(rf"^#\s+{re.escape(heading)}\s*$", markdown, re.M):
            raise ValueError(f"Missing back matter: {heading}")

    corpus_coverage_tokens = (
        "Cø as N*",
        "Where Is the Conscious Subject?",
        "Consciousness Without Report",
        "Indeterminacy as a Scientific Result",
        "Ablating N*",
        "From Phenomenal Presence to Phenomenal Character",
        "Reading Consciousness from the Schematic",
    )
    missing_corpus = [token for token in corpus_coverage_tokens if token not in markdown]
    if missing_corpus:
        raise ValueError(
            "The assembled textbook does not name every paper in the source trail: "
            + ", ".join(missing_corpus)
        )

    total_words = word_count(markdown)
    if total_words < 48_000:
        raise ValueError(f"Textbook is too short for a full treatment: {total_words} words")
    return {
        "total_words": total_words,
        "chapters": chapter_qa,
        "corpus_items_named": list(corpus_coverage_tokens),
    }


def set_font(style, name: str, size: float, *, bold=None, italic=None) -> None:
    style.font.name = name
    style.font.size = Pt(size)
    style._element.rPr.rFonts.set(qn("w:ascii"), name)
    style._element.rPr.rFonts.set(qn("w:hAnsi"), name)
    style._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    if bold is not None:
        style.font.bold = bold
    if italic is not None:
        style.font.italic = italic


def set_run_font(run, name: str, size: float | None = None) -> None:
    run.font.name = name
    if size is not None:
        run.font.size = Pt(size)
    r_pr = run._element.get_or_add_rPr()
    r_fonts = r_pr.rFonts
    if r_fonts is None:
        r_fonts = OxmlElement("w:rFonts")
        r_pr.insert(0, r_fonts)
    for key in ("ascii", "hAnsi", "eastAsia", "cs"):
        r_fonts.set(qn(f"w:{key}"), name)


def set_shading(element, fill: str) -> None:
    properties = element.get_or_add_tcPr() if element.tag == qn("w:tc") else element.get_or_add_pPr()
    shd = properties.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        properties.append(shd)
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")


def set_paragraph_left_border(paragraph, color: str, size: int = 18, space: int = 10) -> None:
    p_pr = paragraph._p.get_or_add_pPr()
    borders = p_pr.find(qn("w:pBdr"))
    if borders is None:
        borders = OxmlElement("w:pBdr")
        p_pr.append(borders)
    left = borders.find(qn("w:left"))
    if left is None:
        left = OxmlElement("w:left")
        borders.append(left)
    left.set(qn("w:val"), "single")
    left.set(qn("w:sz"), str(size))
    left.set(qn("w:space"), str(space))
    left.set(qn("w:color"), color)


def set_cell_margins(cell, top=70, bottom=70, start=85, end=85) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for margin, value in (("top", top), ("bottom", bottom), ("start", start), ("end", end)):
        node = tc_mar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def repeat_table_header(row) -> None:
    tr_pr = row._tr.get_or_add_trPr()
    tbl_header = tr_pr.find(qn("w:tblHeader"))
    if tbl_header is None:
        tbl_header = OxmlElement("w:tblHeader")
        tr_pr.append(tbl_header)
    tbl_header.set(qn("w:val"), "true")


def prevent_row_split(row) -> None:
    tr_pr = row._tr.get_or_add_trPr()
    cant_split = tr_pr.find(qn("w:cantSplit"))
    if cant_split is None:
        cant_split = OxmlElement("w:cantSplit")
        tr_pr.append(cant_split)


def normalized_cell_text(cell) -> str:
    texts = cell._tc.xpath(".//w:t | .//m:t")
    return re.sub(r"\s+", " ", " ".join(node.text or "" for node in texts)).strip()


def percentile(values: list[float], fraction: float) -> float:
    if not values:
        return 0.0
    ordered = sorted(values)
    position = fraction * (len(ordered) - 1)
    lower = math.floor(position)
    upper = math.ceil(position)
    if lower == upper:
        return ordered[lower]
    return ordered[lower] + (ordered[upper] - ordered[lower]) * (position - lower)


def content_aware_column_weights(table) -> list[float]:
    columns = len(table.columns)
    scores: list[float] = []
    for column_index in range(columns):
        cell_texts = [normalized_cell_text(row.cells[column_index]) for row in table.rows]
        lengths = [len(text) for text in cell_texts if text]
        longest_words = [
            max((len(word) for word in re.findall(r"\S+", text)), default=0)
            for text in cell_texts
        ]
        header = len(cell_texts[0]) if cell_texts else 0
        score = max(
            8.0,
            header * 0.82,
            percentile(lengths, 0.78) ** 0.72 * 2.35,
            percentile(longest_words, 0.9) * 1.25,
        )
        scores.append(min(score, 62.0))

    total = sum(scores) or 1.0
    weights = [score * 100.0 / total for score in scores]
    minimum = 8.0 if columns >= 6 else 10.0 if columns >= 4 else 12.0 if columns == 3 else 20.0
    maximum = 58.0 if columns >= 3 else 76.0

    # Project onto bounded percentages while preserving the content ratios of
    # columns that have not hit a limit.
    fixed: dict[int, float] = {}
    for _ in range(columns * 2):
        changed = False
        free = [index for index in range(columns) if index not in fixed]
        remaining = 100.0 - sum(fixed.values())
        free_total = sum(scores[index] for index in free) or 1.0
        for index in list(free):
            candidate = remaining * scores[index] / free_total
            if candidate < minimum:
                fixed[index] = minimum
                changed = True
            elif candidate > maximum:
                fixed[index] = maximum
                changed = True
        if not changed:
            break
    free = [index for index in range(columns) if index not in fixed]
    remaining = 100.0 - sum(fixed.values())
    free_total = sum(scores[index] for index in free) or 1.0
    return [fixed.get(index, remaining * scores[index] / free_total) for index in range(columns)]


def semantic_column_weights(table, signature: tuple[str, ...]) -> list[float] | None:
    """Override the heuristic where formulas or writable fields need semantic room."""
    all_text = " | ".join(normalized_cell_text(cell) for row in table.rows for cell in row.cells)
    exact_profiles: dict[tuple[str, ...], list[float]] = {
        (
            "Profile",
            "Boundary and viability record",
            "Component and anchor evidence",
        ): [11, 28, 61],
        (
            "Strategy",
            "Post-intervention component record",
            "Mapping, validity, and anchor record",
        ): [18, 46, 36],
        (
            "Candidate",
            "Endogenous capacity",
            "External dependence",
            "Role completeness",
            "Stability",
            "Included in frozen family?",
        ): [14, 17, 17, 17, 11, 24],
        (
            "Construct",
            "Operational definition",
            "Estimator",
            "Calibration domain",
            "Validity envelope",
            "Main confound",
            "Stress test",
        ): [12, 20, 14, 14, 14, 14, 12],
        (
            "Reviewer concern",
            "Category",
            "Team response",
            "Change made",
            "Accepted by reviewer?",
            "Residual limitation",
        ): [16, 17, 18, 14, 16, 19],
    }
    if signature in exact_profiles:
        return exact_profiles[signature]
    if (
        len(signature) == 6
        and signature[0] == "Recipient class"
        and "S / R / C" in signature
    ):
        return [20, 7, 22, 20, 16, 15]
    if signature == ("Question", "Theory A", "Theory B"):
        return [38, 31, 31]
    if signature == ("Dependency question", "Anchor 1", "Anchor 2", "Corrective action"):
        return [38, 18, 18, 26]
    if signature == ("Symbol or term", "Student reading", "Guardrail"):
        if "Resolved" in all_text:
            return [24, 37, 39]
        if "Legible" in all_text:
            return [27, 37, 36]
        if "C0 or Cø" in all_text or "minimal phenomenal presence" in all_text:
            return [15, 34, 51]
    return None


def set_fixed_table_columns(table, weights: list[float], total_inches: float = 5.44) -> None:
    total_twips = int(total_inches * 1440)
    raw = [total_twips * weight / sum(weights) for weight in weights]
    widths = [int(value) for value in raw]
    remainder = total_twips - sum(widths)
    for _, index in sorted(
        ((raw[index] - widths[index], index) for index in range(len(widths))), reverse=True
    )[:remainder]:
        widths[index] += 1

    table.autofit = False
    tbl_pr = table._tbl.tblPr
    layout = tbl_pr.find(qn("w:tblLayout"))
    if layout is None:
        layout = OxmlElement("w:tblLayout")
        tbl_pr.append(layout)
    layout.set(qn("w:type"), "fixed")
    tbl_w = tbl_pr.find(qn("w:tblW"))
    if tbl_w is None:
        tbl_w = OxmlElement("w:tblW")
        tbl_pr.append(tbl_w)
    tbl_w.set(qn("w:w"), str(total_twips))
    tbl_w.set(qn("w:type"), "dxa")

    grid = table._tbl.tblGrid
    for child in list(grid):
        grid.remove(child)
    for width in widths:
        col = OxmlElement("w:gridCol")
        col.set(qn("w:w"), str(width))
        grid.append(col)
    for row in table.rows:
        for index, cell in enumerate(row.cells):
            tc_pr = cell._tc.get_or_add_tcPr()
            tc_w = tc_pr.find(qn("w:tcW"))
            if tc_w is None:
                tc_w = OxmlElement("w:tcW")
                tc_pr.append(tc_w)
            tc_w.set(qn("w:w"), str(widths[min(index, len(widths) - 1)]))
            tc_w.set(qn("w:type"), "dxa")


def add_page_number(paragraph) -> None:
    paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    run = paragraph.add_run()
    begin = OxmlElement("w:fldChar")
    begin.set(qn("w:fldCharType"), "begin")
    instruction = OxmlElement("w:instrText")
    instruction.set(qn("xml:space"), "preserve")
    instruction.text = " PAGE "
    separate = OxmlElement("w:fldChar")
    separate.set(qn("w:fldCharType"), "separate")
    text = OxmlElement("w:t")
    text.text = "1"
    end = OxmlElement("w:fldChar")
    end.set(qn("w:fldCharType"), "end")
    for element in (begin, instruction, separate, text, end):
        run._r.append(element)
    set_run_font(run, DISPLAY_FONT, 8.5)
    run.font.color.rgb = RGBColor(138, 92, 57)


def insert_palette_strip(document: Document) -> None:
    date_paragraph = next(
        (paragraph for paragraph in document.paragraphs if paragraph.style.name == "Date"),
        document.paragraphs[3],
    )
    table = document.add_table(rows=1, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    row = table.rows[0]
    row.height = Inches(0.28)
    row.height_rule = WD_ROW_HEIGHT_RULE.EXACTLY
    for cell, color in zip(row.cells, (BURGUNDY, SANDSTONE, ESPRESSO, UMBER, PALE_GOLD)):
        set_shading(cell._tc, color)
        set_cell_margins(cell, top=0, bottom=0, start=0, end=0)
        cell.width = Inches(1.02)
        cell.text = ""
    set_fixed_table_columns(table, [20, 20, 20, 20, 20], 5.1)
    date_paragraph._p.addnext(table._tbl)


def set_document_background(document: Document) -> None:
    background = document._element.find(qn("w:background"))
    if background is None:
        background = OxmlElement("w:background")
        document._element.insert(0, background)
    background.set(qn("w:color"), PAPER)


def style_document(raw_docx: Path, destination: Path) -> dict[str, object]:
    document = Document(raw_docx)
    document.core_properties.title = TITLE
    document.core_properties.subject = (
        "Accessible graduate student textbook for the Cø / N* theory of phenomenal presence"
    )
    document.core_properties.author = "Phil Stilwell"
    document.core_properties.last_modified_by = "Cø / N* student-textbook build"
    document.core_properties.comments = (
        f"Student edition {EDITION}; corpus baseline {CORPUS_BASELINE}; no instructor keys"
    )
    document.core_properties.keywords = (
        "consciousness; phenomenal presence; N*; student textbook; integration; "
        "availability; recurrence; thought experiments; collaborative learning"
    )
    set_document_background(document)

    settings = document.settings._element
    theme = settings.find(qn("w:themeFontLang"))
    if theme is None:
        theme = OxmlElement("w:themeFontLang")
        settings.append(theme)
    theme.set(qn("w:val"), "en-US")

    for section in document.sections:
        section.page_width = Inches(7)
        section.page_height = Inches(10)
        section.top_margin = Inches(0.70)
        section.bottom_margin = Inches(0.70)
        section.left_margin = Inches(0.74)
        section.right_margin = Inches(0.74)
        section.gutter = Inches(0.08)
        section.header_distance = Inches(0.3)
        section.footer_distance = Inches(0.32)
        section.different_first_page_header_footer = True

        header = section.header.paragraphs[0]
        header.text = "LEARNING Cø / N*  ·  STUDENT EDITION"
        header.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        header.paragraph_format.space_after = Pt(0)
        for run in header.runs:
            set_run_font(run, DISPLAY_FONT, 7.8)
            run.font.bold = True
            run.font.color.rgb = RGBColor(138, 92, 57)

        footer = section.footer.paragraphs[0]
        add_page_number(footer)
        section.first_page_header.paragraphs[0].text = ""
        section.first_page_footer.paragraphs[0].text = ""

    for name in ("Normal", "Body Text", "First Paragraph", "Compact"):
        if name in document.styles:
            style = document.styles[name]
            set_font(style, BODY_FONT, 10.1)
            style.font.color.rgb = TEXT
            style.paragraph_format.line_spacing = 1.035
            style.paragraph_format.space_after = Pt(3.8)
            style.paragraph_format.widow_control = True

    title = document.styles["Title"]
    set_font(title, DISPLAY_FONT, 29, bold=True)
    title.font.color.rgb = RGBColor(96, 29, 31)
    title.paragraph_format.space_before = Pt(108)
    title.paragraph_format.space_after = Pt(9)

    if "Subtitle" in document.styles:
        subtitle = document.styles["Subtitle"]
        set_font(subtitle, BODY_FONT, 15, italic=True)
        subtitle.font.color.rgb = RGBColor(138, 92, 57)
        subtitle.paragraph_format.space_after = Pt(30)
    if "Author" in document.styles:
        author = document.styles["Author"]
        set_font(author, DISPLAY_FONT, 10.5, bold=True)
        author.font.color.rgb = RGBColor(59, 35, 23)
        author.paragraph_format.space_after = Pt(4)
    if "Date" in document.styles:
        date = document.styles["Date"]
        set_font(date, DISPLAY_FONT, 9)
        date.font.color.rgb = RGBColor(138, 92, 57)
        date.paragraph_format.space_after = Pt(18)

    heading_specs = {
        "Heading 1": (DISPLAY_FONT, 21, 0, 12, BURGUNDY),
        "Heading 2": (DISPLAY_FONT, 14.5, 15, 6, BURGUNDY),
        "Heading 3": (DISPLAY_FONT, 11.4, 10, 4, UMBER),
        "Heading 4": (DISPLAY_FONT, 10.2, 8, 3, ESPRESSO),
    }
    for name, (font, size, before, after, color) in heading_specs.items():
        if name not in document.styles:
            continue
        style = document.styles[name]
        set_font(style, font, size, bold=True)
        style.font.color.rgb = RGBColor.from_string(color)
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True
        if name == "Heading 1":
            style.paragraph_format.page_break_before = True

    if "Block Text" in document.styles:
        block = document.styles["Block Text"]
        set_font(block, BODY_FONT, 10.5, italic=True)
        block.font.color.rgb = RGBColor(96, 29, 31)
        block.paragraph_format.left_indent = Inches(0.24)
        block.paragraph_format.right_indent = Inches(0.18)
        block.paragraph_format.space_before = Pt(8)
        block.paragraph_format.space_after = Pt(8)

    callout_specs = {
        "Plain language.": (PALE_GOLD, BURGUNDY),
        "Why it matters.": (CREAM, UMBER),
        "Do not infer.": (BLUSH, BURGUNDY),
        "Method note.": (MUSHROOM, ESPRESSO),
        "Checkpoint.": (PALE_GOLD, UMBER),
        "Where the analogy breaks.": (MUSHROOM, SANDSTONE),
        "Source note:": (CREAM, SANDSTONE),
    }
    callout_counts = {label: 0 for label in callout_specs}
    chapter_count = 0
    for paragraph in document.paragraphs:
        next_sibling = paragraph._p.getnext()
        if next_sibling is not None and next_sibling.tag == qn("w:tbl"):
            paragraph.paragraph_format.keep_with_next = True
        text = paragraph.text.strip()
        if paragraph.style.name == "Heading 1":
            set_shading(paragraph._p, PALE_GOLD if text.startswith("Chapter ") else CREAM)
            set_paragraph_left_border(paragraph, BURGUNDY, size=26, space=12)
            paragraph.paragraph_format.left_indent = Inches(0.14)
            paragraph.paragraph_format.right_indent = Inches(0.08)
            paragraph.paragraph_format.space_before = Pt(0)
            paragraph.paragraph_format.space_after = Pt(14)
            if text.startswith("Chapter "):
                chapter_count += 1
        if paragraph.style.name == "Heading 2" and text == "Empirical-claim annotation sheet":
            paragraph.paragraph_format.page_break_before = True
        if paragraph.style.name == "Block Text":
            set_shading(paragraph._p, CREAM)
            set_paragraph_left_border(paragraph, BURGUNDY)
        for label, (fill, border) in callout_specs.items():
            if text.startswith(label):
                callout_counts[label] += 1
                set_shading(paragraph._p, fill)
                set_paragraph_left_border(paragraph, border)
                paragraph.paragraph_format.left_indent = Inches(0.16)
                paragraph.paragraph_format.right_indent = Inches(0.12)
                paragraph.paragraph_format.space_before = Pt(5)
                paragraph.paragraph_format.space_after = Pt(6)
                paragraph.paragraph_format.keep_together = True
                for run in paragraph.runs:
                    set_run_font(run, BODY_FONT, 9.9)
                break
        if text.startswith(("[Source note:", "[Context note:", "[Research-status note:")) and text.endswith("]"):
            set_shading(paragraph._p, CREAM)
            set_paragraph_left_border(paragraph, SANDSTONE, size=12, space=8)
            paragraph.paragraph_format.left_indent = Inches(0.16)
            paragraph.paragraph_format.right_indent = Inches(0.12)
            for run in paragraph.runs:
                set_run_font(run, BODY_FONT, 9.2)
                run.font.italic = True
        if paragraph._p.xpath(".//w:drawing"):
            paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in paragraph.runs:
            if run.font.name is None:
                set_run_font(run, BODY_FONT)

    # Keep the final pair of items together so a lone objective or key term is
    # not stranded, while still allowing a substantial list to paginate well.
    paragraphs = document.paragraphs
    index = 0
    while index < len(paragraphs):
        if not paragraphs[index]._p.xpath(".//w:numPr"):
            index += 1
            continue
        end = index
        while end < len(paragraphs) and paragraphs[end]._p.xpath(".//w:numPr"):
            paragraphs[end].paragraph_format.keep_together = True
            end += 1
        group = paragraphs[index:end]
        is_capstone_branch_selector = any(
            "Case-level presence classification" in item.text for item in group
        ) and any("Schematic-competence audit" in item.text for item in group)
        if is_capstone_branch_selector and 1 < len(group) <= 8:
            for item in group[:-1]:
                item.paragraph_format.keep_with_next = True
        elif 1 < len(group) <= 8 and sum(len(item.text) for item in group) <= 1000:
            group[-2].paragraph_format.keep_with_next = True
        index = end

    # A short setup line belongs with the first substantive item it introduces.
    # This blocks page bottoms such as a section heading plus one lead sentence,
    # or a colon-ended prompt whose formula/list begins on the next page.
    for index, paragraph in enumerate(paragraphs[:-1]):
        text = paragraph.text.strip()
        if not text or paragraph._p.xpath(".//w:numPr"):
            continue
        next_paragraph = paragraphs[index + 1]
        next_style = next_paragraph.style.name
        if next_style == "Heading 1":
            continue
        previous = paragraphs[index - 1] if index else None
        follows_section_heading = (
            previous is not None
            and previous.style.name in {"Heading 2", "Heading 3", "Heading 4"}
            and previous.text.strip() not in {"Looking ahead", "Where inquiry goes next"}
            and len(text) <= 360
        )
        introduces_material = len(text) <= 220 and text.endswith(":")
        if follows_section_heading or introduces_material:
            paragraph.paragraph_format.keep_with_next = True

    # Key-term definitions are compact reference units; splitting one across
    # pages makes a chapter review harder to scan and can create one-line widows.
    in_key_terms = False
    for paragraph in paragraphs:
        text = paragraph.text.strip()
        if paragraph.style.name == "Heading 2":
            in_key_terms = text == "Key terms"
            continue
        if paragraph.style.name == "Heading 1":
            in_key_terms = False
        if in_key_terms and text:
            paragraph.paragraph_format.keep_together = True

    # LibreOffice does not consistently preserve inherited widow control.
    # Keep ordinary short paragraphs intact; longer exposition may still flow.
    for paragraph in paragraphs:
        text = paragraph.text.strip()
        if (
            paragraph.style.name in {"Normal", "Body Text", "First Paragraph", "Compact"}
            and text
            and len(text) <= 650
        ):
            paragraph.paragraph_format.keep_together = True

    insert_palette_strip(document)

    table_profiles: list[dict[str, object]] = []
    for table_index, table in enumerate(document.tables):
        if not table.rows or not table.columns:
            continue
        # The cover palette strip has no text and has already been fixed.
        signature = tuple(normalized_cell_text(cell) for cell in table.rows[0].cells)
        if not any(signature):
            continue
        weights = semantic_column_weights(table, signature) or content_aware_column_weights(table)
        set_fixed_table_columns(table, weights)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        repeat_table_header(table.rows[0])
        for row_index, row in enumerate(table.rows):
            prevent_row_split(row)
            for cell in row.cells:
                cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
                set_cell_margins(cell, top=60, bottom=60, start=70, end=70)
                set_shading(cell._tc, ESPRESSO if row_index == 0 else (CREAM if row_index % 2 == 0 else PAPER))
                for paragraph in cell.paragraphs:
                    paragraph.paragraph_format.space_before = Pt(0)
                    paragraph.paragraph_format.space_after = Pt(2)
                    paragraph.paragraph_format.line_spacing = 1.0
                    for run in paragraph.runs:
                        set_run_font(run, DISPLAY_FONT, 8.4 if len(table.columns) >= 5 else 8.8)
                        run.font.color.rgb = (
                            RGBColor(251, 228, 170) if row_index == 0 else TEXT
                        )
                        if row_index == 0:
                            run.font.bold = True
        table_profiles.append(
            {
                "index": table_index,
                "signature": list(signature),
                "column_width_percentages": [round(value, 2) for value in weights],
            }
        )

    for section in document.sections[1:]:
        if section.start_type == WD_SECTION.NEW_PAGE:
            section.different_first_page_header_footer = False

    document.save(destination)
    return {
        "chapters_styled": chapter_count,
        "callout_paragraphs": callout_counts,
        "tables": table_profiles,
    }


def pandoc_docx(pandoc: str, markdown_path: Path, destination: Path) -> None:
    run(
        pandoc,
        str(markdown_path),
        "--from=markdown+tex_math_dollars+raw_tex+smart",
        "--to=docx",
        "--standalone",
        "--resource-path",
        str(PROJECT),
        "--metadata",
        "lang=en-US",
        "--output",
        str(destination),
    )


def convert_pdf(soffice: str, docx_path: Path, destination_dir: Path) -> Path:
    profile_dir = Path(tempfile.mkdtemp(prefix="c0-student-textbook-lo-"))
    try:
        result = run(
            soffice,
            f"-env:UserInstallation={profile_dir.as_uri()}",
            "--headless",
            "--convert-to",
            "pdf",
            "--outdir",
            str(destination_dir),
            str(docx_path),
        )
    finally:
        shutil.rmtree(profile_dir, ignore_errors=True)
    generated = destination_dir / f"{docx_path.stem}.pdf"
    if not generated.exists():
        raise FileNotFoundError(
            f"LibreOffice did not create {generated}; stdout={result.stdout!r}"
        )
    return generated


def flatten_outline(items) -> list[str]:
    titles: list[str] = []
    for item in items:
        if isinstance(item, list):
            titles.extend(flatten_outline(item))
        else:
            title = getattr(item, "title", None)
            if title:
                titles.append(str(title))
    return titles


def pdf_font_report(pdf_path: Path, pdffonts: str | None) -> dict[str, object]:
    if not pdffonts:
        return {"available": False}
    output = run(pdffonts, str(pdf_path)).stdout
    lines = [line for line in output.splitlines() if line.strip()]
    records = []
    for line in lines[2:]:
        columns = re.split(r"\s+", line.strip())
        if len(columns) < 8:
            continue
        records.append(
            {
                "name": columns[0],
                "type": columns[1],
                "embedded": columns[3].lower() == "yes",
                "subset": columns[4].lower() == "yes",
            }
        )
    if not records:
        raise ValueError("pdffonts returned no font records")
    unembedded = [record["name"] for record in records if not record["embedded"]]
    if unembedded:
        raise ValueError(f"PDF contains unembedded fonts: {unembedded}")
    return {"available": True, "all_embedded": True, "fonts": records}


def validate_docx(docx_path: Path) -> dict[str, object]:
    if not zipfile.is_zipfile(docx_path):
        raise ValueError("DOCX output is not a valid OPC/ZIP container")
    document = Document(docx_path)
    chapter_headings = [
        paragraph.text.strip()
        for paragraph in document.paragraphs
        if paragraph.style.name == "Heading 1" and paragraph.text.strip().startswith("Chapter ")
    ]
    if len(chapter_headings) != 14:
        raise ValueError(f"DOCX has {len(chapter_headings)} chapter headings, expected 14")
    fixed_tables = 0
    for table in document.tables:
        if not table.rows:
            continue
        layout = table._tbl.tblPr.find(qn("w:tblLayout"))
        if layout is None or layout.get(qn("w:type")) != "fixed":
            raise ValueError("DOCX contains a non-fixed table layout")
        if len(table._tbl.tblGrid) != len(table.columns):
            raise ValueError("DOCX table grid does not match its column count")
        fixed_tables += 1
    return {
        "chapter_headings": chapter_headings,
        "paragraphs": len(document.paragraphs),
        "tables_fixed": fixed_tables,
        "sections": len(document.sections),
    }


def validate_pdf(
    pdf_path: Path, pdfinfo: str | None, pdffonts: str | None
) -> dict[str, object]:
    reader = PdfReader(str(pdf_path))
    if len(reader.pages) < 100:
        raise ValueError(f"PDF is unexpectedly short at {len(reader.pages)} pages")
    page_text = [(page.extract_text() or "").strip() for page in reader.pages]
    empty_pages = [index + 1 for index, text in enumerate(page_text) if not text]
    intentionally_open_pages = [
        index + 1
        for index, text in enumerate(page_text)
        if index > 0
        and word_count(text) < 100
        and (
            text.count("_") >= 10
            or text.count("☐") >= 8
            or text.count("□") >= 8
            or "Final claim the team is willing to risk" in text
        )
    ]
    sparse_pages = [
        index + 1
        for index, text in enumerate(page_text)
        if index > 0
        and 0 < word_count(text) < 100
        and index + 1 not in intentionally_open_pages
    ]
    if empty_pages:
        raise ValueError(f"PDF contains empty pages: {empty_pages}")
    if sparse_pages:
        raise ValueError(f"PDF contains materially sparse pages: {sparse_pages}")

    full_text = "\n".join(page_text)
    normalized_full_text = re.sub(r"\s+", " ", full_text)
    for number, title in EXPECTED_CHAPTERS.items():
        if f"Chapter {number}" not in normalized_full_text or title not in normalized_full_text:
            raise ValueError(f"PDF text is missing Chapter {number}: {title}")

    outline = flatten_outline(reader.outline)
    missing_outline = [
        f"Chapter {number} — {title}"
        for number, title in EXPECTED_CHAPTERS.items()
        if not any(item.startswith(f"Chapter {number}") for item in outline)
    ]
    if missing_outline:
        raise ValueError(f"PDF outline is missing chapter entries: {missing_outline}")

    root = reader.trailer["/Root"]
    marked = bool(root.get("/MarkInfo", {}).get("/Marked", False))
    language = root.get("/Lang")
    if not marked:
        raise ValueError("PDF is not tagged")
    if not language:
        raise ValueError("PDF has no document language")

    info_report: dict[str, str] = {}
    if pdfinfo:
        for line in run(pdfinfo, str(pdf_path)).stdout.splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                info_report[key.strip()] = value.strip()

    return {
        "pages": len(reader.pages),
        "empty_pages": empty_pages,
        "sparse_pages": sparse_pages,
        "intentionally_open_pages": intentionally_open_pages,
        "outline_entries": len(outline),
        "tagged": marked,
        "language": str(language),
        "pdfinfo": info_report,
        "fonts": pdf_font_report(pdf_path, pdffonts),
    }


def tool_version(executable: str, *args: str) -> str:
    completed = subprocess.run(
        (executable, *args), check=False, capture_output=True, text=True
    )
    output = (completed.stdout or completed.stderr).strip().splitlines()
    return output[0] if output else "unknown"


def publish(staged: Path, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_name(destination.name + ".publishing")
    shutil.copy2(staged, temporary)
    os.replace(temporary, destination)


def build() -> None:
    pandoc = find_tool("pandoc", "C0_PANDOC")
    soffice = find_tool("soffice", "C0_SOFFICE")
    pdfinfo = shutil.which("pdfinfo")
    pdffonts = shutil.which("pdffonts")

    lock_dir = PROJECT / "tmp" / "docs"
    lock_dir.mkdir(parents=True, exist_ok=True)
    lock_path = lock_dir / "student-textbook-build.lock"
    with lock_path.open("a+", encoding="utf-8") as lock_handle:
        try:
            fcntl.flock(lock_handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError as exc:
            raise RuntimeError("Another student-textbook build is already running") from exc

        work_dir = Path(tempfile.mkdtemp(prefix="c0-student-textbook-build-"))
        try:
            markdown = assemble_source()
            source_qa = validate_source(markdown)
            staged_markdown = work_dir / "student-textbook.md"
            staged_markdown.write_text(markdown, encoding="utf-8")

            raw_docx = work_dir / "student-textbook-raw.docx"
            staged_docx = work_dir / DOCX_OUT.name
            pandoc_docx(pandoc, staged_markdown, raw_docx)
            style_qa = style_document(raw_docx, staged_docx)
            docx_qa = validate_docx(staged_docx)

            staged_pdf = convert_pdf(soffice, staged_docx, work_dir)
            pdf_qa = validate_pdf(staged_pdf, pdfinfo, pdffonts)

            manifest = {
                "schema": 1,
                "title": TITLE,
                "edition": EDITION,
                "built_at_utc": datetime.now(timezone.utc).isoformat(),
                "corpus_baseline": CORPUS_BASELINE,
                "palette": {
                    "burgundy": f"#{BURGUNDY}",
                    "sandstone": f"#{SANDSTONE}",
                    "espresso": f"#{ESPRESSO}",
                    "umber": f"#{UMBER}",
                    "pale_gold": f"#{PALE_GOLD}",
                },
                "sources": {
                    str(path.relative_to(PROJECT)): sha256(path)
                    for path in (FRONTMATTER, *CHAPTER_SOURCES)
                },
                "corpus_sources": {
                    str(path.relative_to(PROJECT)): sha256(path)
                    for path in CORPUS_SOURCES
                },
                "outputs": {
                    str(ASSEMBLED_SOURCE.relative_to(PROJECT)): sha256(staged_markdown),
                    str(DOCX_OUT.relative_to(PROJECT)): sha256(staged_docx),
                    str(PDF_OUT.relative_to(PROJECT)): sha256(staged_pdf),
                },
                "qa": {
                    "source": source_qa,
                    "styling": style_qa,
                    "docx": docx_qa,
                    "pdf": pdf_qa,
                },
                "tools": {
                    "python": sys.version.splitlines()[0],
                    "pandoc": tool_version(pandoc, "--version"),
                    "libreoffice": tool_version(soffice, "--version"),
                    "pypdf": __import__("pypdf").__version__,
                    "python_docx": __import__("docx").__version__,
                },
            }
            staged_manifest = work_dir / MANIFEST_OUT.name
            staged_manifest.write_text(
                json.dumps(manifest, indent=2, sort_keys=True) + "\n", encoding="utf-8"
            )

            publish(staged_markdown, ASSEMBLED_SOURCE)
            publish(staged_docx, DOCX_OUT)
            publish(staged_pdf, PDF_OUT)
            publish(staged_manifest, MANIFEST_OUT)

            print(ASSEMBLED_SOURCE)
            print(DOCX_OUT)
            print(PDF_OUT)
            print(MANIFEST_OUT)
        finally:
            shutil.rmtree(work_dir, ignore_errors=True)
            fcntl.flock(lock_handle.fileno(), fcntl.LOCK_UN)
    lock_path.unlink(missing_ok=True)


if __name__ == "__main__":
    try:
        build()
    except Exception as exc:
        print(f"Build failed: {exc}", file=sys.stderr)
        raise
