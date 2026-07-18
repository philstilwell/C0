#!/usr/bin/env python3
"""Build and style the Cø / N* graduate teacher's manual."""

from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


HERE = Path(__file__).resolve().parent
PROJECT = HERE.parent
SOURCE = HERE / "teachers-manual.md"
TMP = PROJECT / "tmp" / "docs" / "teachers-manual"
RAW_DOCX = TMP / "teaching-c0-n-star-manual-raw.docx"
DOCX_OUT = PROJECT / "output" / "doc" / "teaching-c0-n-star-manual.docx"
PDF_OUT = PROJECT / "output" / "pdf" / "teaching-c0-n-star-manual.pdf"

NAVY = "1B344C"
BLUE = "2E6F8E"
PALE_BLUE = "EAF2F6"
PALE_GRAY = "F4F6F7"
WHITE = "FFFFFF"
TEXT = RGBColor(35, 42, 48)


def run(*args: str, cwd: Path | None = None) -> None:
    subprocess.run(args, cwd=cwd, check=True)


def find_tool(name: str, fallback: str | None = None) -> str:
    found = shutil.which(name)
    if found:
        return found
    if fallback and Path(fallback).exists():
        return fallback
    raise FileNotFoundError(f"Required tool not found: {name}")


def set_font(style, name: str, size: float, *, bold=None, italic=None) -> None:
    style.font.name = name
    style.font.size = Pt(size)
    style._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    if bold is not None:
        style.font.bold = bold
    if italic is not None:
        style.font.italic = italic


def set_shading(element, fill: str) -> None:
    properties = element.get_or_add_tcPr() if hasattr(element, "get_or_add_tcPr") else element
    shading = properties.find(qn("w:shd"))
    if shading is None:
        shading = OxmlElement("w:shd")
        properties.append(shading)
    shading.set(qn("w:fill"), fill)
    shading.set(qn("w:val"), "clear")


