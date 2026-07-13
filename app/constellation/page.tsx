import type { Metadata } from "next";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const papers = [
  {
    id: "core",
    index: "01",
    type: "THE CORE CLAIM",
    title: "Cø as N*: A Minimal Network-Dynamics Model of Phenomenal Consciousness",
    question: "When is there something it is like for a system?",
    contribution: "States the exposed conjunction: viability plus integration, availability, and recurrent stability are jointly necessary and sufficient for minimal phenomenal presence.",
    explanation: "The paper begins by narrowing the explanandum. Cø does not stand for intelligence, access consciousness, flexible behavior, or verbal report; it stands for the minimal fact that there is something it is like for a system. It then treats viability (V), integration or synergy (N₁), system-wide availability (N₂), and recurrent stability (N₃) as conditions that must be jointly realized by the same candidate system, for the same content, within a bounded time window. The payoff is a claim that can fail in two directions: a viable N* bundle without presence, or presence where one of the required conditions is genuinely absent.",
    protects: "Presence is not inferred from report, intelligence, or one impressive metric.",
    relation: "The conceptual center. The other papers specify its scope, its evidence, its epistemic discipline, and its extension to character.",
    href: `${assetBase}/paper.pdf`,
    recordHref: undefined,
    tone: "core",
  },
  {
    id: "boundary",
    index: "02",
    type: "THE SCOPE CONDITION",
    title: "Where Is the Conscious Subject? A Dynamical Criterion for System Boundaries",
    question: "Which candidate system is actually being tested?",
    contribution: "Makes system individuation a prior dynamical task: fix an independently motivated, inclusion-minimal candidate before measuring consciousness-relevant properties.",
    explanation: "This paper addresses a prior question that is often smuggled past a measurement: where does the relevant system begin and end? Rather than selecting a boundary because it produces an attractive score, it asks investigators to generate candidate systems from independently motivated signs of dynamical autonomy and then identify the smallest candidate that jointly realizes the relevant profile. That order matters. V and N* are properties of a system, so a test of phenomenal presence has no stable target until the candidate system has been fixed before the desired verdict is known.",
    protects: "A consciousness measure cannot rescue an unspecified or cherry-picked system boundary.",
    relation: "It supplies the S in which V and N* are evaluated. It is a precondition for applying the core model, not an extra conjunct.",
    href: `${assetBase}/papers/where-is-the-conscious-subject.pdf`,
    recordHref: undefined,
    tone: "boundary",
  },
  {
    id: "availability",
    index: "03",
    type: "THE N₂ SPECIFICATION",
    title: "Consciousness Without Report: What System-Wide Availability Actually Requires",
    question: "What would make a content available without requiring a report?",
    contribution: "Operationalizes N₂ through content-specific causal interventions, distinct functional recipient classes, bounded latency, and robustness checks.",
    explanation: "The paper turns N₂ from a loose image of information spreading through a brain into an experimentally discriminating causal requirement. The relevant content must be able to modulate multiple preregistered functional recipient classes in a content-specific way, on an appropriate time scale, and with enough contextual robustness to show that the effect is not a transient correlation or indiscriminate diffusion. Overt report is deliberately excluded as a requirement: speech and button presses can be evidence, but availability must be demonstrated by the causal work the content can do throughout the candidate system.",
    protects: "Diffuse activity, verbal behavior, and mere access are not quietly treated as system-wide availability.",
    relation: "It gives the core model one of its gates a sharper experimental meaning: availability is a causal role, not a behavioral proxy.",
    href: `${assetBase}/papers/consciousness-without-report.pdf`,
    recordHref: undefined,
    tone: "availability",
  },
  {
    id: "indeterminacy",
    index: "04",
    type: "THE EPISTEMIC DISCIPLINE",
    title: "Indeterminacy as a Scientific Result: A Four-Outcome Framework for Consciousness Attribution",
    question: "What does the available evidence actually license?",
    contribution: "Separates positive, negative, indeterminate, and unlicensed outcomes, so a measurement gap remains visible rather than being converted into a verdict.",
    explanation: "This paper makes room for the most scientifically valuable answer in hard cases: not yet determined. It separates a positive attribution, a negative attribution, an indeterminate result, and an unlicensed result, depending on whether the required prerequisites were met, the evidence converges, and the relevant comparison is actually within the reach of the study. The framework does not dilute the core hypothesis; it protects it from overextension. A precise theory can coexist with a disciplined refusal to pretend that incomplete, conflicting, or scope-mismatched evidence has already settled the case.",
    protects: "Unknown is not silently collapsed into absent; a theory's sharpness is not confused with an experiment's reach.",
    relation: "It governs how evidence about the core model is reported whenever prerequisites, measures, or conflicts remain unresolved.",
    href: `${assetBase}/papers/indeterminacy-as-a-scientific-result.pdf`,
    recordHref: undefined,
    tone: "indeterminacy",
  },
  {
    id: "character",
    index: "05",
    type: "THE GEOMETRIC EXTENSION",
    title: "From Phenomenal Presence to Phenomenal Character: A Dynamical-Geometry Extension of the N* Model",
    question: "If presence obtains, what is the experience like?",
    contribution: "Extends the minimal presence gate toward a mapping from content-specific causal-trajectory geometry to an independently anchored space of phenomenal qualities.",
    explanation: "The core model intentionally answers only whether minimal phenomenal presence is predicted. This extension asks a distinct question: why should one present episode feel visual rather than auditory, red rather than blue, sharp rather than diffuse? Its proposal is that content-specific causal trajectories may have a geometry that can be mapped, under independent anchoring and validation constraints, to a structured quality space. The result is not a decorative add-on to Cø: it preserves the minimal criterion while opening a separate, more demanding research program on the organization of phenomenal character.",
    protects: "A criterion for presence is not mistaken for an explanation of phenomenal character.",
    relation: "It begins where the core model deliberately stops: with the structure of a present experience rather than the fact of presence alone.",
    href: `${assetBase}/papers/from-phenomenal-presence-to-phenomenal-character.pdf`,
    recordHref: undefined,
    tone: "character",
  },
  {
    id: "ablation",
    index: "06",
    type: "THE NECESSITY AUDIT",
    title: "Ablating N*: Does Every Conjunct Earn Its Place?",
    question: "Does every proposed condition make a difference that the model genuinely needs?",
    contribution: "Turns the necessity of V, N₁, N₂, and N₃ into a non-circular comparison between the full model and preregistered leave-one-out rivals.",
    explanation: "A conjunction is not empirically minimal merely because all of its terms track the same state. This paper shows that a component earns a necessity claim only in diagnostic cases where that component fails while the remaining conditions pass, so that the full and ablated models actually disagree. It separates deleting a condition from a theory, perturbing its proposed realization, and removing a measurement family; freezes boundaries, thresholds, interventions, and model-comparison rules before adjudication; and uses held-out, independently constructed anchor evidence rather than labels generated by N* itself. Its five audit outcomes—indispensable, redundant, causally coupled, indeterminate, and unlicensed—make the theory vulnerable to revision at the component level.",
    protects: "No conjunct gets to call itself necessary merely because it covaries with the others, helps an implementation, or is built into the verdict it later ‘validates.’",
    relation: "The program’s adversarial audit. It pressure-tests the core architecture after the boundary, evidence, and conflict disciplines have been fixed.",
    href: `${assetBase}/papers/ablating-n-star.pdf`,
    recordHref: "https://philpapers.org/rec/STIANW",
    tone: "audit",
  },
] as const;

