---
title: "From Phenomenal Presence to Phenomenal Character"
subtitle: "A Dynamical-Geometry Extension of the $N^*$ Model"
author: "Phil Stilwell"
date: |
  Independent Scholar\
  ORCID: 0009-0009-3725-8682\
  July 11, 2026
---

\begin{center}
\textbf{A visual preview:}
\end{center}

![](visual-preview.png){width=100%}

\newpage

## Abstract

The $N^*$ model proposes a dynamical condition for minimal phenomenal presence: under an independently assessed viability condition $V$, experience is present when integration or synergy, system-wide availability, and recurrent stability are jointly realized. That proposal deliberately leaves a deeper question open. Even if two states both satisfy the presence condition, why should one feel red rather than green, painful rather than neutral, loud rather than faint, or temporally flowing rather than static? This paper develops a dynamical-geometry extension that separates the gate for whether experience is present from the relational structure that determines what the experience is like. The presence gate remains $V\land N^*$. Phenomenal character is modeled by a bridge $Q_\Phi(G_c,\Delta)$ from a content-specific causal-trajectory geometry $G_c$ over an interval $\Delta$ into an empirically anchored quality space. $G_c$ is not a snapshot of activation or a decoder embedding. It is a perturbation-derived neighborhood containing distances among content trajectories, admissible transitions, occupancy, and temporal path structure. The bridge is licensed only when it predicts held-out phenomenal similarity and transition relations, survives coordinate changes and nuisance controls, and transports across subjects or substrates only under separate validation. The framework decomposes character into modality stratum, within-stratum location, intensity, valence, and temporal path features without assuming that all modalities share one Euclidean space. It also makes a principled limitation explicit: relational evidence identifies phenomenal character only up to transformations that preserve every measured relation. Global inversions or other automorphisms therefore remain underdetermined unless additional anchors break the symmetry. The proposal yields positive, negative, indeterminate, or unlicensed results for a specified bridge while keeping those results distinct from the presence classification. It supplies empirical protocols, synthetic examples, falsification conditions, and preregistration requirements. The result is not a completed reduction of qualia. It is a risky mapping hypothesis that connects the $N^*$ research program to phenomenal differentiation without allowing geometry alone to manufacture consciousness.

**Keywords:** phenomenal consciousness; phenomenal presence; phenomenal character; quality spaces; representational geometry; causal dynamics; neural manifolds; structuralism; qualia; similarity; valence; temporal experience

## 1. Introduction: Presence Is Not Yet Character

A theory can answer whether experience is present while remaining silent about which experience is present. This separation is easy to state and difficult to respect. Consciousness research often moves among state-level questions, content-level questions, and questions about phenomenal quality as if one successful measure could answer all three. A perturbational index may distinguish wakefulness from unresponsiveness. A decoder may distinguish faces from houses. A report may distinguish red from green. None of these results by itself explains why the conscious state has the particular phenomenal character it does (Nagel, 1974).

The $N^*$ model was designed around minimal phenomenal presence, denoted $C_0$: whether there is something it is like for a system to be in a state, without requiring report, introspection, or self-reflection (Block, 1995; Stilwell, 2026a). Its central hypothesis is intentionally strong:

$$
V(S)\land N^*(S,c) \Longleftrightarrow C_0(S,c),
\qquad
N^*=N_1\land N_2\land N_3.
$$

**Annotation.** $S$ is an independently individuated candidate system; $c$ is the content or content-bearing state under evaluation; $V$ is viability; $N_1$ is integration or synergy; $N_2$ is report-independent system-wide availability; and $N_3$ is recurrent stability. The biconditional is the core model's empirical conjecture, not a definition established here.

This hypothesis addresses presence. It does not yet explain why two $N^*$-positive states differ in modality, similarity, intensity, valence, spatial organization, or temporal character. The omission is not cosmetic. A model that never connects its dynamics to phenomenal differences remains incomplete as a theory of consciousness, even if it performs well as a presence test.

The natural extension is a two-layer architecture:

$$
\text{presence gate}=V\land N^*,
$$

$$
\text{phenomenal character}=Q_\Phi(G_c,\Delta).
$$

The first expression asks whether phenomenal attribution is licensed. The second asks where an admitted content lies in a structured phenomenal domain and how it moves there through time. $G_c$ denotes content-specific causal-trajectory geometry, $\Delta$ the evaluation interval, and $Q_\Phi$ a bridge indexed by a declared mapping specification $\Phi$.

The central thesis is:

> The conditions that make an experience present should be separated from the relational causal structure that determines what the experience is like. $V\land N^*$ supplies the presence gate; a validated mapping from content-specific dynamical geometry to quality-space structure supplies phenomenal differentiation.

The phrase "validated mapping" carries the paper's main burden. It is not enough to point to a neural manifold and rename its axes "qualia." Nor is it enough to fit subjective ratings and declare identity. The bridge must be independently anchored, intervention-sensitive, predictively successful on held-out contents, stable across reasonable measurements, and explicit about the symmetries it cannot break.

### 1.1 The contribution

The paper makes seven linked contributions.

1. It distinguishes the truth conditions and evidence for phenomenal presence from those for phenomenal character.
2. It defines $G_c$ as a perturbation-derived geometry of causal trajectories rather than an activation map or arbitrary latent embedding.
3. It gives $Q_\Phi$ a substantive bridge principle based on held-out preservation of phenomenal distances, neighborhoods, and transitions.
4. It treats modality, similarity, intensity, valence, and temporal character as different structural features rather than one undifferentiated coordinate vector.
5. It blocks unconscious representational geometry from counting as phenomenal by requiring the independent presence gate.
6. It identifies phenomenal character only up to empirically unbroken quality-space symmetries, making inversion and transport limits explicit.
7. It supplies a four-outcome mapping test, preregistration rules, and conditions under which the extension would fail.

This is a theoretical and methodological proposal. It does not claim that every phenomenal property is relational, that one universal quality space exists, or that a good geometry fit closes the explanatory gap. Its stronger claim is conditional and risky: if phenomenal differentiation is systematically determined by content-specific causal geometry, then interventions that reshape that geometry should produce corresponding, predictable changes in phenomenal relations.

### 1.2 Relation to the companion papers

The boundary paper requires system individuation before consciousness measurement (Stilwell, 2026c). The availability paper defines $N_2$ as counterfactual causal reach rather than report or observed spread (Stilwell, 2026d). The indeterminacy paper distinguishes valid nondiscrimination from failed interpretability (Stilwell, 2026b). The present paper inherits all three constraints.

**Annotation.** A quality map cannot borrow a boundary from one system, presence evidence from another, and content geometry from a third. Nor may a failed bridge be converted into evidence that no experience occurred. Presence and character outputs remain indexed to the same candidate, grain, content family, regime, and interval.

## 2. Two Explananda, Two Kinds of Error

### 2.1 Presence is a gate, not a coordinate

Presence is not naturally represented as one more axis beside hue, pitch, pain, or pleasantness. It answers whether the system is in the phenomenal domain at all. Character answers how admitted experiences are differentiated within that domain.

Let

$$
P(S,c;\Theta_P)\in\{1,0,?,\varnothing\}
$$

denote the scientific presence result under specification $\Theta_P$: positive, negative, indeterminate, or unlicensed. A positive result supports $V\land N^*$ for the target. A negative result supports failure under a valid test. A question mark marks valid but unresolved evidence. $\varnothing$ marks a test whose interpretation conditions failed.

**Annotation.** The four symbols describe scientific outputs, not graded amounts of phenomenality. In particular, $?$ is not half an experience and $\varnothing$ is not evidence of absence.

Only a positive presence result licenses an ordinary phenomenal-character attribution in this framework:

