# Release Audit - Student Textbook, Edition 1.1

**Artifact:** *Learning Cø / N\*: A Student Textbook of Phenomenal Presence*

**Corpus baseline:** July 18, 2026

**Release build:** July 19, 2026 EDT

**Disposition:** **PASS - all identified release weaknesses corrected**

## Audit scope and method

This audit evaluated whether the student textbook:

1. mirrors the fourteen-part conceptual spine of the instructor's manual without exposing instructor keys or controlled reveals;
2. incorporates the full seven-paper Cø / N* research program at an accessible graduate register;
3. places the model fairly among relevant theories of consciousness;
4. distinguishes constructs, operational surrogates, evidence licenses, constitutive claims, and practical decisions;
5. gives students enough explanation, annotation, analogy, thought experiment, worked practice, collaboration, and independent transfer to learn and criticize a new theory;
6. provides usable worksheets on their own pages with clear introductions and sufficient writing space;
7. renders tables according to their semantic content rather than arbitrary equal widths;
8. preserves the supplied five-color palette while meeting legibility and contrast requirements;
9. produces valid, reproducible, accessible DOCX and PDF artifacts; and
10. publishes the student edition beside the instructor manual in an editioned teaching collection that can accommodate future revisions.

The review combined source-to-source comparison, formal and conceptual inspection, automated structural checks, direct link checks, rendered-page inspection at 144 dpi, DOCX and PDF binary validation, site tests, linting, static export, and release-digest comparison. Recommendations were implemented and the resulting artifact was rebuilt before final disposition.

## Corpus fidelity and provenance

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

The source trail pins all seven project links to repository commit `400f44a745e5425232a62f7a71487552fdfa9a0d`, identifies each paper's role in the synthesis, and distinguishes project sources from selected contextual readings. A 24-link audit found that all locators resolved at the first hop. Four DOI targets ended at publisher anti-bot responses after the DOI resolver supplied the correct destination; this is a publisher-access limitation, not a broken citation.

**Result:** PASS.

## Conceptual and formal findings

The audit found and corrected the following weaknesses:

| Weakness found | Correction implemented | Status |
|---|---|---|
| Compact statements of the biconditional could make the properties look like free-floating scores. | Made the hypothesis bearer-complete and indexed it to the same candidate, content, grain, regime, and interval throughout the main text, notation guide, glossary, applications, and source trail. | Closed |
| Necessity and sufficiency threats could be described in the wrong direction. | Paired each direction with its proper licensed counterexample and independent-anchor requirement. | Closed |
| Boundary selection could be treated as harmless preprocessing. | Made referent stability, causal admissibility, dynamical autonomy, role completeness, inclusion-minimality, and separability part of the assessment record before attribution. | Closed |
| `N1` could be mistaken for activity, correlation, redundancy, generic complexity, or arbitrary whole-system synergy. | Defined content-supporting joint contribution, separated the neighboring constructs, added XOR as a limited teaching case, and required construct and discriminant validity. | Closed |
| `N2` could collapse into current activation, spatial spread, node count, executive access, or report. | Defined report-independent system-wide causal availability through qualifying recipient classes, effect, selectivity, route, latency, context, diversity, evenness, and reduced-family checks. | Closed |
| Positive availability evidence could be inferred from any downstream response. | Added route dependence, source fidelity, selectivity, latency, class diversity, and coverage gates, with explicit positive, negative, indeterminate, and unlicensed outcomes. | Closed |
| `N3` could collapse into duration or allow a favored surrogate to substitute silently for recurrent topology. | Distinguished recurrent maintenance, feedforward duration, passive traces, working memory, and metastability; alternative surrogates now require frozen causal roles and conflict rules. | Closed |
| Evidence for a component could be confused with evidence that it constitutes experience. | Added recurring evidence-target-constitution ladders and explicit “Do not infer” annotations. | Closed |
| A single result label could conceal why evidence remains unresolved. | Introduced the indexed assessment tuple and the five-part cause profile for scarcity, surrogate discordance, model dependence, boundary sensitivity, and transport uncertainty. | Closed |
| A lesion or rule deletion could be called component necessity without a selective causal test. | Distinguished criterion, mechanism, and measurement ablation; added exact selective-change intervals, retained-component equivalence, referent preservation, rescue, coverage, held-out anchors, and anti-circularity. | Closed |
| Profile-level disagreement could be mistaken for bearer-level disagreement. | Required each frozen profile rule to be propagated through the candidate lattice and separately measured bearer-output disagreement coverage. | Closed |
| Presence and phenomenal character could be conflated. | Separated the presence gate, independently anchored phenomenal relations, causal-trajectory geometry, held-out bridge, deformation test, and surviving symmetries. | Closed |
| A readable schematic could be confused with the representation, its running realization, or proof of the identity claim. | Added the three-object distinction, the role vector, separate reconstruction and constitution arrows, and blind schematic-competence criteria. | Closed |
| Cross-substrate application could rely on numerical similarity alone. | Added construct, causal-role, calibration, boundary/regime, and population-validity transport requirements. | Closed |
| Scientific classification could dictate a clinical or ethical action. | Kept scientific status, uncertainty, loss structure, action threshold, and proportional response in separate records. | Closed |
| Comparisons could rely on theory labels or mismatched explananda. | Required exact version cards, matched targets or explicit bridges, symmetric validity rules, diagnostic cases, and advocate approval or recorded objection. | Closed |
| Validation could be treated as one all-or-nothing achievement. | Separated six capstone branches and preserved branch-specific outcomes, failure propagation, and revision commitments. | Closed |
| Indeterminacy could become automatic confirmation. | Defined positive, negative, indeterminate, and unlicensed outcomes with prospective rules and a required next discriminating commitment for every result. | Closed |

