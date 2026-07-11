#!/usr/bin/env python3
"""Build the phenomenal presence-to-character companion paper."""

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
        "PAPER_OUTPUT_STEM": "from-phenomenal-presence-to-phenomenal-character",
        "PAPER_HEADER": "FROM PHENOMENAL PRESENCE TO CHARACTER",
        "PAPER_TITLE": "From Phenomenal Presence to Phenomenal Character",
        "PAPER_SUBJECT": "A Dynamical-Geometry Extension of the N* Model",
        "PAPER_KEYWORDS": "phenomenal consciousness; phenomenal character; quality spaces; representational geometry; causal dynamics; neural manifolds; structuralism; qualia; N* model",
        "PAPER_TABLE_PROFILE": "character",
    }
)

runpy.run_path(str(HERE.parent / "where-is-the-conscious-subject" / "build_manuscript.py"), run_name="__main__")
