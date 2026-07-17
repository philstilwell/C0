#!/usr/bin/env python3
"""Build the schematic-legibility companion paper."""

from pathlib import Path
import os
import runpy


HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
os.environ.update(
    {
        "PAPER_ROOT": str(ROOT),
        "PAPER_SOURCE": str(HERE / "manuscript.md"),
        "PAPER_TABLE_FILTER": str(HERE.parent / "where-is-the-conscious-subject" / "table_layout.lua"),
        "PAPER_OUTPUT_STEM": "consciousness-in-the-schematic",
        "PAPER_HEADER": "READING CONSCIOUSNESS FROM THE SCHEMATIC",
        "PAPER_TITLE": "Reading Consciousness from the Schematic",
        "PAPER_SUBJECT": "Structural Legibility in the N* Model",
        "PAPER_KEYWORDS": "phenomenal consciousness; phenomenal presence; N* model; explanatory gap; mechanistic explanation; schematic representation; structural intelligibility; constitutive identity",
    }
)

runpy.run_path(str(HERE.parent / "where-is-the-conscious-subject" / "build_manuscript.py"), run_name="__main__")
