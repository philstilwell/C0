# Teacher's Manual Build

The build combines `teachers-manual.md` with the audience-classified blocks in `session-resource-pack.md` to produce three editions: the complete instructor manual, a key-free and reveal-safe student base pack, and a key-free instructor-controlled reveal master. It also emits one independently distributable PDF for every controlled reveal. The source parser fails closed if substantive resource text falls outside an explicit audience block or if the typed 50-item reveal inventory changes without an explicit audit update.

## Requirements

- Python 3.10 or later
- packages pinned in `requirements-teachers-manual.txt`
- Pandoc 3 or later
- LibreOffice with the `soffice` executable available on `PATH`
- Liberation Serif and Liberation Sans (normally bundled with LibreOffice)

No network service or paid API is used. To use executables outside `PATH`, set `C0_PANDOC` or `C0_SOFFICE` to an explicit executable path. Font families may be overridden with `C0_BODY_FONT` and `C0_DISPLAY_FONT`; when `pdffonts` is available, the build fails if a requested family is substituted away or any PDF font is unembedded.

## Build

From the repository root, run:

```sh
python3 teachers-manual/build_teachers_manual.py
```

The build validates all DOCX containers, required content, audience provenance, internal navigation, figures, PDF outlines, page counts, blank pages, font embedding, reveal headings, and common source artifacts before replacing any published file. It prepares the complete release and publishes it transactionally, retaining rollback copies until the manifest is in place. It writes:

- `output/doc/teaching-c0-n-star-manual.docx`
- `output/pdf/teaching-c0-n-star-manual.pdf`
- `output/doc/c0-n-star-student-session-resource-pack.docx`
- `output/pdf/c0-n-star-student-session-resource-pack.pdf`
- `output/doc/c0-n-star-instructor-controlled-reveal-sheets.docx`
- `output/pdf/c0-n-star-instructor-controlled-reveal-sheets.pdf`
- `output/pdf/reveals/c0-n-star-session-...-reveal.pdf` (50 individually releasable PDFs)
- `output/teachers-manual-build-manifest.json`

The schema-2 JSON manifest records source and output hashes, generated-Markdown hashes, included audience-block IDs, per-reveal titles, sessions, page counts and hashes, tool versions, font choices, corpus baseline, and automated QA results. A post-publication check rejects stale sources, mixed artifact hashes, missing reveal sheets, or unexpected files in the reveal directory. Temporary build files are removed whether the build succeeds or fails.

## Release check

Automated checks cannot fully assess pedagogy or page composition. Before release, render every master PDF page, inspect the page images, verify that no table or formula is clipped, confirm that headings do not strand body text, and check the PDF font and link reports. Distribute the student base pack at course start. At each commitment point, distribute the corresponding single PDF from `output/pdf/reveals/`. The combined reveal master is for instructor printing and editing, not student distribution. Never distribute the instructor manual or the complete reveal master to students.
