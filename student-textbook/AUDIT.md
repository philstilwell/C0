# Release Audit — Student Textbook, Edition 1.0

**Artifact:** *Learning Cø / N\*: A Student Textbook of Phenomenal Presence*

**Corpus baseline:** July 18, 2026

**Release build:** July 18, 2026 EDT / July 19, 2026 UTC

**Disposition:** **PASS — all release blockers closed**

## Audit scope

This audit tested whether the textbook:

1. mirrors the fourteen-part conceptual spine of the instructor's manual without exposing instructor keys or controlled reveals;
2. explains the complete seven-paper Cø / N* program at an accessible graduate register;
3. distinguishes reconstruction, operationalization, evidence, constitution, and practical action;
4. gives students enough annotation, analogy, thought experiment, worked practice, collaboration, and independent transfer to learn a new theory critically;
5. places the model fairly among major neighboring theories;
6. preserves the supplied five-color palette without sacrificing legibility;
7. renders cleanly in both editable DOCX and print-ready PDF form; and
8. is reproducible, integrity-checked, and correctly placed beside the instructor's manual on the teaching site.

## Corpus fidelity and theory coverage

All seven project sources are named and substantively represented. The build records their exact SHA-256 baselines:

| Stable project source | SHA-256 |
|---|---|
| `public/paper.pdf` (*Cø as N\**) | `a0fffb89a12ab722b6472c2c0e32f2344c6fbda7ac999ca47a9fb1d2616b524d` |
| `papers/where-is-the-conscious-subject/manuscript.md` | `035802e80babad63319e8ad8f3ce54403bec9028952a077f0c8303fda9d4d7ec` |
| `papers/consciousness-without-report/manuscript.md` | `5cfd2f65957650be6630924603ba0286a6b11cf7653194e115cbcdc03682d318` |
| `papers/indeterminacy-as-scientific-result/manuscript.md` | `029010b41c326d1bce6859119f69404946ad9b0964112c5b63f10f9b7c4fc396` |
| `papers/ablating-n-star/manuscript.md` | `a03f7f612aad044d7e59443c797f107f596f323245f6f45fee6ee3be97e9531a` |
| `papers/from-phenomenal-presence-to-phenomenal-character/manuscript.md` | `63f4960a66b41dda4a5f678651908587e38facc258825ca0af5370d262a965e2` |
| `papers/consciousness-in-the-schematic/manuscript.md` | `636e7c1fd0220943028ec5f2960c9d2f884f9c1f880c684ad98b6bc17b02aab6` |

The chapter sequence mirrors the manual's instructional arc: explanandum and theory placement; the bearer-complete biconditional; subject boundary; viability and integration; report-independent availability; recurrence; evidential licensing and indeterminacy; component ablation; phenomenal character; schematic versus realization; biological and clinical applications; nonhuman, organoid, and artificial cases; differentiation and objections; and adversarial research design.

The textbook also provides contextual orientation to IIT, GNWT, recurrent-processing, higher-order, predictive-processing, quality-space and representational-geometry, attention-schema and self-model, embodied/enactive/affective, illusionist, panpsychist and fundamentalist, biological-autonomy, active-inference, extended/group-mind, and electromagnetic/synchrony approaches. These comparisons are framed as exact points of agreement, pressure, or potential discrimination—not as verdicts from labels alone.

**Result:** PASS. The student edition covers the complete project corpus and gives the model a clear, non-triumphalist place in the wider theory landscape.

## Conceptual and formal audit

The following weaknesses were found during drafting and corrected before release:

| Weakness found | Correction implemented | Final status |
|---|---|---|
| Compact statements of the biconditional could omit the candidate bearer and make a property look like a free-floating score. | Added bearer-complete guardrails throughout the front matter, core-model chapter, applications, notation appendix, glossary, and source trail. | Closed |
| Necessity and sufficiency threats were at risk of being described in the wrong direction. | Rewrote the two directions and paired each with the proper counterexample type. | Closed |
| Evidence for a component could be mistaken for evidence that the component constitutes experience. | Added recurring evidence/target/constitution ladders and explicit “Do not infer” annotations. | Closed |
| Boundary choice could be treated as a harmless preprocessing step. | Made referent, causal admissibility, dynamical autonomy, role completeness, and inclusion-minimality part of the assessment record. | Closed |
| The availability condition could collapse into report, executive access, diffusion, node count, or anatomical spread. | Added recipient classes, five recipient gates, a worked five-class calculation, and report-independent routing cases. | Closed |
| A single score could conceal why evidence remains unresolved. | Introduced the assessment tuple `A = <S, C, T, E, M, V>` and the cause profile `P_R(A) = <e, s, m, b, t>`. | Closed |
| Component necessity could be inferred from an uncontrolled lesion or circularly selected diagnostic cases. | Distinguished criterion, mechanism, and measurement ablation; added selective-change, equivalence, coverage, held-out testing, and anti-circularity requirements. | Closed |
| Phenomenal-character prediction could be confused with the presence claim. | Separated the presence gate, independently anchored phenomenal geometry, causal-trajectory geometry, deformation test, and symmetry limits. | Closed |
| A readable schematic could be confused with its running realization or with the conscious bearer. | Added a three-object distinction and a dedicated schematic-reading chapter. | Closed |
| Scientific classification could be allowed to dictate a high-stakes clinical action. | Kept scientific status, uncertainty, loss structure, and action thresholds in separate records. | Closed |

The core theory remains conditional and empirically vulnerable. The book repeatedly distinguishes support for an estimator, a component role, the conjunction, the constitutive interpretation, and a practical decision. It also explains positive, negative, indeterminate, and model-disagreement outcomes without turning abstention into automatic confirmation.

**Result:** PASS.

## Register, annotation, and pedagogy

The final source contains **59,808 words** across **14 chapters**. Technical terms are introduced in plain language, then connected to formal notation, operational decisions, and limits. The book does not remove graduate-level issues; it stages them.

Quantitative checks found:

- 14 chapter practice studios;
- 14 collaborative exercises and 8 additional collaborative discussions;
- 14 quick-check sets, 14 counterexample challenges, and 14 exit tickets;
- 30 explicitly headed thought experiments, with 33 chapter-level thought-experiment mentions;
- 110 chapter annotation blocks across “Plain language,” “Why it matters,” “Method note,” “Do not infer,” and “Checkpoint” functions;
- 34 explicit “Where the analogy breaks” annotations;
- worked examples, frozen case packets, individual transfer work, transition notebooks, and a complete capstone workbook; and
- a glossary, notation guide, empirical-claim annotation sheet, fair-comparison guide, and source trail.

Every analogy is treated as a scaffold rather than evidence: its intended mapping and its failure point are both supplied. Exercises require products that can be inspected—dockets, ledgers, matrices, predictions, causal maps, revision rules, or adjudicated claims—rather than merely inviting unstructured conversation. Collaborative tasks specify roles or comparison duties so that students must expose assumptions and revise one another's work.

The student artifact contains no answer guide, instructor key, reveal sheet, or controlled-reveal result. Automated forbidden-content checks are part of the build.

**Result:** PASS.

## Tables, worksheets, and pagination

The edition uses **27 fixed-layout tables** with widths assigned according to semantic content rather than equal columns. Dense mathematical fields receive protected width; prose columns receive more space than labels; numerical and status columns remain compact. All workbook and annotation sheets begin with an explanation of purpose and procedure. The empirical-claim annotation sheet begins on its own page, and the capstone branch selector remains intact as one decision block.

The final PDF has **178 pages** at **7 × 10 inches**. Three independent visual audits inspected every rendered page at native resolution in ranges 1–60, 61–120, and 121–178. They found:

- no clipping or overlap;
- no malformed glyphs or formulas;
- no broken tables or midword column failures;
- no orphaned headings, prompts, or one-line paragraph fragments;
- no accidental sparse pages; and
- only purposeful open space on writable workbook or section-ending pages.

