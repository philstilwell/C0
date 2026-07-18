# Cø / N* — Phenomenal Presence Lab

An interactive, paper-grounded explanation of Phil Stilwell's **Cø as N\*: A Minimal Network-Dynamics Model of Phenomenal Consciousness**.

The laboratory makes the model's central conjecture tangible:

```text
V ∧ (N₁ ∧ N₂ ∧ N₃) ⇔ Cø
```

- `V`: independently assessed viability
- `N₁`: integration / synergy
- `N₂`: broadcast availability (not overt report)
- `N₃`: recurrent stability

The simulator includes paper-derived cases, condition-level perturbations, a report/no-report dissociation, and the model's surrogate-conflict rule. It deliberately returns **indeterminate** when viability has not been assessed or preregistered measures conflict.

## Graduate teacher's manual

The audited edition 2.1 teaching package is available in three audience-safe forms:

- `output/pdf/teaching-c0-n-star-manual.pdf` - complete instructor manual with lecture notes, collaborative exercises, assessment materials, and keys;
- `output/pdf/c0-n-star-student-session-resource-pack.pdf` - key-free, reveal-safe student base pack; and
- `output/pdf/reveals/` - 50 individually distributable evidence releases for staged classroom activities.

See `teachers-manual/README.md` for build requirements, release safeguards, and the controlled-reveal distribution policy. See `teachers-manual/AUDIT.md` for the conceptual, formal, pedagogical, accessibility, and artifact audit.

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