$$
\chi(S,c)=
\begin{cases}
Q_\Phi(G_c,\Delta), & P(S,c;\Theta_P)=1,\\
\bot_P, & P(S,c;\Theta_P)\in\{0,?,\varnothing\}.
\end{cases}
$$

**Annotation.** $\chi(S,c)$ is the attributed phenomenal character. $\bot_P$ means "character attribution not licensed by the presence gate." It does not mean that a zero vector, blank quale, or unconscious quality has been measured. If the presence result is indeterminate, character evidence may still be collected, but its phenomenal interpretation remains conditional.

### 2.2 Shared presence does not imply shared character

For two contents $c_i$ and $c_j$ in the same viable system,

$$
P(S,c_i)=P(S,c_j)=1
\quad\not\Rightarrow\quad
\chi(S,c_i)=\chi(S,c_j).
$$

Both states may satisfy integration, availability, and recurrence while occupying distant positions in a quality space. A red experience and a green experience can be equally present yet phenomenally distinct. Likewise, two pains can both be present while differing in intensity, affective tone, bodily location, and temporal profile.

### 2.3 Shared geometry does not imply shared presence

The converse error is equally important. Nonconscious sensory and computational states can exhibit rich representational geometry. Discriminable patterns, neighborhood structure, and task-general manifolds occur in systems and processing stages that a theory may not classify as phenomenally present. Quality-space approaches themselves need not assume that every quality-bearing perceptual state is conscious (Rosenthal, 2015).

Therefore:

$$
G_{c_i}\cong G_{c_j}
\quad\not\Rightarrow\quad
P(S,c_i)=P(S,c_j)=1.
$$

The presence gate prevents a decoder, embedding, or similarity matrix from manufacturing consciousness. Geometry becomes phenomenal geometry only when its bearer and content satisfy the independent gate and the bridge is licensed.

\newpage

### 2.4 The two-layer error matrix

| Presence result | Character-map result | Licensed conclusion | Prohibited conclusion |
|---|---|---|---|
| Positive | Supported | The content is present and the specified relational character is supported. | The map captures every intrinsic fact about the experience. |
| Positive | Refuted | The content is present, but this proposed bridge is false for it. | There is no phenomenal character. |
| Positive | Indeterminate | Presence is supported; phenomenal differentiation remains unsettled. | The experience is vague or intermediate. |
| Positive | Unlicensed | Presence is supported; the character test cannot be interpreted. | Mapping failure defeats $N^*$. |
| Negative | Any | The model does not license phenomenal character for this target. | The measured geometry is meaningless or nonexistent. |
| Indeterminate | Any | Character claims remain conditional on later presence resolution. | Quality evidence settles presence by itself. |
| Unlicensed | Any | Repair the presence test before phenomenal attribution. | Absence of a license is absence of experience. |

This matrix makes the architecture modular. A result can challenge $Q_\Phi$ without challenging $N^*$, and can challenge $N^*$ without showing that the system lacks structured representations.

## 3. Desiderata for a Mapping Principle

### 3.1 Content-specific rather than state-generic

Whole-system complexity or global state measures can help assess presence, but phenomenal character requires differences among contents within a state. The relevant geometry must therefore be indexed to a contrast family $\mathcal C$ and to trajectories elicited by specific contents, not merely to wakefulness, anesthesia, or overall complexity.

### 3.2 Causal rather than merely correlational

Representational similarity analysis can compare distance matrices across brains, models, and behavior (Kriegeskorte & Kievit, 2013). Correlation alone cannot determine whether the measured geometry realizes, inherits, or merely covaries with the phenomenal structure. The bridge should privilege content-preserving interventions and route-sensitive transitions. If changing a proposed geometric relation leaves every phenomenal relation unchanged, the proposed carrier is weakened.

### 3.3 Relational but not automatically Euclidean

Color is often represented by a circular or opponent geometry; pitch can combine ordered height with cyclic chroma; odor spaces can be high-dimensional or better approximated by non-Euclidean structure; pain and affect may have boundaries, asymmetries, and context dependence. The framework therefore begins with metric, topological, and transition relations rather than assuming a single flat coordinate space.

### 3.4 Invariant to coordinates, sensitive to causal structure

Principal components, neural labels, and latent axes can rotate or permute without changing the represented relations. $Q_\Phi$ should be invariant under coordinate transformations that preserve the causal geometry, while remaining sensitive to interventions that alter distances, neighborhoods, paths, or transition constraints.

### 3.5 Independently anchored

The phenomenal target geometry and the dynamical predictor geometry must not be estimated from the same observations in a way that guarantees agreement. In report-capable anchor cases, phenomenal distances may be estimated from similarity judgments, confusion, generalization, adaptation, and cross-context matching. $G_c$ should be estimated from held-out neural or system interventions. The bridge is then tested on contents and transformations not used to construct either geometry.

### 3.6 Able to expose underdetermination

A relational map may determine a point only up to rotations, reflections, permutations, or more complex automorphisms. The framework must report those equivalence classes rather than assigning an absolute label that the evidence cannot support. This is not a technical nuisance. It is the formal counterpart of inverted-spectrum concerns (Block & Fodor, 1972; Shoemaker, 1982).

### 3.7 Transportable only with a bridge license

A map calibrated in verbal adult humans cannot be applied automatically to infants, nonhuman animals, atypical sensory systems, organoids, or artificial architectures. Transport requires shared intervention semantics, comparable causal roles, preserved geometry, and independent anchor checks. Substrate independence is a claim to be earned, not a default setting.

## 4. Formal Framework

### 4.1 The complete specification

Let the preregistered character-mapping specification be

$$
\Theta_Q=(S,g,\mathcal R,\Delta,\mathcal C,\mathcal A,\mathcal Y,
d_G,\mathcal E,\delta_Q,\mathcal T_Q,\Phi,
\tau_B,\rho_H,\rho_T,\rho_S,\beta).
$$

**Term-by-term annotation.** $S$ is the boundary-qualified system; $g$ is the grain; $\mathcal R$ is the operating regime; $\Delta$ is the temporal window; $\mathcal C$ is the content family; $\mathcal A$ is the admissible intervention family; $\mathcal Y$ is the set of native system readouts; and $d_G$ is the causal-trajectory distance. $\mathcal E$ is the anchor experience family; $\delta_Q$ is the independently estimated phenomenal dissimilarity relation; and $\mathcal T_Q$ contains phenomenal transition relations. $\Phi$ declares the bridge model, nuisance controls, and allowed invariances. $\tau_B$ is the maximum bridge distortion; $\rho_H$ is minimum held-out predictive performance; $\rho_T$ is minimum transport performance; $\rho_S$ is minimum specification stability; and $\beta$ declares the uncertainty procedure.

Every term is frozen before the critical bridge test. Changing the content family, metric, embedding dimension, or anchor set after seeing the fit creates a new specification and requires a new evaluation.

### 4.2 Presence-gated domain

Define the admitted content family

$$
\mathcal C_P=\{c\in\mathcal C:P(S,c;\Theta_P)=1\}.
$$

**Annotation.** $\mathcal C_P$ is not the set of contents that can be decoded. It is the set for which phenomenal presence is positively licensed under the frozen $N^*$ specification. Character mapping is evaluated on this domain. Contents with unresolved presence may be analyzed provisionally, but they cannot establish an unconditional phenomenal bridge.

### 4.3 Content-specific causal trajectories

Let $x_c^a(t)\in\mathcal X_S$ be the system trajectory elicited by content $c$ under admissible intervention $a\in\mathcal A_c$ for $t\in[0,\Delta]$:

$$
x_c^a:[0,\Delta]\rightarrow\mathcal X_S.
$$