Earlier pagination defects—short fragments across page turns, a sparse chapter transition, a split six-branch capstone choice, and a partial worksheet introduction—were corrected and the affected ranges re-audited.

**Result:** PASS.

## Color, typography, and accessibility

The supplied image was sampled into the exact edition palette:

- burgundy `#601D1F`;
- sandstone `#AA9062`;
- espresso `#3B2317`;
- umber `#8A5C39`; and
- pale gold `#FBE4AA`.

Pale gold and sandstone organize the page without becoming low-contrast body text. Contrast checks include burgundy on pale gold at **9.91:1**, espresso on pale gold at **11.66:1**, and umber on pale gold at **4.57:1**. The site card uses the same palette.

The PDF is tagged, declares `en-US`, contains a navigable outline, has no encryption or JavaScript, and embeds every font. Body text is 10.1 pt Liberation Serif with restrained spacing; headings and callouts use a stable hierarchy. Color is never the sole carrier of theoretical status.

**Result:** PASS.

## Structural, binary, and reproducibility QA

- DOCX ZIP integrity: PASS; no corrupt members.
- Full Ghostscript PDF parse: PASS; no structural rendering errors.
- PDF metadata and geometry: PASS; 178 pages, 504 × 720 points, zero rotation.
- Empty-page check: PASS; none.
- Sparse-page guard: PASS; the sole intentionally open workbook page is recorded separately.
- Embedded-font check: PASS; all fonts embedded and subset.
- Textbook build validators: PASS; 14 chapters, expected annotation and practice structures, seven named corpus items, and no forbidden key/reveal content.
- Release/public identity: PASS; the site copy and release PDF are byte-identical.
- Site test suite: PASS; 10 of 10 tests, including textbook path, palette, and digest checks.
- ESLint and production GitHub Pages build: PASS; all routes statically generated.

Release hashes:

| Artifact | SHA-256 |
|---|---|
| `student-textbook/student-textbook.md` | `09442e64fff81fd5462a92c37290ff38ca048cd391bf31bbeb2eda4939e9e3ce` |
| `output/doc/learning-c0-n-star-student-textbook.docx` | `ce91fdd83600f1226b1c872ea06dfe2a1b4d59e491a8070d889f15f8695fd0ab` |
| `output/pdf/learning-c0-n-star-student-textbook.pdf` | `8d0ba2c9bfe55e99736c602c4607d7fe5d4c30dc8da422c12fb261d2d982d04f` |
| `public/teaching/student-textbook/1.0/learning-c0-n-star-student-textbook.pdf` | `8d0ba2c9bfe55e99736c602c4607d7fe5d4c30dc8da422c12fb261d2d982d04f` |

The complete machine-readable record is `output/student-textbook-build-manifest.json`.

## Site placement and future pairing

The textbook is placed in an editioned path under `public/teaching/student-textbook/1.0/`, parallel to the instructor manual rather than under temporary student handouts. The teaching page presents a coordinated two-text collection:

- the instructor manual remains clearly marked as containing keys and controlled-reveal guidance;
- the textbook is the primary student-facing course text;
- the session resource pack is explicitly described as a companion handout, not a textbook replacement; and
- the paired card layout and stable versioned URLs leave room for later textbook and manual editions without breaking the collection architecture.

Site tests verify the paths, release labels, absence of “forthcoming” language, palette hooks, and byte identity of the public PDF.

**Result:** PASS.

## Residual limitations

No release-blocking weakness remains. Three limitations should stay explicit:

1. Cø / N* is a new research program; a polished textbook does not validate the theory.
2. The contextual literature is selected to teach the theory landscape fairly, not presented as an exhaustive consciousness bibliography.
3. Several operational rules are prospective research commitments. Students should treat them as testable proposals, not established measurement standards.

## Final disposition

Edition 1.0 is coherent with the instructor manual, complete across the seven-paper corpus, accessible without being simplified into slogans, pedagogically active, visually faithful to the supplied palette, key-free, technically valid, and ready for course distribution.

**FINAL: PASS — approved for release.**
