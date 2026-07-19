# Teacher's Manual Build

The build combines `teachers-manual.md` with the audience-classified blocks in `session-resource-pack.md` to produce three editions: the complete instructor manual, a key-free and reveal-safe student base pack, and a key-free instructor-controlled reveal master. It also builds one independently distributable PDF for every controlled reveal directly through Pandoc and LibreOffice, preserving document tags and language metadata. The source parser freezes the complete 106-block ID, audience, and order inventory and fails closed if substantive resource text falls outside it.

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

The build validates all DOCX containers, required content, the complete audience schema, fixed table grids, figures, PDF outlines, page counts, blank and materially sparse pages, font embedding, document tagging and language, worksheet isolation and introductions, and common source artifacts before replacing any published file. For the instructor contents table, all 27 printed page references and all 27 live PDF link destinations must agree with the final outline. Every reveal must independently pass one-page, title, outline, tagging, language, font, and leakage checks. A build lock prevents concurrent publishers, and publication retains rollback copies until the manifest is in place. It writes:

- `output/doc/teaching-c0-n-star-manual.docx`
- `output/pdf/teaching-c0-n-star-manual.pdf`
- `output/doc/c0-n-star-student-session-resource-pack.docx`
- `output/pdf/c0-n-star-student-session-resource-pack.pdf`
- `output/doc/c0-n-star-instructor-controlled-reveal-sheets.docx`
- `output/pdf/c0-n-star-instructor-controlled-reveal-sheets.pdf`
- `output/pdf/reveals/c0-n-star-session-...-reveal.pdf` (50 individually releasable PDFs)
- `output/teachers-manual-build-manifest.json`

The schema-2 JSON manifest records hashes for all seven corpus sources, all other source dependencies, release files, and generated Markdown; normalized content digests; included audience-block IDs; per-reveal titles, sessions, page counts, accessibility status, and hashes; Python library, platform, and tool versions; bundled font-file hashes; the corpus baseline; and automated QA results. A post-publication check rejects stale sources, mixed artifact hashes, normalized-content mismatches, missing reveal sheets, or unexpected files in the reveal directory. Temporary build files are removed whether the build succeeds or fails.

Reproducibility here means semantic and layout reproducibility. DOCX container timestamps, LibreOffice PDF creation dates and document IDs, and the manifest release timestamp may vary across otherwise identical builds. The manifest therefore records both exact release-file hashes and normalized content digests that exclude those volatile metadata fields.

## Release check

Automated checks cannot fully assess pedagogy or page composition. Before release, render every master PDF page, inspect the page images, verify that no table or formula is clipped, confirm that headings do not strand body text, and inspect representative individual reveal sheets in addition to their complete structural scan. Distribute the student base pack at course start. At each commitment point, distribute the corresponding single PDF from `output/pdf/reveals/`. The combined reveal master is for instructor printing and editing, not student distribution. Never distribute the instructor manual or the complete reveal master to students.