const paperById = Object.fromEntries(papers.map((paper) => [paper.id, paper]));

export const metadata: Metadata = {
  title: "The Cø / N* research constellation",
  description:
    "Six complementary papers on phenomenal presence, system boundaries, availability without report, component necessity, scientific indeterminacy, and phenomenal character.",
  openGraph: {
    title: "The Cø / N* research constellation",
    description: "One core model, five complementary papers, and a shared discipline of falsifiability.",
  },
};

function MapNode({ id }: { id: keyof typeof paperById }) {
  const paper = paperById[id];

  return (
    <a className={`constellation-node node-${paper.tone}`} href={paper.recordHref ?? paper.href} aria-label={`Read ${paper.title}${paper.recordHref ? " on PhilPapers" : " PDF"}`}>
      <span className="node-index">{paper.index} / {paper.type}</span>
      <strong>{id === "core" ? "Cø as N*" : id === "boundary" ? "Boundaries" : id === "availability" ? "Availability" : id === "indeterminacy" ? "Indeterminacy" : id === "ablation" ? "Ablation audit" : "Character"}</strong>
      <span>{paper.question}</span>
      <em>{paper.recordHref ? "View on PhilPapers ↗" : "Read paper ↗"}</em>
    </a>
  );
}

export default function ConstellationPage() {
  return (
    <main className="constellation-page">
      <nav className="topbar constellation-topbar" aria-label="Primary navigation">
        <a className="wordmark" href={`${assetBase}/`} aria-label="C zero home">
          <span>Cø</span><em>/</em>N*
        </a>
        <div className="nav-links constellation-nav-links">
          <a href="#map">Research map</a>
          <a href="#how-they-fit">How they fit</a>
          <a className="nav-paper" href={`${assetBase}/paper.pdf`}>Core paper ↗</a>
        </div>
      </nav>

      <header className="constellation-hero" id="top">
        <div className="constellation-hero-copy">
          <p className="constellation-kicker"><span aria-hidden="true" /> SIX PAPERS, ONE RESEARCH PROGRAM</p>
          <h1>One core claim.<br /><i>Five ways to take it further.</i></h1>
          <p>
            The Cø / N* papers do not compete to explain consciousness. They divide the work: identify the
            system, define one key causal condition, state a falsifiable criterion for presence, discipline the
            verdict, audit whether each conjunct earns its place, and then ask about the character of what is present.
          </p>
          <div className="constellation-hero-actions">
            <a href="#map" className="constellation-primary-action">Explore the constellation <span>↓</span></a>
            <a href={`${assetBase}/`} className="constellation-text-action">Engage the core model</a>
          </div>
        </div>
        <aside className="constellation-thesis" aria-label="The shared scientific commitment">
          <span>SHARED COMMITMENT</span>
          <b>Make every inference earn its scope.</b>
          <p>Each paper prevents a different shortcut: an unfixed system, a weak availability proxy, an untested conjunct, a forced binary verdict, or an unexplained leap from presence to character.</p>
        </aside>
      </header>

      <section className="constellation-map-section" id="map" aria-labelledby="map-heading">
        <div className="constellation-section-heading">
          <div>
            <span>01 / THE RESEARCH MAP</span>
            <h2 id="map-heading">A constellation, not a stack.</h2>
          </div>
          <p>The central paper supplies the minimal criterion. Five companion papers fix its scope, sharpen its evidence, audit its necessities, discipline its verdicts, and extend its explanatory reach.</p>
        </div>

        <div className="constellation-map" aria-label="A visual map of the six complementary papers">
          <div className="map-axis map-axis-horizontal" aria-hidden="true" />
          <div className="map-axis map-axis-vertical" aria-hidden="true" />
          <MapNode id="boundary" />
          <MapNode id="availability" />
          <MapNode id="core" />
          <MapNode id="indeterminacy" />
          <MapNode id="character" />
          <MapNode id="ablation" />
          <p className="map-center-note">Every node is a paper. The audit band tests the core’s internal necessity claims.</p>
        </div>

        <div className="constellation-map-legend" aria-label="How to read the research map">
          <div><b className="legend-dot boundary-dot" /> <span><strong>Before measurement</strong> — establish the candidate system.</span></div>
          <div><b className="legend-dot availability-dot" /> <span><strong>Within the model</strong> — give N₂ a causal test.</span></div>
          <div><b className="legend-dot indeterminacy-dot" /> <span><strong>After measurement</strong> — report what the evidence warrants.</span></div>
          <div><b className="legend-dot character-dot" /> <span><strong>Beyond minimal presence</strong> — model the structure of experience.</span></div>
          <div><b className="legend-dot audit-dot" /> <span><strong>Across the model</strong> — test whether each conjunct earns its place.</span></div>
        </div>
      </section>

      <section className="constellation-routes-section" id="how-they-fit" aria-labelledby="routes-heading">
        <div className="constellation-routes-copy">
          <span>02 / THREE WAYS THROUGH</span>
          <h2 id="routes-heading">The papers meet different needs at different moments.</h2>
          <p>The core model is the conceptual center, but research does not always begin there. Choose the route that matches the question in front of you.</p>
        </div>
        <div className="constellation-routes">
          <article>
            <span>ROUTE A / ORIENT</span>
            <h3>What is the claim?</h3>
            <p>Start with <a href={paperById.core.href}>Cø as N*</a>. It names the target—minimal phenomenal presence—and puts the conjunction at risk of failure.</p>
            <div><b>Cø as N*</b><i>→</i><b>the core hypothesis</b></div>
          </article>
          <article>
            <span>ROUTE B / TEST</span>
            <h3>How would a study earn a verdict?</h3>
            <p>First fix the system, then test availability without report, apply the conjunction, compare it with leave-one-out rivals, and preserve uncertainty when the evidence cannot settle the case.</p>
            <div><b>Boundaries</b><i>→</i><b>Availability</b><i>→</i><b>Cø / N*</b><i>→</i><b>Ablation audit</b><i>→</i><b>Indeterminacy</b></div>
          </article>
          <article>
            <span>ROUTE C / EXTEND</span>
            <h3>What could make a present experience this experience?</h3>
            <p>Move from the core criterion to the dynamical-geometry extension, where content-specific causal structure is asked to bear explanatory weight for phenomenal character.</p>
            <div><b>Cø as N*</b><i>→</i><b>Phenomenal character</b></div>
          </article>
        </div>
      </section>

      <section className="constellation-papers-section" aria-labelledby="papers-heading">
        <div className="constellation-section-heading paper-list-heading">
          <div>
            <span>03 / SIX DISTINCT JOBS</span>
            <h2 id="papers-heading">What each paper contributes.</h2>
          </div>
          <p>Read horizontally for the local question; read vertically to see the shared commitment to explicit scope, causal evidence, component-level testing, and falsifiable claims.</p>
        </div>
        <div className="constellation-paper-grid">
          {papers.map((paper) => (
            <article className={`constellation-paper-card ${paper.tone}`} id={paper.id} key={paper.id}>
              <div className="paper-card-topline"><span>{paper.index}</span><span>{paper.type}</span></div>
              <h3>{paper.title}</h3>
              <div className="paper-card-question"><span>THE QUESTION</span><p>{paper.question}</p></div>
              <p className="paper-card-contribution">{paper.contribution}</p>
              <div className="paper-card-explanation"><span>THE EXPLANATION</span><p>{paper.explanation}</p></div>
              <div className="paper-card-protects"><span>WHAT IT PREVENTS</span><p>{paper.protects}</p></div>
              <p className="paper-card-relation"><b>In the constellation:</b> {paper.relation}</p>
              <div className="paper-card-actions">
                <a href={paper.href}>Read PDF <span>↗</span></a>
                {paper.recordHref && <a href={paper.recordHref} target="_blank" rel="noreferrer">PhilPapers record <span>↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="constellation-synthesis" aria-labelledby="synthesis-heading">
        <div className="constellation-synthesis-copy">
          <span>04 / THE COMPLEMENTARITY TEST</span>
          <h2 id="synthesis-heading">No paper is asked to do another’s job.</h2>
          <p>That division of labor is the point. The framework grows by making dependencies visible rather than by folding every question into a single consciousness metric.</p>
        </div>
        <div className="constellation-matrix" role="table" aria-label="How the papers complement each other">
          <div className="matrix-row matrix-head" role="row"><span role="columnheader">Paper</span><span role="columnheader">Adds to the program</span><span role="columnheader">Stops this shortcut</span></div>
          <div className="matrix-row core" role="row"><b role="cell">Cø as N*</b><span role="cell">A risky criterion for minimal presence.</span><span role="cell">“One signal, therefore consciousness.”</span></div>
          <div className="matrix-row boundary" role="row"><b role="cell">System boundaries</b><span role="cell">A candidate system whose dynamics can be assessed.</span><span role="cell">“Measure first; decide what the system was later.”</span></div>
          <div className="matrix-row availability" role="row"><b role="cell">No report</b><span role="cell">A causal account of N₂ availability.</span><span role="cell">“Behavior or diffusion proves availability.”</span></div>
          <div className="matrix-row indeterminacy" role="row"><b role="cell">Indeterminacy</b><span role="cell">Four outcome classes for constrained attribution.</span><span role="cell">“No evidence is evidence of no consciousness.”</span></div>
          <div className="matrix-row character" role="row"><b role="cell">Phenomenal character</b><span role="cell">A geometry-based extension beyond minimal presence.</span><span role="cell">“Presence already explains what the experience is like.”</span></div>
          <div className="matrix-row audit" role="row"><b role="cell">Ablating N*</b><span role="cell">A component-level necessity audit with held-out anchors.</span><span role="cell">“A conjunct tracks the state, so it must be necessary.”</span></div>
        </div>
      </section>

      <section className="constellation-closing">
        <p>THE PROGRAM IN ONE SENTENCE</p>
        <h2>Specify the system, test the causal conditions, state only what the evidence licenses, and then ask what the present dynamics are like from within.</h2>
        <a href={`${assetBase}/`} className="constellation-primary-action">Return to the interactive model <span>→</span></a>
      </section>

      <footer className="constellation-footer">
        <div className="footer-mark">Cø<span>/N*</span></div>
        <div>
          <p>A connected research program on phenomenal presence and its limits.</p>
          <small>Five papers by Phil Stilwell · 2026</small>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href={`${assetBase}/`}>Interactive model</a>
        </div>
      </footer>
    </main>
  );
}