**Annotation.** $\mathcal X_S$ is a state space at the declared grain, not necessarily neural firing-rate space. It may contain population states, effective-coupling states, recurrent-network states, or substrate-appropriate causal variables. The intervention must preserve the content contrast, system identity, viability, and operating regime. A transformation that installs a new decoder or changes the candidate system is not admissible. The $do(\cdot)$ notation below marks an intervention rather than an observational conditional (Pearl, 2009).

To avoid equating raw activity with content, define a response signature over native readouts $Y_k\in\mathcal Y$:

$$
z(c,a)=\left(
P(Y_k(t:t+\Delta)\mid do(c),do(a),\mathcal R)
\right)_{k=1}^{K}.
$$

**Annotation.** The signature records distributions of content-specific effects across the candidate system. It can include route dependence, latency, recurrence, and cross-recipient effects. Source-only leakage, stimulus energy, motor preparation, and generic arousal are removed or explicitly modeled as nuisance variables.

### 4.4 The causal-trajectory geometry $G_c$

For contents $c_i,c_j\in\mathcal C_P$, define

$$
d_G(c_i,c_j)=
\sum_{k=1}^{K}w_k
D_k\!\left(z_k(c_i),z_k(c_j)\right)
+\omega\,D_{\mathrm{path}}\!\left(x_{c_i},x_{c_j}\right).
$$

**Annotation.** $D_k$ compares intervention distributions in recipient or role class $k$; $w_k$ are preregistered weights that sum to one; and $D_{\mathrm{path}}$ compares trajectory shape, including timing, direction, dwell, and recurrence. $\omega$ controls the contribution of temporal path structure. The metric is cross-validated and must satisfy declared reliability and nuisance-invariance tests.

Here $z_k(c)$ is the preregistered distributional summary of $z_k(c,a)$ over admissible $a\in\mathcal A_c$, using fixed intervention weights. It is not the maximum effect selected after inspecting the quality-space fit.

The content-specific geometry is

$$
G_{\mathcal C}=(\mathcal Z_{\mathcal C},d_G,\mathcal T_G,\mu_G),
$$

where $\mathcal Z_{\mathcal C}=\{z(c,a):c\in\mathcal C_P,a\in\mathcal A_c\}$, $\mathcal T_G$ is the family of admissible causal transitions, and $\mu_G$ is the regime-conditioned occupancy measure.

**Plain-language reading.** $G_{\mathcal C}$ says which content trajectories are near one another, which transformations carry one into another, which paths are easy or forbidden, and how the system occupies those regions. A point cloud without transitions or intervention semantics is an incomplete candidate.

Although the user-facing shorthand is $G_c$, a single content obtains its identity from its neighborhood:

$$
G_c:=\operatorname{Nbr}_{G_{\mathcal C}}(c;r),
$$

the radius-$r$ causal neighborhood of $c$ within the frozen content family.

**Annotation.** This relational definition blocks the idea that phenomenal character is readable from one isolated activation vector. What a state is like depends, on the present hypothesis, partly on how it could differ from nearby and distant alternatives.

### 4.5 The empirical quality space

For anchor experiences $e_i,e_j\in\mathcal E$, let

$$
\delta_Q(e_i,e_j)
$$

denote an independently estimated phenomenal dissimilarity. The estimate can combine repeated similarity judgments, discrimination thresholds, confusion matrices, generalization gradients, adaptation effects, and cross-context matching. No single measure is treated as the phenomenal relation itself.

Define

$$
\mathcal Q=(\mathcal E,\delta_Q,\mathcal T_Q,\mu_Q).
$$

**Annotation.** $\mathcal T_Q$ records judged or behaviorally anchored phenomenal transitions; $\mu_Q$ records sampling or occupancy, not phenomenal importance. $\mathcal Q$ can be a metric space, graph, stratified manifold, or other relational structure. If cross-modal comparisons are unreliable, $\mathcal Q$ is represented as several partially linked strata rather than forced into one Euclidean space.

Quality spaces are not new. Perceptual discrimination and similarity have long been used to order sensory qualities, including in difficult domains such as olfaction (Clark, 1993; Rosenthal, 2015; Young et al., 2014). Contemporary work asks how localist, workspace, and higher-order architectures might compute such structures and distinguishes the quality-space hypothesis from stronger metaphysical structuralism (Fleming & Shea, 2024). The present proposal adds an $N^*$ presence gate and a causal bridge test.

### 4.6 The dynamical-geometry bridge

Let $F_\Phi$ map causal-geometry features into a candidate quality space. Fit it on training anchors by minimizing

$$
\widehat F_\Phi
=\arg\min_F
\left[
\mathcal L_{\mathrm{metric}}(F)
+\lambda_T\mathcal L_{\mathrm{transition}}(F)
+\lambda_I\mathcal L_{\mathrm{invariance}}(F)
\right],
$$

with

$$
\delta_F(c_i,c_j)
:=\delta_Q\!\left(F(z(c_i)),F(z(c_j))\right),
$$

and

$$
\mathcal L_{\mathrm{metric}}(F)
=\sum_{i<j}v_{ij}
\left[
\delta_Q(e_i,e_j)-\delta_F(c_i,c_j)
\right]^2.
$$

**Term-by-term annotation.** $F$ is the candidate bridge; $\delta_F$ is the quality-space distance between the images of two causal signatures; and $v_{ij}$ weights reliable anchor pairs. A preregistered monotone calibration $h_\Phi(d_G)$ may be included inside the parameterization of $F$, but it may not be selected on final-test pairs. $\mathcal L_{\mathrm{transition}}$ penalizes failures to preserve transition order, adjacency, direction, or hysteresis; and $\mathcal L_{\mathrm{invariance}}$ penalizes sensitivity to nuisance changes, coordinate rotations, sensor relabeling, and matched-energy controls. $\lambda_T$ and $\lambda_I$ are fixed before testing.

The central bridge hypothesis is

$$
H_Q:
\quad
\operatorname{Rel}\!\left(Q_\Phi(G_c,\Delta)\right)
\approx
\operatorname{Rel}\!\left(\chi_c\right)
$$

for held-out contents and admissible geometry-altering interventions.

**Plain-language reading.** The map succeeds only if the relations predicted from causal dynamics match independently measured phenomenal relations outside the data used to fit the bridge. A high in-sample correlation is insufficient.

Held-out bridge performance is

$$
H_B=1-
\frac{\mathcal L_{\mathrm{test}}(\widehat F_\Phi)}
{\mathcal L_{\mathrm{null}}+\varepsilon}.
$$

**Annotation.** $\mathcal L_{\mathrm{null}}$ is the loss of a declared null model, and $\varepsilon$ prevents division by zero. A positive result requires the lower confidence or credible bound on $H_B$ to exceed $\rho_H$, while bridge distortion must remain below $\tau_B$. Model selection, dimensionality, and hyperparameters are nested within training data.

### 4.7 Character as an equivalence class

If every measured relation in $\mathcal Q$ is preserved by a transformation $a\in\operatorname{Aut}(\mathcal Q)$, the data cannot distinguish $q$ from $a(q)$. Therefore the warranted attribution is

$$
Q_\Phi(G_c,\Delta)=[q_c]_{\operatorname{Aut}(\mathcal Q)},
$$

not an absolutely labeled point.

**Annotation.** $\operatorname{Aut}(\mathcal Q)$ is the set of structure-preserving automorphisms of the measured quality space. The brackets denote the orbit of $q_c$ under those transformations. If an exact red-green permutation preserves all measured similarities, transitions, valence links, memory relations, and causal roles, the present evidence cannot identify which member is absolutely red. Additional asymmetrical anchors may reduce the orbit, but they do not do so by assertion.

This is the framework's answer to the inversion problem. It neither declares inversion impossible nor treats it as a reason to abandon empirical structure. It states the residual underdetermination precisely.

### 4.8 A structured character profile

For a licensed map, summarize phenomenal character as

$$
\chi_c=\left(m_c,[q_c],I_c,A_c,\Pi_c\right).
$$