The final text treats the model as a conditional, vulnerable research program. A polished exposition is never offered as evidence that the biconditional is true.

**Result:** PASS.

## Theory placement and differentiation

The textbook locates Cø / N* among integrated-information, global-workspace, recurrent-processing, higher-order, predictive-processing, quality-space and representational-geometry, attention-schema and self-model, embodied/enactive/affective, illusionist, panpsychist and fundamentalist, biological-autonomy, active-inference, extended/group-mind, and electromagnetic/synchrony approaches.

Comparisons are organized by matched explanandum, bearer rule, central commitment, report role, temporal role, prediction, and evidence license. The text acknowledges shared pressures before stating differences. It does not claim novelty from vocabulary or superiority from having more conjuncts. The proposed differentiators are the bearer-first order, noncompensatory conjunction, report-independent causal-availability test, bounded recurrence commitment, four-way evidence policy, component-minimality program, presence-gated character bridge, and exposed schematic identity claim. Each becomes meaningful only through a prospective diagnostic case.

**Result:** PASS.

## Register, annotation, and pedagogy

The assembled source contains **65,371 words** across **14 chapters**. Technical terms are introduced first in plain language, then connected to notation, operational decisions, empirical risks, and inferential limits. Quantitative checks found:

- 112 chapter annotation blocks across “Plain language,” “Why it matters,” “Method note,” “Do not infer,” and “Checkpoint” functions;
- 22 source, context, or research-status callouts;
- 30 explicitly headed thought experiments;
- 35 explicit “Where the analogy breaks” annotations;
- 22 collaborative-work sections across the 14 chapters;
- 14 quick-check sets, 14 counterexample challenges, 14 individual-transfer tasks, and 14 exit tickets;
- worked examples, frozen cases, role rotations, transition notebooks, disagreement contracts, peer review, and an adversarial capstone; and
- a notation guide, glossary, fair-comparison guide, empirical-claim sheet, rubric, source trail, contextual readings, and reading record.

Analogies are used as scaffolds rather than evidence: each identifies its intended mapping and failure point. Collaborative work produces inspectable artifacts such as dockets, ledgers, maps, matrices, predictions, revision rules, or adjudicated claims. Roles rotate so that advocacy is an intellectual responsibility rather than a required personal commitment.

The student artifact contains no answer guide, instructor key, reveal sheet, controlled-reveal result, or answer-bearing metadata. Forbidden-content checks are part of the production build.

**Result:** PASS.

## Worksheets and collaborative usability

The final edition contains **52 registered worksheet pages**. Every standalone worksheet, every worksheet continuation, and every Appendix D Cover/A-R section:

- begins with a purpose and procedure explanation;
- starts on a distinct physical page;
- names the artifact students must produce;
- provides writing, drawing, checklist, or decision space proportionate to the prompt; and
- separates logically different records instead of compressing them into undersized cells.

Audit corrections include separate science-action and claim-license sheets; common-question, symmetry, objection, diagnostic-case, disagreement, rehearsal, review, and advocate-approval records; a two-page cover/provenance record; collaboration, role-rotation, and governance pages; split boundary and viability decisions; branch-specific capstone continuations; separate partition, blinding, missingness, reproducibility, outcome, transport, character, schematic, action, red-team, and preregistration records; and a balanced reading record.

The transition notebook now supplies a labeled drawing frame. The causal-diagram audit provides a full usable workspace rather than a decorative strip. The fair-comparison rehearsal begins directly on its worksheet page, with its review continuation on the next page.

**Result:** PASS.

## Tables, pagination, and rendered-page audit

The edition contains **79 content tables**, plus the five-cell cover palette strip. Every table uses fixed layout with explicit table width, grid-column widths, and cell widths. Semantic profiles protect formulas and numerical intervals, keep label/status columns compact, widen substantive prose, and give fillable cells practical height. Table headers repeat across page breaks. Rows are prevented from splitting where that would impair interpretation.

Pagination rules keep compact lists, thought-experiment stages and conclusions, chapter summaries, strategy tables, and final table rows together when space permits. Corrections removed stranded list fragments, isolated transition notes, split reasoning sequences, a redundant fair-comparison heading, ambiguous blank work areas, and worksheet spillovers.

