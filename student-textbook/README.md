# Student Textbook Build

`Learning Cø / N*: A Student Textbook of Phenomenal Presence`, Student Edition 1.1, is the key-free student companion to the fourteen-session instructor manual.

The source is assembled from:

- `frontmatter.md`
- `drafts/chapters-01-05.md`
- `drafts/chapters-06-10.md`
- `drafts/chapters-11-14-and-backmatter.md`

Run the production build from the repository root:

```sh
/Users/philstilwell/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 student-textbook/build_student_textbook.py
```

The build writes:

- the assembled Markdown to `student-textbook/student-textbook.md`;
- the editable edition to `output/doc/learning-c0-n-star-student-textbook.docx`;
- the print-ready edition to `output/pdf/learning-c0-n-star-student-textbook.pdf`;
- the immutable public release to `public/teaching/student-textbook/1.1/learning-c0-n-star-student-textbook.pdf`; and
- the reproducibility and QA record to `output/student-textbook-build-manifest.json`.

The manifest's stable `release.pdf` object contains the public path and URL, physical page count, byte size, and SHA-256 digest. The same page count remains available under `qa.pdf.pages`. The full release audit is in `student-textbook/AUDIT.md`.

## Versioned-publication policy

The editioned public path is immutable by default. A rerun with identical PDF bytes leaves it unchanged. A differing PDF at the existing 1.1 path fails before the ordinary output files are published. The normal remedy is to bump `EDITION` and create a new versioned path.

For a deliberate correction that must replace the same edition, set the documented override for that one build:

```sh
C0_TEXTBOOK_ALLOW_PUBLIC_REPLACE=1 /Users/philstilwell/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 student-textbook/build_student_textbook.py
```

The manifest records whether the public file was created, already identical, or replaced with the explicit override.

The design palette is sampled from the reference image supplied for edition 1.0:

- burgundy `#601D1F`
- sandstone `#AA9062`
- espresso `#3B2317`
- umber `#8A5C39`
- pale gold `#FBE4AA`

## Release QA

The build validates all fourteen chapters; exact practice and thought-experiment headings; research callouts; worksheet introductions; Appendix D Cover and Sections A-R; source-paper coverage; ASCII-hyphen policy; metadata; live DOCX statistics; fixed, content-aware table widths; embedded PDF fonts; tagging and language; page geometry and rotation; outline entries; raw-markup leakage; sparse pages; palette contrast; and digests.

Every standalone worksheet, every Heading 3 beginning `Worksheet`, and every Appendix D Cover/A-R section receives a direct page break. PDF QA confirms that each registered worksheet has a distinct outline destination near the start of a distinct physical page. This automated check does not prove that all writable space fits on exactly one page, so the rendered PDF still requires a visual release review.

Every semantic PDF Figure must have `Alt` or `ActualText`; a missing alternative is a hard release failure. The structural check cannot determine whether LibreOffice has incorrectly tagged a decorative rule as a figure, so rendered-page and tag-tree review remain part of final release QA.

The source and extracted PDF text must use ASCII hyphens. Unicode dash variants, including U+2010 through U+2015, fail the build.

The release build uses no paid service or network API.
