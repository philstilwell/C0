# Student Textbook Build

`Learning Cø / N*: A Student Textbook of Phenomenal Presence` is the key-free student companion to the fourteen-session instructor manual.

The source is assembled from:

- `frontmatter.md`
- `drafts/chapters-01-05.md`
- `drafts/chapters-06-10.md`
- `drafts/chapters-11-14-and-backmatter.md`

Run the production build from the repository root:

```sh
/Users/philstilwell/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 student-textbook/build_student_textbook.py
```

The build writes the editable source edition to `output/doc/learning-c0-n-star-student-textbook.docx`, the print-ready edition to `output/pdf/learning-c0-n-star-student-textbook.pdf`, and the reproducibility and QA record to `output/student-textbook-build-manifest.json`. The full release audit is in `student-textbook/AUDIT.md`.

The design palette is sampled from the reference image supplied for edition 1.0:

- burgundy `#601D1F`
- sandstone `#AA9062`
- espresso `#3B2317`
- umber `#8A5C39`
- pale gold `#FBE4AA`

The release build uses no paid service or network API.