The final PDF has **230 pages** at **7 x 10 inches**. Three independent visual sweeps inspect every rendered page at 144 dpi in ranges 1-77, 78-154, and 155-230. The release gate checks for clipping, overlap, malformed formulas, missing glyphs, table-width failures, midword column breaks, stranded headings, unintended sparse pages, and inconsistent color or hierarchy. Automated checks independently report no empty or sparse pages and confirm 52 distinct worksheet start pages.

**Result:** PASS.

## Color, typography, and accessibility

The supplied image was sampled into the exact edition palette:

- burgundy `#601D1F`;
- sandstone `#AA9062`;
- espresso `#3B2317`;
- umber `#8A5C39`; and
- pale gold `#FBE4AA`.

Pale gold and sandstone organize the page without becoming low-contrast body text. Verified contrast ratios include burgundy on pale gold at **9.91:1**, espresso on pale gold at **11.66:1**, umber on pale gold at **4.57:1**, and espresso on sandstone at **4.78:1**. Color is not the sole carrier of theoretical or evidential status.

The PDF is tagged, declares `en-US`, contains 478 outline entries, has no encryption or JavaScript, uses zero page rotation, and embeds every font. Body text is 10.1 pt Liberation Serif; compact chapter-end reference terms remain at 9.4 pt. The current edition contains no semantic figures. The build nevertheless treats a missing `Alt` or `ActualText` entry on any future Figure tag as a hard failure and records the structural limitation that decorative mis-tagging still requires visual review.

**Result:** PASS.

## Structural, binary, and reproducibility QA

- Source validators: PASS - 14 chapters, expected practice structures, 30 thought experiments, 35 analogy limits, 52 introduced worksheets, seven named corpus items, and no forbidden key/reveal content.
- Character policy: PASS - source and extracted PDF text use ASCII hyphens; Unicode dash variants are rejected.
- DOCX ZIP integrity: PASS - no corrupt members.
- DOCX live statistics: PASS - 230 pages and 64,315 application-reported words.
- Full Ghostscript PDF parse: PASS - no structural rendering errors.
- PDF metadata and geometry: PASS - 230 pages, 504 x 720 points, zero rotation.
- Empty/sparse page guards: PASS - none.
- Embedded-font check: PASS - all fonts embedded and subset.
- Tagging/language/outline checks: PASS.
- Release/public identity: PASS - release, public, and static-export PDFs are byte-identical.
- Site test suite: PASS - 10 of 10 tests.
- ESLint: PASS.
- Production GitHub Pages build: PASS - all routes statically generated under `/C0`.
- Workflow YAML and manifest-driven digest gate: PASS.
- Source formatting check: PASS - no whitespace errors.

Release hashes:

| Artifact | SHA-256 |
|---|---|
| `student-textbook/student-textbook.md` | `6c33ee84242118f5ae329e08200165a82a743f5939141bc8b7536a2f6606a130` |
| `output/doc/learning-c0-n-star-student-textbook.docx` | `bb1d47be7549b5a9221e60329a334d6759534cf562cddf6f63ca818ac85e4964` |
| `output/pdf/learning-c0-n-star-student-textbook.pdf` | `cb58b0052d50b39a4edc7012d268a47fe47342c34b9141f5a1063f511150223c` |
| `public/teaching/student-textbook/1.1/learning-c0-n-star-student-textbook.pdf` | `cb58b0052d50b39a4edc7012d268a47fe47342c34b9141f5a1063f511150223c` |

The complete machine-readable record is `output/student-textbook-build-manifest.json`. The editioned public path is immutable by default; same-edition replacement requires the documented explicit override and is recorded in the manifest.

## Site placement and future pairing

The textbook is published under `public/teaching/student-textbook/1.1/`, parallel to the instructor manual rather than under temporary student handouts. The teaching page reads the release edition, path, page count, byte size, and digest-bearing manifest instead of duplicating fragile hard-coded metadata. The page presents a coordinated collection:

- the instructor manual is clearly marked as containing keys and controlled-reveal guidance;
- the textbook is the primary student-facing course text;
- the student session resource pack is identified as a reveal-safe companion, not a textbook replacement; and
- editioned URLs and parallel cards leave room for later manual, textbook, and resource-pack revisions.

The deployment workflow verifies the release PDF, public PDF, exported PDF, manifest digest, byte count, and rendered teaching-page link before upload.

**Result:** PASS.

## Residual limitations

No release-blocking weakness remains. The following limits are intentionally preserved:

1. Cø / N* is a new research program; the textbook explains and pressure-tests the theory but does not validate it by exposition.
2. The contextual literature is selected for accurate theory placement and diagnostic comparison, not presented as an exhaustive consciousness bibliography.
3. Several thresholds, estimators, bridge rules, and transport conditions are prospective research commitments rather than established measurement standards.
4. Automated page and tag checks complement but cannot replace human review of meaning, visual balance, and future semantic figures.

## Final disposition

Edition 1.1 is coherent with the instructor manual, complete across the seven-paper corpus, accessible without being reduced to slogans, pedagogically active, key-free, visually faithful to the supplied palette, structurally valid, reproducible, and prepared for course distribution.

**FINAL: PASS - approved for release.**