def set_cell_margins(cell, top=70, bottom=70, start=85, end=85) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    tc_mar = tc_pr.find(qn("w:tcMar"))
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for side, value in (("top", top), ("bottom", bottom), ("start", start), ("end", end)):
        node = tc_mar.find(qn(f"w:{side}"))
        if node is None:
            node = OxmlElement(f"w:{side}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def repeat_table_header(row) -> None:
    tr_pr = row._tr.get_or_add_trPr()
    header = OxmlElement("w:tblHeader")
    header.set(qn("w:val"), "true")
    tr_pr.append(header)


def prevent_row_split(row) -> None:
    tr_pr = row._tr.get_or_add_trPr()
    node = OxmlElement("w:cantSplit")
    tr_pr.append(node)


def add_page_field(paragraph) -> None:
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = paragraph.add_run()
    begin = OxmlElement("w:fldChar")
    begin.set(qn("w:fldCharType"), "begin")
    instruction = OxmlElement("w:instrText")
    instruction.set(qn("xml:space"), "preserve")
    instruction.text = "PAGE"
    separate = OxmlElement("w:fldChar")
    separate.set(qn("w:fldCharType"), "separate")
    end = OxmlElement("w:fldChar")
    end.set(qn("w:fldCharType"), "end")
    run._r.extend([begin, instruction, separate, end])


def set_paragraph_shading(paragraph, fill: str) -> None:
    p_pr = paragraph._p.get_or_add_pPr()
    shading = p_pr.find(qn("w:shd"))
    if shading is None:
        shading = OxmlElement("w:shd")
        p_pr.append(shading)
    shading.set(qn("w:fill"), fill)
    shading.set(qn("w:val"), "clear")


def style_document() -> None:
    document = Document(RAW_DOCX)
    document.core_properties.title = "Teaching Cø / N*: A Graduate Instructor's Manual"
    document.core_properties.subject = (
        "Expanded lecture notes, theory placement, collaborative exercises, validation arguments, and teaching materials"
    )
    document.core_properties.author = "Based on the Cø / N* research program of Phil Stilwell"
    document.core_properties.keywords = (
        "consciousness; phenomenal presence; N*; teacher manual; graduate course; "
        "integration; availability; recurrence; system boundaries; indeterminacy; collaborative learning"
    )

    settings = document.settings._element
    theme = settings.find(qn("w:themeFontLang"))
    if theme is None:
        theme = OxmlElement("w:themeFontLang")
        settings.append(theme)
    theme.set(qn("w:val"), "en-US")

    for section in document.sections:
        section.page_width = Inches(8.5)
        section.page_height = Inches(11)
        section.top_margin = Inches(0.72)
        section.bottom_margin = Inches(0.72)
        section.left_margin = Inches(0.78)
        section.right_margin = Inches(0.78)
        section.header_distance = Inches(0.28)
        section.footer_distance = Inches(0.3)
        section.different_first_page_header_footer = True

        header = section.header.paragraphs[0]
        header.text = "TEACHING Cø / N*  |  GRADUATE INSTRUCTOR'S MANUAL"
        header.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        for item in header.runs:
            item.font.name = "Arial"
            item.font.size = Pt(8)
            item.font.bold = True
            item.font.color.rgb = RGBColor(46, 111, 142)
            item._element.rPr.rFonts.set(qn("w:eastAsia"), "Arial")

        footer = section.footer.paragraphs[0]
        add_page_field(footer)
        for item in footer.runs:
            item.font.name = "Arial"
            item.font.size = Pt(8)
            item.font.color.rgb = RGBColor(90, 99, 107)

        first_header = section.first_page_header.paragraphs[0]
        first_header.text = ""
        first_footer = section.first_page_footer.paragraphs[0]
        first_footer.text = ""

    for name in ("Normal", "Body Text", "First Paragraph", "Compact"):
        if name in document.styles:
            style = document.styles[name]
            set_font(style, "Georgia", 10.25)
            style.font.color.rgb = TEXT
            style.paragraph_format.line_spacing = 1.08
            style.paragraph_format.space_after = Pt(5.5)
            style.paragraph_format.widow_control = True

    title = document.styles["Title"]
    set_font(title, "Arial", 27, bold=True)
    title.font.color.rgb = RGBColor(27, 52, 76)
    title.paragraph_format.space_before = Pt(92)
    title.paragraph_format.space_after = Pt(11)

    if "Subtitle" in document.styles:
        subtitle = document.styles["Subtitle"]
        set_font(subtitle, "Georgia", 13, italic=True)
        subtitle.font.color.rgb = RGBColor(65, 86, 102)
        subtitle.paragraph_format.space_after = Pt(26)

    if "Author" in document.styles:
        author = document.styles["Author"]
        set_font(author, "Arial", 10.5, bold=True)
        author.font.color.rgb = RGBColor(46, 111, 142)
        author.paragraph_format.space_after = Pt(5)

    if "Date" in document.styles:
        date = document.styles["Date"]
        set_font(date, "Georgia", 9.5)
        date.font.color.rgb = RGBColor(90, 99, 107)

    heading_specs = {
        "Heading 1": ("Arial", 18, True, 18, 8),
        "Heading 2": ("Arial", 14, True, 14, 6),
        "Heading 3": ("Arial", 11, True, 10, 4),
        "Heading 4": ("Arial", 10, True, 8, 3),
    }
    for name, (font, size, bold, before, after) in heading_specs.items():
        if name not in document.styles:
            continue
        style = document.styles[name]
        set_font(style, font, size, bold=bold)
        style.font.color.rgb = RGBColor(27, 52, 76) if name != "Heading 3" else RGBColor(46, 111, 142)
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True
        if name == "Heading 1":
            style.paragraph_format.page_break_before = True

    if "Block Text" in document.styles:
        block = document.styles["Block Text"]
        set_font(block, "Georgia", 10.25, italic=True)
        block.font.color.rgb = RGBColor(27, 52, 76)
        block.paragraph_format.left_indent = Inches(0.25)
        block.paragraph_format.right_indent = Inches(0.18)
        block.paragraph_format.space_before = Pt(7)
        block.paragraph_format.space_after = Pt(7)

    for paragraph in document.paragraphs:
        text = paragraph.text.strip()
        if paragraph.style.name == "Heading 2" and (
            (text.startswith("Session ") and not text.startswith("Session 1."))
            or (text.startswith("Appendix ") and not text.startswith("Appendix A."))
        ):
            paragraph.paragraph_format.page_break_before = True
        if paragraph.style.name == "Heading 2" and text.startswith("6. The 14-session sequence"):
            paragraph.paragraph_format.page_break_before = True
        if paragraph.style.name == "Heading 3" and text == "Capstone rubric":
            paragraph.paragraph_format.page_break_before = True
        if text == "Preface" and paragraph.style.name == "Heading 1":
            paragraph.paragraph_format.page_break_before = True
        if paragraph.style.name == "Block Text":
            set_paragraph_shading(paragraph, PALE_BLUE)
        if paragraph._p.xpath(".//w:drawing"):
            paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            paragraph.paragraph_format.space_before = Pt(6)
            paragraph.paragraph_format.space_after = Pt(6)

    for shape in document.inline_shapes:
        if shape.width > Inches(6.75):
            ratio = shape.height / shape.width
            shape.width = Inches(6.75)
            shape.height = int(shape.width * ratio)

    for table in document.tables:
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        table.autofit = True
        if not table.rows:
            continue
        repeat_table_header(table.rows[0])
        for row_index, row in enumerate(table.rows):
            prevent_row_split(row)
            for cell in row.cells:
                cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
                set_cell_margins(cell)
                set_shading(cell._tc, NAVY if row_index == 0 else (PALE_GRAY if row_index % 2 == 0 else WHITE))
                for paragraph in cell.paragraphs:
                    paragraph.paragraph_format.space_before = Pt(0)
                    paragraph.paragraph_format.space_after = Pt(2)
                    paragraph.paragraph_format.line_spacing = 1.0
                    for item in paragraph.runs:
                        item.font.name = "Arial"
                        item._element.rPr.rFonts.set(qn("w:eastAsia"), "Arial")
                        item.font.size = Pt(8.25)
                        if row_index == 0:
                            item.font.bold = True
                            item.font.color.rgb = RGBColor(255, 255, 255)
                        else:
                            item.font.color.rgb = TEXT

    for paragraph in document.paragraphs:
        for hyperlink in paragraph._p.xpath(".//w:hyperlink"):
            for run in hyperlink.xpath(".//w:r"):
                r_pr = run.get_or_add_rPr()
                color = r_pr.find(qn("w:color"))
                if color is None:
                    color = OxmlElement("w:color")
                    r_pr.append(color)
                color.set(qn("w:val"), BLUE)

    DOCX_OUT.parent.mkdir(parents=True, exist_ok=True)
    document.save(DOCX_OUT)


def build() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    DOCX_OUT.parent.mkdir(parents=True, exist_ok=True)
    PDF_OUT.parent.mkdir(parents=True, exist_ok=True)
    pandoc = find_tool("pandoc", "/opt/homebrew/bin/pandoc")
    soffice = find_tool(
        "soffice",
        "/Users/philstilwell/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/soffice",
    )

    run(
        pandoc,
        str(SOURCE),
        "--from=markdown+tex_math_dollars+raw_tex",
        "--to=docx",
        f"--resource-path={HERE}:{PROJECT}",
        f"--output={RAW_DOCX}",
        cwd=HERE,
    )
    style_document()

    pdf_temp = TMP / PDF_OUT.name
    if pdf_temp.exists():
        pdf_temp.unlink()
    profile_dir = Path(tempfile.mkdtemp(prefix="c0-teachers-manual-lo-"))
    try:
        run(
            soffice,
            f"-env:UserInstallation={profile_dir.as_uri()}",
            "--headless",
            "--convert-to",
            "pdf",
            "--outdir",
            str(TMP),
            str(DOCX_OUT),
        )
    finally:
        shutil.rmtree(profile_dir, ignore_errors=True)
    generated = TMP / f"{DOCX_OUT.stem}.pdf"
    if not generated.exists():
        raise FileNotFoundError(f"LibreOffice did not create {generated}")
    shutil.copy2(generated, PDF_OUT)

    print(DOCX_OUT)
    print(PDF_OUT)


if __name__ == "__main__":
    try:
        build()
    except Exception as exc:
        print(f"Build failed: {exc}", file=sys.stderr)
        raise
