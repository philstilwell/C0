# Cø / N* — Phenomenal Presence Lab

An interactive, paper-grounded explanation of Phil Stilwell's **Cø as N\*: A Minimal Network-Dynamics Model of Phenomenal Consciousness**.

The laboratory makes the model's central conjecture tangible:

```text
V ∧ (N₁ ∧ N₂ ∧ N₃) ⇔ Cø
```

- `V`: independently assessed viability
- `N₁`: integration / synergy
- `N₂`: report-independent system-wide causal availability
- `N₃`: recurrent stability

The simulator includes paper-derived cases, condition-level perturbations, a report/no-report dissociation, and the model's surrogate-conflict rule. It deliberately returns **indeterminate** when viability has not been assessed or preregistered measures conflict.

## Graduate teaching collection

The public [Teaching & Learning hub](https://philstilwell.github.io/C0/teaching/) presents an audited, coordinated instructor manual and student textbook, with the student session resource pack kept as a separate reveal-safe classroom companion.

The edition 2.1 teaching package is maintained in three audience-safe forms:

- [Instructor manual](output/pdf/teaching-c0-n-star-manual.pdf) - complete instructor manual with lecture notes, collaborative exercises, assessment materials, and keys;
- [Student base pack](output/pdf/c0-n-star-student-session-resource-pack.pdf) - key-free, reveal-safe student materials; and
- [Individual reveal directory](output/pdf/reveals/) - 50 independently generated, distributable evidence releases for staged classroom activities.

See the [teacher-manual build guide](teachers-manual/README.md) for build requirements, release safeguards, and the controlled-reveal distribution policy. See the [full audit](teachers-manual/AUDIT.md) for the conceptual, formal, pedagogical, accessibility, and artifact review.

The student textbook is built from [student-textbook/frontmatter.md](student-textbook/frontmatter.md) and the chapter drafts documented in the [student-textbook build guide](student-textbook/README.md). Its separate [release audit](student-textbook/AUDIT.md) records content, pedagogy, accessibility, and rendered-artifact verification.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run build:pages
```

`main` deploys automatically to GitHub Pages through `.github/workflows/pages.yml`.