**Annotation.** $m_c$ is the modality or quality-space stratum; $[q_c]$ is the relational location up to surviving automorphisms; $I_c$ is an intensity coordinate calibrated against content-preserving gain transformations; $A_c$ is a valence field or vector when independently supported; and $\Pi_c$ is the temporal path profile. The tuple is not assumed exhaustive.

| Character feature | Geometric or dynamical representation | Required guardrail |
|---|---|---|
| Modality | Stratum, connected component, or family of transformation rules | Do not equate modality with anatomy or input channel. |
| Similarity | Local and global distances, neighborhoods, and topology | Estimate phenomenal and causal distances independently. |
| Intensity | Calibrated direction or radial family within a content neighborhood | Raw amplitude and arousal are not intensity by default. |
| Valence | Oriented field, gradient, or context-indexed coordinate | Do not force every modality onto one pleasure-pain axis. |
| Temporal character | Path direction, speed, curvature, dwell, recurrence, and hysteresis | A static endpoint cannot represent succession or flow. |

### 4.9 Temporal character

Two trajectories can pass through the same state-space region while differing in order, speed, or history. Let the mapped path be

$$
q_c(t)=Q_\Phi(G_c,t),\qquad t\in[0,\Delta].
$$

Define a temporal profile

$$
\Pi_c=\left(
\|\dot q_c\|,
\kappa(q_c),
\operatorname{dwell}(q_c),
\operatorname{hyst}(q_c),
\operatorname{ord}(q_c)
\right).
$$

**Annotation.** The terms represent phenomenal-rate candidates, path curvature, dwell duration, history dependence, and event ordering. They are not read directly from clock time. Their phenomenal interpretation requires anchors such as judgments of succession, apparent continuity, duration discrimination, temporal binding, or transition asymmetry. $N_3$ supplies recurrent stability for presence; $\Pi_c$ differentiates how an admitted experience unfolds.

### 4.10 Mapping outcomes

The bridge test returns one of four results.

| Status | Formal condition | Interpretation |
|---|---|---|
| Supported | Presence positive; validity gates pass; distortion upper bound $\leq\tau_B$; held-out performance lower bound $\geq\rho_H$; stability passes. | The specified causal geometry predicts the measured phenomenal relations. |
| Refuted | Test valid and held-out upper bound falls below $\rho_H$, or distortion lower bound exceeds $\tau_B$. | This mapping principle fails for the declared domain. |
| Indeterminate | Valid intervals straddle thresholds, credible bridge families disagree, or anchor coverage is insufficient. | The evidence bears on the bridge but does not settle it. |
| Unlicensed | Presence, boundary, intervention, anchor, measurement, or transport validity fails. | No interpretable phenomenal mapping result is available. |

**Annotation.** "Refuted" targets $Q_\Phi$, not the existence of experience. A present experience can refute a proposed geometry. "Unlicensed" is a failure of interpretation, not a negative result. These distinctions inherit the four-outcome framework developed for consciousness attribution (Stilwell, 2026b).

## 5. An Empirical Identification Strategy

### 5.1 Freeze presence independently

The candidate system, grain, regime, content family, and $N^*$ measures are preregistered first. Character data may not be used to expand the boundary or rescue a failed presence component. This ordering prevents a vivid quality space from substituting for the presence test.

### 5.2 Build phenomenal anchors

In report-capable anchor participants, collect several converging measures: pairwise and triadic similarity judgments, confusion under near-threshold discrimination, adaptation and aftereffect structure, generalization gradients, cross-context matching, and transition judgments. Generalization is especially informative because psychological similarity can constrain how responses transfer to novel stimuli (Shepard, 1987). Split the data so that the phenomenal geometry used for bridge fitting is distinct from the phenomenal data used for final testing.

Similarity judgments are useful but not infallible. They can reflect concepts, language, memory, or task strategy. Convergence across low-demand discrimination, involuntary adaptation, generalization, and no-report-compatible markers helps isolate the sensory or affective relations at issue (Tsuchiya et al., 2015). If the measures disagree beyond preregistered tolerance, the target quality geometry is indeterminate.

### 5.3 Estimate causal geometry

Estimate content-specific trajectories and intervention distributions using a modality-appropriate combination of stimulation, natural perturbations, effective-connectivity analysis, encoding models, and recipient-native readouts. Representational models and similarity analysis supply useful tools for comparing geometries, but the critical predictor should include interventions and transitions, not only observational pattern distances (Diedrichsen & Kriegeskorte, 2017; Kriegeskorte & Kievit, 2013).

The distinction between decodability and geometry is crucial. Brouwer and Heeger (2009) decoded color accurately from several visual areas, yet the geometry in V4 and VO1, not V1, tracked perceptual color relations. A region can contain stimulus information without realizing the quality-relevant structure.

### 5.4 Fit only on anchors

Fit $F_\Phi$ on a declared anchor subset. Any dimension reduction, monotone warping, alignment, or manifold choice is performed within the training split. Comparisons between nonidentical metric spaces may use Procrustes, representational-distance, or Gromov-Wasserstein methods, but the choice is part of $\Phi$, not selected after seeing the held-out result (Memoli, 2011).

### 5.5 Test held-out contents and interventions

The strongest test is not whether causal and phenomenal spaces correlate at baseline. It is whether a preregistered intervention changes $G_c$ in a way that predicts a specific change in independently measured phenomenal relations.

Examples include:

- adaptation that selectively contracts or expands one region of color space;
- training that changes discrimination neighborhoods while preserving stimulus energy;
- stimulation that alters one transition route and predicts a corresponding similarity or temporal-order change;
- pharmacological or lesion-induced changes that reshape valence or pain geometry;
- bistable stimuli in which physical input is held approximately constant while the experienced location changes.

### 5.6 Test invariance and nuisance models

The bridge must survive sensor relabeling, coordinate rotation, harmless rescaling, and reasonable preprocessing. It must fail appropriately under content-label shuffles and should not be explained by physical stimulus distance, response preparation, semantic labels, generic arousal, or signal-to-noise differences alone.

### 5.7 Transport cautiously

For a new individual or substrate, estimate a transport map $T$ between causal geometries. Define transport performance

$$
R_T=1-\frac{\mathcal L_Q(F_\Phi\circ T)}{\mathcal L_{\mathrm{null}}+\varepsilon}.
$$

**Annotation.** $R_T$ asks whether the source bridge predicts available target anchors. Only when its lower bound exceeds $\rho_T$ may the map be extended to target contents lacking direct report. Shared task performance or graph shape alone is not enough.

For transport, $T$ maps a target-system causal signature into the source bridge's calibrated causal domain. The reverse direction must be declared instead if that is the scientific target; bidirectional alignment is not assumed.

### 5.8 Specification stability

Let $\mathcal N(\Theta_Q)$ be a preregistered neighborhood of reasonable boundaries, grains, metrics, anchor combinations, and bridge families. Define

