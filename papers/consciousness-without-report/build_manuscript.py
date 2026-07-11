#!/usr/bin/env python3
"""Build the Consciousness Without Report companion paper."""

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
        "PAPER_OUTPUT_STEM": "consciousness-without-report",
        "PAPER_HEADER": "CONSCIOUSNESS WITHOUT REPORT",
        "PAPER_TITLE": "Consciousness Without Report",
        "PAPER_SUBJECT": "What System-Wide Availability Actually Requires",
        "PAPER_KEYWORDS": "consciousness; no-report paradigms; system-wide availability; causal availability; broadcast; counterfactual intervention; functional diversity; context robustness; global workspace; posterior cortex; thalamocortical systems; artificial consciousness",
    }
)

runpy.run_path(str(HERE.parent / "where-is-the-conscious-subject" / "build_manuscript.py"), run_name="__main__")
