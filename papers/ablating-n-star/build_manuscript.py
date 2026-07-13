#!/usr/bin/env python3
"""Build the N* ablation companion paper."""

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
        "PAPER_OUTPUT_STEM": "ablating-n-star",
        "PAPER_HEADER": "ABLATING N*",
        "PAPER_TITLE": "Ablating N*: Does Every Conjunct Earn Its Place?",
        "PAPER_SUBJECT": "A Necessity Audit Without a Consciousness Oracle",
        "PAPER_KEYWORDS": "consciousness; N* model; ablation; necessity; causal intervention; falsification; preregistration; partial identification; circularity; theory testing",
        "PAPER_TABLE_PROFILE": "ablation",
    }
)

runpy.run_path(str(HERE.parent / "where-is-the-conscious-subject" / "build_manuscript.py"), run_name="__main__")