$$
R_S=
\sum_{\Theta'\in\mathcal N(\Theta_Q)}
\pi(\Theta')
\mathbf 1\!\left[
\operatorname{status}(Q_{\Phi'};\Theta')
=\operatorname{status}(Q_\Phi;\Theta_Q)
\right].
$$

**Annotation.** $\pi(\Theta')$ contains frozen weights over defensible alternatives and sums to one. $R_S$ is the weighted fraction of specifications that preserve the bridge outcome. A supported result requires the lower bound on $R_S$ to exceed $\rho_S$. Low stability makes the result fragile or indeterminate rather than licensing selection of the most favorable specification.

## 6. How the Architecture Differentiates Experience

### 6.1 Color

Color provides the clearest quality-space example because similarity, opponent relations, unique hues, circular structure, saturation, and brightness can be probed systematically. A color bridge should predict not only which hues are discriminable but which are nearby, which paths pass through intermediate hues, and how adaptation deforms the neighborhood.

The causal predictor should not be raw wavelength or early visual decodability. The phenomenal target depends on context, adaptation, illumination, and perceptual constancy. Evidence that later visual population geometry tracks perceptual color space more closely than V1 illustrates the needed distinction between information and quality-relevant organization (Brouwer & Heeger, 2009).

### 6.2 Audition

Auditory character combines pitch height, pitch chroma, timbre, loudness, spatial location, rhythm, and stream organization. One global Euclidean map is unlikely to preserve all these relations. The framework instead permits partially coupled strata and product structures. A melody's temporal character depends on the path and transition constraints among tones, not merely on the multiset of endpoints.

An auditory bridge is supported if causal perturbations predict changes in perceived interval, grouping, timbral similarity, or continuity while controlling acoustic distance. It is weakened if the same geometry appears in unconscious or task-only processing and does not change with phenomenal relations.

### 6.3 Olfaction

Olfaction warns against assuming low-dimensional Euclidean structure. Human perceptual descriptions can be approximated by hyperbolic geometry, and cortical odor representations can reorganize chemical relations toward perceptual structure (Zhou et al., 2018; Pashkovski et al., 2020). Human imaging also dissociates chemical, olfactory, and trigeminal similarity across cortical regions (Fournel et al., 2016).

The framework therefore asks which causal transformations preserve odor-quality neighborhoods, how learning reshapes those relations, and whether pleasantness, intensity, familiarity, and trigeminal character form separable or interacting fields. A single "odor axis" would be an empirical failure, not a simplification licensed in advance.

### 6.4 Pain, interoception, and valence

Pain is not exhausted by stimulus intensity or nociceptive input. Location, quality, urgency, affective unpleasantness, controllability, and bodily context can dissociate. The map should therefore permit multiple dimensions and directed gradients. Valence may be represented as a context-indexed field $A(q,\mathcal R)$ rather than one universal coordinate.

Large-scale feeling maps suggest that subjective similarity is organized by valence, mental experience, and bodily sensation (Nummenmaa et al., 2018). That result motivates, but does not prove, a geometry-to-phenomenology bridge. A causal test would manipulate the relevant population or bodily-state geometry and predict held-out changes in unpleasantness or similarity while controlling report demand and generic arousal.

### 6.5 Temporal experience

Phenomenal succession, duration, rhythm, motion, and flow cannot be recovered from an unordered distance matrix. They require path structure. Two sequences can visit the same states in opposite order; two tones can have the same spectral components but different onset relations; a stable pain can differ from a throbbing pain despite similar mean intensity.

$N_3$ asks whether a content is recurrently stable enough to be present. $\Pi_c$ asks how its quality changes within that stability window. This separation allows recurrence to gate temporal presence without reducing temporal character to persistence.

### 6.6 Cross-modal and unified scenes

A conscious scene can contain color, sound, bodily feeling, and thought together. It does not follow that all qualities occupy one homogeneous metric space. The global structure may be a stratified or fibered space: modality-specific quality spaces linked by synchrony, spatial co-location, causal binding, attention, and cross-modal prediction.

The bridge should therefore report which cross-modal relations are well-defined. If participants cannot make stable similarity judgments between a color and a pain, the model should not invent a distance. Unity of presence is supplied by the jointly realized $N^*$ system; phenomenal character can remain internally heterogeneous.

## 7. Relation to Neighboring Theories

### 7.1 Quality-space theory

Quality-space theory supplies the relational target: sensory qualities are ordered by discriminability and similarity (Clark, 1993; Rosenthal, 2015). The present account adds a distinction between conscious and nonconscious quality-bearing states, a causal dynamical predictor, and explicit bridge-validation rules.

### 7.2 Representational geometry

Representational geometry supplies a method for comparing population codes, behavior, and models through relational distance structures (Kriegeskorte & Kievit, 2013). The present account treats observational geometry as candidate evidence, then adds perturbational transitions, the presence gate, and phenomenal anchors.

### 7.3 Neural-manifold approaches

Population activity often occupies low-dimensional manifolds whose geometry reflects computation and behavior (Cunningham & Yu, 2014). A low-dimensional manifold is not automatically a quality space. The relevant question is whether its intervention-sensitive geometry predicts phenomenal relations rather than only task variables.

### 7.4 Integrated information theory

IIT explicitly connects phenomenal structure to causal structure. The present proposal shares the demand for structure-preserving explanation but does not derive quality from a maximally irreducible cause-effect structure, identify intrinsic causal power with consciousness, or use one integration measure as both presence and character. $N_1$ is one conjunct of the presence gate; $Q_\Phi$ is separately tested against content-specific phenomenal relations.

### 7.5 Global workspace and higher-order theories

Fleming and Shea (2024) distinguish localist, workspace, and higher-order routes by which quality spaces might be computed. The present architecture is compatible with different implementation locations. A workspace or higher-order system may transform or index a sensory geometry, but report, executive access, or re-representation is not assumed to constitute the quality. The decisive evidence is which causal geometry tracks and controls the phenomenal relations after access-related confounds are removed.

### 7.6 Representationalism and structuralism

Representationalists may hold that phenomenal character depends on represented properties; structuralists may hold that relational position partly or wholly determines character. This paper adopts methodological and empirical structuralism: relational structure is the target of a testable mapping. It does not assume without argument that relational facts exhaust every intrinsic phenomenal fact.

That distinction matters. A successful $Q_\Phi$ would show systematic structural determination over its tested domain. It would not by itself prove metaphysical identity or rule out unmeasured intrinsic differences.

## 8. Predictions and Falsification

### 8.1 Geometry-changing interventions

If $H_Q$ is correct, interventions that selectively alter causal distances or transitions should produce corresponding changes in phenomenal similarity, discrimination, adaptation, or temporal organization. The predicted change must be specified before the intervention outcome is known.

### 8.2 Decoding is weaker than bridge fit

Raw decoding accuracy should be a poorer predictor of phenomenal relations than held-out causal-geometry fit. A region or module may decode every content yet fail to preserve the relevant neighborhood or transition structure.

### 8.3 Shared presence, divergent character

Contents with similarly strong $V\land N^*$ evidence should display different $G_c$ neighborhoods and quality-space locations. If $N^*$ scores alone predict all phenomenal distinctions, the proposed second layer is unnecessary. If geometry varies without phenomenal change under valid interventions, the bridge is too permissive.

### 8.4 Unconscious geometry

Rich geometry should sometimes occur outside a positive presence gate. This is expected, not anomalous. If every structured representation is classified as phenomenal, the gate has collapsed and the theory overpredicts consciousness.

### 8.5 Cross-person transport

Within-person bridge performance should exceed unaligned cross-person performance. Cross-person prediction should improve only when a validated transport map preserves causal and phenomenal anchors. Perfect transport from superficial stimulus labels alone would make the causal bridge explanatorily idle.

### 8.6 Direct falsifiers

The extension is threatened by any of the following under valid measurement:

1. large, selective changes in $G_c$ that leave all independently measured phenomenal relations unchanged;
2. large phenomenal-geometry changes with stable $G_c$ across every reasonable grain and metric;
3. bridge performance that disappears on held-out contents or is matched by nuisance-only models;
4. systematic success of a simpler noncausal stimulus model after causal geometry is controlled;
5. transport failures among systems whose causal geometries were claimed to be equivalent;
6. bridge instability across minor, defensible changes in boundary, grain, intervention, or anchor method.

The correct response is revision or rejection of $Q_\Phi$, not post hoc redefinition of the quality space.

## 9. Objections and Replies

### Objection 1: This simply renames neural geometry as qualia

It would if the map were asserted by resemblance. The proposal instead separates predictor and target geometries, requires intervention-sensitive causal structure, and tests held-out phenomenal relations. A neural manifold is a candidate vehicle; a quality space is an independently estimated phenomenal target; $Q_\Phi$ is the risky bridge between them.

### Objection 2: Similarity judgments are cognitive reports

They can be. That is why no single judgment task fixes $\delta_Q$. The anchor protocol combines low-demand discrimination, confusion, adaptation, generalization, and cross-context matching, and treats disagreement as indeterminacy. Reports are evidence in anchor cases, not constituents of phenomenal character.

### Objection 3: The inverted spectrum defeats relational mapping

It defeats claims to absolute labels when the quality space has an unbroken inversion symmetry. The framework concedes this and returns an equivalence class. Real quality spaces may contain asymmetries involving unique hues, valence, learning, memory, or cross-modal relations that reduce the symmetry. Whether those anchors are sufficient is empirical.

### Objection 4: Whole-space structure makes remote possibilities change current qualia

The proposal uses a bounded causal neighborhood and declared transition family. It does not require every physically possible state to contribute equally to current character. The radius, occupancy, and timescale are empirical parts of $\Phi$. Whole-structure and instantiated-relations versions can be compared by held-out interventions that alter remote or only locally instantiated geometry (Fleming & Shea, 2024).

### Objection 5: The presence gate prejudges which geometry matters

The gate does not select the winning geometry. It determines when phenomenal interpretation is licensed. Competing causal geometries within a positive state remain open to comparison. Without a gate, any sophisticated unconscious representation could be mislabeled phenomenal.

### Objection 6: Valence is not geometry

Valence may not be one scalar coordinate. The framework allows a directed, context-sensitive field linked to action, homeostasis, and affective transitions. If no stable relational organization exists, valence should not be forced into the model.

### Objection 7: The map cannot solve the hard problem

Correct. The proposal explains and predicts phenomenal differentiation under a structural hypothesis. It does not derive why any physical structure is accompanied by experience. $N^*$ addresses the presence conjecture; $Q_\Phi$ addresses quality relations; the explanatory gap remains a separate philosophical challenge (Chalmers, 1995).

### Objection 8: The model is too flexible to fail

Flexibility is constrained by preregistration, held-out prediction, intervention tests, dimensionality control, nuisance models, transport thresholds, and specification stability. Each content family receives a frozen $\Theta_Q$. A failed bridge cannot be rescued by changing the metric after inspection without declaring a new test.

### Objection 9: A bridge learned from humans cannot apply to animals or AI

Not automatically. Cross-substrate application requires $R_T$ to pass on available anchors and causal-role tests. Where no anchors exist, the result may remain conditional or unlicensed. The framework is substrate-general in form, not universally licensed in practice.

## 10. Limitations and Open Problems

First, phenomenal anchor measures remain imperfect. Similarity judgments can be shaped by language and concepts; adaptation and discrimination can occur without consciousness. Convergence and the presence gate reduce but do not eliminate this problem.

Second, causal interventions at the needed resolution may be unavailable or ethically impermissible. Model-based interventions can supplement direct perturbation, but transport from model to system requires validation.

Third, the correct scope of the causal neighborhood is unknown. Local instantiated relations, the presently accessible repertoire, and whole-space structure make different predictions. The framework turns this into a model-comparison problem rather than deciding it by stipulation.

Fourth, geometry may be insufficient. Phenomenal character may depend on nongeometric algebraic, topological, compositional, semantic, bodily, or historical structure. $G_c$ is intentionally extensible, but added structure must improve held-out prediction rather than merely absorb anomalies.

Fifth, identity across persons may remain only partial. A successful within-person bridge can coexist with irreducible uncertainty about absolute interpersonal labels. The automorphism analysis exposes that limit.

Sixth, the framework currently presumes that presence can be assessed content-relatively. Some versions of $N^*$ may classify a system-level conscious field while content individuation occurs later. The relation between field presence and content presence needs further work.

Finally, even a perfect structure-preserving bridge would not by itself establish that phenomenal character is nothing over and above causal geometry. It would establish a powerful lawlike dependence and intervention target. Stronger metaphysical conclusions would require additional argument.

## 11. Conclusion

The $N^*$ research program should not ask one formalism to do two jobs. $V\land N^*$ is a proposal about the conditions under which experience is present. It does not by itself explain why admitted experiences differ. Phenomenal differentiation requires a second layer.

This paper proposes that layer as $Q_\Phi(G_c,\Delta)$: a validated bridge from content-specific causal-trajectory geometry to structured phenomenal character. The geometry includes distances, transitions, occupancy, and temporal paths. The quality space is independently anchored. The bridge must predict held-out relations and intervention-induced deformations, survive nuisance and coordinate changes, and earn every transport beyond its calibration domain.

The proposal is deliberately limited. It identifies character up to unbroken relational symmetries and does not claim to close the explanatory gap. Yet that limitation is informative. It separates what the evidence can determine from what remains underdetermined, turns a promissory gesture toward quality spaces into a falsifiable research program, and allows the core model to retain a clear division of labor:

$$
\boxed{
V\land N^*\ \text{licenses phenomenal presence};
\qquad
Q_\Phi(G_c,\Delta)\ \text{differentiates phenomenal character}.
}
$$

## References

Block, N. (1995). On a confusion about a function of consciousness. *Behavioral and Brain Sciences, 18*(2), 227-247. <https://doi.org/10.1017/S0140525X00038188>

Block, N., & Fodor, J. A. (1972). What psychological states are not. *The Philosophical Review, 81*(2), 159-181. <https://doi.org/10.2307/2183997>

Brouwer, G. J., & Heeger, D. J. (2009). Decoding and reconstructing color from responses in human visual cortex. *Journal of Neuroscience, 29*(44), 13992-14003. <https://doi.org/10.1523/JNEUROSCI.3577-09.2009>

Chalmers, D. J. (1995). Facing up to the problem of consciousness. *Mind, 104*(414), 200-219. <https://doi.org/10.1093/mind/104.414.200>

Clark, A. (1993). *Sensory qualities*. Clarendon Press.

Cunningham, J. P., & Yu, B. M. (2014). Dimensionality reduction for large-scale neural recordings. *Nature Neuroscience, 17*, 1500-1509. <https://doi.org/10.1038/nn.3776>

Diedrichsen, J., & Kriegeskorte, N. (2017). Representational models: A common framework for understanding encoding, pattern-component, and representational-similarity analysis. *PLoS Computational Biology, 13*(4), e1005508. <https://doi.org/10.1371/journal.pcbi.1005508>

Fleming, S. M., & Shea, N. (2024). Quality space computations for consciousness. *Trends in Cognitive Sciences, 28*(10), 896-906. <https://doi.org/10.1016/j.tics.2024.06.007>

Fournel, A., Ferdenzi, C., Sezille, C., Rouby, C., & Bensafi, M. (2016). Multidimensional representation of odors in the human olfactory cortex. *Human Brain Mapping, 37*(6), 2161-2172. <https://doi.org/10.1002/hbm.23164>

Kriegeskorte, N., & Kievit, R. A. (2013). Representational geometry: Integrating cognition, computation, and the brain. *Trends in Cognitive Sciences, 17*(8), 401-412. <https://doi.org/10.1016/j.tics.2013.06.007>

Memoli, F. (2011). Gromov-Wasserstein distances and the metric approach to object matching. *Foundations of Computational Mathematics, 11*, 417-487. <https://doi.org/10.1007/s10208-011-9093-5>

Nagel, T. (1974). What is it like to be a bat? *The Philosophical Review, 83*(4), 435-450. <https://doi.org/10.2307/2183914>

Nummenmaa, L., Hari, R., Hietanen, J. K., & Glerean, E. (2018). Maps of subjective feelings. *Proceedings of the National Academy of Sciences, 115*(37), 9198-9203. <https://doi.org/10.1073/pnas.1807390115>

Pashkovski, S. L., Iurilli, G., Brann, D., Chicharro, D., Drummey, K., Franks, K. M., Panzeri, S., & Datta, S. R. (2020). Structure and flexibility in cortical representations of odour space. *Nature, 583*, 253-258. <https://doi.org/10.1038/s41586-020-2451-1>

Pearl, J. (2009). *Causality: Models, reasoning, and inference* (2nd ed.). Cambridge University Press. <https://doi.org/10.1017/CBO9780511803161>

Rosenthal, D. M. (2015). Quality spaces and sensory modalities. In P. Coates & S. Coleman (Eds.), *Phenomenal qualities: Sense, perception, and consciousness* (pp. 33-65). Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780198712718.003.0002>

Shepard, R. N. (1987). Toward a universal law of generalization for psychological science. *Science, 237*(4820), 1317-1323. <https://doi.org/10.1126/science.3629243>

Shoemaker, S. (1982). The inverted spectrum. *The Journal of Philosophy, 79*(7), 357-381. <https://doi.org/10.2307/2026219>

Stilwell, P. (2026a). *C0 as N\*: A minimal network-dynamics model of phenomenal consciousness* [Manuscript].

Stilwell, P. (2026b). *Indeterminacy as a scientific result: A four-outcome framework for consciousness attribution* [Manuscript].

Stilwell, P. (2026c). *Where is the conscious subject? A dynamical criterion for system boundaries* [Manuscript].

Stilwell, P. (2026d). *Consciousness without report: What system-wide availability actually requires* [Manuscript].

Tsuchiya, N., Wilke, M., Frassle, S., & Lamme, V. A. F. (2015). No-report paradigms: Extracting the true neural correlates of consciousness. *Trends in Cognitive Sciences, 19*(12), 757-770. <https://doi.org/10.1016/j.tics.2015.10.002>

Young, B. D., Keller, A., & Rosenthal, D. (2014). Quality-space theory in olfaction. *Frontiers in Psychology, 5*, 1. <https://doi.org/10.3389/fpsyg.2014.00001>

Zhou, Y., Smith, B. H., & Sharpee, T. O. (2018). Hyperbolic geometry of the olfactory space. *Science Advances, 4*(8), eaaq1458. <https://doi.org/10.1126/sciadv.aaq1458>

**Central paper and related publications:** <https://philstilwell.github.io/C0/>

## Appendix A: Glossary and notation

| Term or symbol | Definition | Guardrail |
|---|---|---|
| $P(S,c;\Theta_P)$ | Four-outcome presence result | Character mapping does not override this gate. |
| $V$ | Independently assessed viability | Must not become a rescue clause for a preferred quality map. |
| $N^*$ | $N_1\land N_2\land N_3$ presence bundle | All conjuncts use the same system, content, grain, and interval. |
| $\Theta_Q$ | Complete character-mapping specification | Freeze it before the critical bridge test. |
| $\mathcal C_P$ | Contents with positive presence results | Decodability alone does not admit a content. |
| $x_c^a(t)$ | Content trajectory under admissible intervention $a$ | Preserve system identity, viability, regime, and content fidelity. |
| $z(c,a)$ | Distributional causal response signature | Remove source leakage, arousal, and report preparation. |
| $d_G$ | Distance between content-specific causal trajectories | Cross-validate the metric and its weights. |
| $G_c$ | Causal neighborhood of content $c$ | An isolated activation vector is insufficient. |
| $\mathcal Q$ | Empirically anchored quality-space structure | Do not assume one global Euclidean space. |
| $\delta_Q$ | Phenomenal dissimilarity relation | Estimate from converging measures, not one report task. |
| $F_\Phi,Q_\Phi$ | Candidate bridge from causal to phenomenal structure | Require held-out prediction and intervention sensitivity. |
| $\delta_F$ | Quality-space distance induced by the fitted bridge | Must be evaluated on held-out anchor pairs. |
| $H_B$ | Held-out bridge performance | Compare against preregistered null models. |
| $R_T$ | Cross-system transport performance | No transport without target anchors or causal-role validation. |
| $R_S$ | Stability across reasonable mapping specifications | Do not report only the most favorable boundary, metric, or bridge. |
| $\operatorname{Aut}(\mathcal Q)$ | Structure-preserving transformations of the quality space | Report residual inversion or permutation uncertainty. |
| $[q_c]$ | Quality-space location up to surviving automorphisms | Do not claim an absolute label the evidence cannot identify. |
| $\Pi_c$ | Temporal path profile | Static geometry cannot represent temporal character. |

## Appendix B: Bridge-identification protocol

| Stage | Required action | Failure output | Guardrail |
|---|---|---|---|
| 1. Freeze bearer | Archive $S,g,\mathcal R,\Delta$ and the boundary result. | Unlicensed | Do not select the bearer from the best quality fit. |
| 2. Gate presence | Evaluate $V\land N^*$ for each target content or content family. | Negative, indeterminate, or unlicensed presence | Geometry alone never establishes phenomenality. |
| 3. Build anchors | Estimate $\delta_Q,\mathcal T_Q$ from converging phenomenal measures. | Anchor-indeterminate | Split anchor construction from final testing. |
| 4. Define interventions | Freeze $\mathcal A$, content-fidelity tests, and nuisance controls. | Intervention-unlicensed | No new decoder, route, or operating regime. |
| 5. Estimate $G_c$ | Construct causal distances, transitions, paths, and occupancy. | Geometry-indeterminate | Decoding accuracy is not a geometry license. |
| 6. Fit bridge | Train $F_\Phi$ only on declared anchors. | Model-selection failure | Keep hyperparameter search inside training data. |
| 7. Test bridge | Predict held-out phenomenal distances and transitions. | Supported, refuted, or indeterminate | In-sample correlation never suffices. |
| 8. Intervene on geometry | Predict phenomenal deformation from causal deformation. | Causal refutation or indeterminacy | Match stimulus, energy, report, and arousal. |
| 9. Audit symmetry | Compute surviving automorphisms and equivalence classes. | Residual underdetermination | Do not assign absolute labels through convention. |
| 10. Test transport | Validate $T$ and $R_T$ on target anchors. | Transport-unlicensed | Shared task or graph shape is insufficient. |
| 11. Stress-test | Vary reasonable grains, metrics, anchors, and neighborhoods. | Fragile or indeterminate | Report the full specification neighborhood. |
| 12. Classify | Return the bridge outcome separately from presence. | Structured result | Never infer no experience from bridge failure. |

### Appendix B.1 Compact algorithm

1. Freeze the boundary-qualified system and presence specification.
2. Identify the positively admitted content family $\mathcal C_P$.
3. Collect split-sample phenomenal anchors and declare their uncertainty.
4. Specify content-preserving interventions and nuisance controls.
5. Estimate causal response signatures and trajectory geometry.
6. Fit the bridge on training anchors only.
7. Predict held-out phenomenal distances, neighborhoods, and transitions.
8. Test predicted deformations under geometry-changing interventions.
9. Compute the automorphism orbit for every attributed quality point.
10. Validate transport before applying the map outside the anchor domain.
11. Issue supported, refuted, indeterminate, or unlicensed bridge results.
12. Report the presence result and character result as separate outputs.

## Appendix C: Preregistration template

| Field | Required entry |
|---|---|
| Consciousness target | Minimal phenomenal presence, content presence, and the specific phenomenal-character claim. |
| Candidate bearer | Boundary, interfaces, grain, regime, interval, and boundary-confidence result. |
| Presence gate | Measures and thresholds for $V,N_1,N_2,N_3$, including uncertainty rules. |
| Content family | Contents, controls, contrast structure, and exclusion criteria. |
| Phenomenal anchors | Similarity, confusion, adaptation, generalization, transition, and matching measures. |
| Anchor split | Training, validation, and final test partitions plus repeated-measure reliability. |
| Interventions | Content manipulation, magnitude, timing, route, safety, and regime-preservation tests. |
| Causal readouts | Native variables, recipient classes, latency, recurrence, and source-leakage controls. |
| Geometry | $d_G$, path metric, transition family, occupancy, dimension, topology, and reliability. |
| Bridge family | $F_\Phi$, $h_\Phi$, losses, regularization, invariances, and null models. |
| Thresholds | $\tau_B,\rho_H,\rho_T,\rho_S$ and uncertainty level $\beta$. |
| Symmetry audit | Allowed coordinate transformations and method for estimating $\operatorname{Aut}(\mathcal Q)$. |
| Temporal character | Path features, temporal anchors, resolution, and ordering tests. |
| Transport | Source and target anchors, alignment procedure, causal-role equivalence, and stopping rule. |
| Sensitivity | Reasonable boundaries, grains, metrics, neighborhoods, anchor combinations, and bridge models. |
| Reporting | Presence output, bridge output, equivalence class, failed gates, limitations, and prohibited inferences. |

\newpage

## Appendix D: Mapping validity ledger

| Validity question | Pass evidence | Failure consequence |
|---|---|---|
| Is the bearer independently bounded? | Boundary-first autonomy and role-completeness test passes. | Character result unlicensed. |
| Is presence positively licensed? | $V\land N^*$ passes without unresolved conflict. | Phenomenal interpretation withheld. |
| Is the content manipulation faithful? | Target contrast survives source and matched-energy controls. | Geometry uninterpretable. |
| Is $G_c$ causal? | Perturbations and route tests change predicted signatures. | Correlational evidence only. |
| Is the phenomenal target reliable? | Anchor measures converge within tolerance. | Quality space indeterminate. |
| Is the bridge out-of-sample? | Held-out contents and relations exceed $\rho_H$. | In-sample fit rejected as evidence. |
| Does geometry deformation predict quality deformation? | Direction and magnitude agree within preregistered bounds. | Causal bridge refuted or indeterminate. |
| Are nuisance models weaker? | Stimulus, report, arousal, semantics, and SNR nulls lose. | Bridge specificity fails. |
| Is the attribution symmetry-aware? | Automorphism orbit is reported. | Absolute label overclaimed. |
| Is transport validated? | Target anchors and causal roles yield $R_T\geq\rho_T$. | Cross-system use unlicensed. |
| Is the result stable? | Decision persists across reasonable $\Theta_Q$ variations. | Fragile or indeterminate. |

## Appendix E: Synthetic worked example

Assume six color-like anchor contents $c_1,\ldots,c_6$ arranged phenomenally on a distorted circle. The example is illustrative and contains no empirical estimates.

### Appendix E.1 Held-out bridge table

| Test item | Phenomenal relation | Predicted distance | Absolute error | Result |
|---|---:|---:|---:|---|
| $c_1$-$c_2$ | .18 | .20 | .02 | Local neighbor preserved. |
| $c_1$-$c_4$ | .91 | .86 | .05 | Opposed relation preserved. |
| $c_2$-$c_3$ | .22 | .27 | .05 | Local neighbor preserved. |
| $c_2$-$c_5$ | .84 | .80 | .04 | Distant relation preserved. |
| $c_3$-$c_6$ | .79 | .63 | .16 | Miss exceeds pairwise tolerance. |

Suppose the preregistered null-model loss is $.24$ and the bridge test loss is $.07$. Then

$$
H_B=1-\frac{.07}{.24}=.708.
$$

If the one-sided lower bound is $.66$ and $\rho_H=.60$, held-out performance passes. The missed $c_3$-$c_6$ relation remains reported and motivates a local-model check; it is not deleted because the aggregate gate passed.

### Appendix E.2 Geometry-changing intervention

An adaptation intervention is predicted to contract the $c_1$-$c_2$ phenomenal distance from $.18$ to $.11$ and expand $c_1$-$c_6$ from $.25$ to $.39$. Observed held-out values are $.13$ and $.36$. A stimulus-distance model predicts no change. If the confidence intervals exclude zero change and include the preregistered bridge predictions, the result supports causal sensitivity of the map.

### Appendix E.3 Symmetry result

If the six-point ring is otherwise perfectly symmetric, rotations and reflections preserve its measured relations. The warranted assignment is therefore an orbit of twelve equivalent labelings, not an absolute identification of $c_1$ with red. Adding reliable asymmetrical valence, unique-hue, or cross-modal anchors may reduce the orbit. If no anchor does, the underdetermination remains.

## Appendix F: Modality-specific cautions

| Domain | Promising structure | Main confound | Required extension |
|---|---|---|---|
| Color | Opponent and circular relations; brightness and saturation | Physical wavelength and early decodability | Adaptation, constancy, and perceptual-neighborhood tests. |
| Audition | Pitch height/chroma, timbre, rhythm, stream paths | Acoustic similarity and motor entrainment | Product or stratified spaces with temporal paths. |
| Olfaction | High-dimensional, learned, possibly hyperbolic neighborhoods | Chemistry, familiarity, and language | Non-Euclidean models and individualized transport. |
| Pain | Location, intensity, quality, urgency, unpleasantness | Nociception, report, and generic salience | Bodily-state and affective fields plus causal dissociations. |
| Emotion | Valence, arousal, agency, bodily and semantic structure | Concept labels and cultural scripts | Cross-task anchors and context-indexed fields. |
| Temporal experience | Order, duration, rhythm, continuity, hysteresis | Clock time and memory demand | Path-sensitive anchors and intervention timing. |
| Multimodal scene | Linked modality strata and binding relations | Forced cross-modal metric | Partial links, fibers, and explicit incommensurability. |

## Appendix G: Prohibited inferences

- "The state is decodable, therefore its geometry is phenomenal."
- "Two neural embeddings look similar, therefore the experiences are identical."
- "The system has a low-dimensional manifold, therefore it is conscious."
- "The quality-space fit is high in-sample, therefore the bridge is confirmed."
- "A stimulus space predicts behavior, therefore it determines phenomenal character."
- "The presence gate passed, therefore all admitted experiences feel alike."
- "The bridge failed, therefore no experience was present."
- "A report supplied the anchor, therefore report constitutes the quality."
- "The map has a valence axis, therefore every phenomenal difference is evaluative."
- "Two systems share graph shape, therefore the same phenomenal labels transport."
- "A global inversion preserves the relations, therefore the experiences are proven identical."
- "The relational map is successful, therefore the explanatory gap is closed."
- "The map is unlicensed, therefore the phenomenal character is absent."

## Appendix H: Minimum character-mapping audit record

Every published $Q_\Phi$ result should preserve:

1. the frozen candidate boundary, grain, regime, and interval;
2. the complete $V\land N^*$ presence result for every admitted content;
3. the content and control families plus source-fidelity tests;
4. the intervention family, route checks, and regime diagnostics;
5. the causal response variables and trajectory-construction method;
6. the metric, topology, transition, occupancy, and temporal-path specifications for $G_c$;
7. all phenomenal anchor measures, reliability estimates, and conflicts;
8. the train, validation, and final test splits;
9. the bridge family, losses, regularization, and null models;
10. held-out pairwise, neighborhood, transition, and deformation predictions;
11. nuisance-model and coordinate-invariance results;
12. the estimated automorphism group and each reported equivalence class;
13. transport anchors, alignment, and $R_T$ when cross-system claims are made;
14. sensitivity across boundaries, grains, metrics, neighborhoods, and bridge families;
15. the separate presence and character-map outcomes;
16. failed, indeterminate, and unlicensed components with reasons;
17. the exact scope of the metaphysical claim, including what remains underdetermined.
