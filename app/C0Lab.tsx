"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SignalKey = "v" | "n1" | "n2" | "n3";
type SignalValues = Record<SignalKey, number>;
type Verdict = "predicted" | "not-predicted" | "indeterminate";

type Profile = {
  name: string;
  eyebrow: string;
  values: SignalValues;
  assessed: boolean;
  conflict: SignalKey | null;
  report: boolean;
  lesson: string;
};

const THRESHOLD = 60;

const PROFILES: Profile[] = [
  {
    name: "Waking perception",
    eyebrow: "Calibration case",
    values: { v: 92, n1: 88, n2: 86, n3: 82 },
    assessed: true,
    conflict: null,
    report: true,
    lesson: "The full viable bundle is present: Cø is predicted for the tested content.",
  },
  {
    name: "REM dream",
    eyebrow: "Delayed report",
    values: { v: 78, n1: 82, n2: 66, n3: 90 },
    assessed: true,
    conflict: null,
    report: false,
    lesson: "Report can be absent until waking. Dream-state availability, not speech, is the N₂ test.",
  },
  {
    name: "General anesthesia",
    eyebrow: "Bundle collapse",
    values: { v: 34, n1: 31, n2: 24, n3: 22 },
    assessed: true,
    conflict: null,
    report: false,
    lesson: "Low viability and weakened integration, broadcast, and recurrence yield no Cø prediction.",
  },
  {
    name: "Locked-in",
    eyebrow: "Report dissociation",
    values: { v: 90, n1: 84, n2: 78, n3: 85 },
    assessed: true,
    conflict: null,
    report: false,
    lesson: "Motor report is blocked, but the viable N* bundle can remain intact. Cø is still predicted.",
  },
  {
    name: "Blindsight",
    eyebrow: "Behavior ≠ presence",
    values: { v: 91, n1: 48, n2: 42, n3: 53 },
    assessed: true,
    conflict: null,
    report: true,
    lesson: "Accurate forced-choice behavior need not imply phenomenal presence for blind-field content.",
  },
  {
    name: "Artificial system",
    eyebrow: "Mapping unresolved",
    values: { v: 76, n1: 81, n2: 87, n3: 75 },
    assessed: false,
    conflict: null,
    report: true,
    lesson: "Architecture and behavior are insufficient when substrate-specific viability is unassessed.",
  },
];

const SIGNALS: Array<{
  key: SignalKey;
  tag: string;
  title: string;
  role: string;
  color: string;
}> = [
  { key: "v", tag: "V", title: "Viability", role: "Can the dynamics be realized?", color: "var(--viability)" },
  { key: "n1", tag: "N₁", title: "Integration / synergy", role: "Are the parts jointly unified?", color: "var(--integration)" },
  { key: "n2", tag: "N₂", title: "Broadcast availability", role: "Can the content reach the system?", color: "var(--broadcast)" },
  { key: "n3", tag: "N₃", title: "Recurrent stability", role: "Does feedback sustain presence?", color: "var(--recurrence)" },
];

function getVerdict(values: SignalValues, assessed: boolean, conflict: SignalKey | null): Verdict {
  if (!assessed || conflict) return "indeterminate";
  return Object.values(values).every((value) => value >= THRESHOLD)
    ? "predicted"
    : "not-predicted";
}

function getVerdictCopy(verdict: Verdict, failed: string[], conflict: SignalKey | null, assessed: boolean) {
  if (!assessed) return "Viability has not been independently established, so the test is incomplete.";
  if (conflict) return `${SIGNALS.find((signal) => signal.key === conflict)?.tag} surrogates exceed the conflict tolerance. The model refuses to cherry-pick.`;
  if (verdict === "predicted") return "Every gate passes without unresolved conflict. The model predicts minimal phenomenal presence.";
  return `${failed.join(", ")} ${failed.length === 1 ? "is" : "are"} below threshold. Because N* is conjunctive, Cø is not predicted.`;
}

function NetworkField({ values, verdict }: { values: SignalValues; verdict: Verdict }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animation = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = {
      n1: [76, 161, 255],
      n2: [255, 157, 67],
      n3: [183, 119, 255],
      v: [183, 238, 72],
    };

    const centers = [
      { x: 0.27, y: 0.43, color: colors.n1 },
      { x: 0.72, y: 0.41, color: colors.n2 },
      { x: 0.5, y: 0.72, color: colors.n3 },
    ];
    const offsets = [
      [-0.12, -0.08], [-0.03, -0.13], [0.09, -0.08], [-0.1, 0.05],
      [0, 0], [0.11, 0.04], [-0.04, 0.13], [0.08, 0.13],
    ];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const rgba = (color: number[], alpha: number) => `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      const energy = values.v / 100;
      const signals = [values.n1 / 100, values.n2 / 100, values.n3 / 100];
      const time = reducedMotion ? 0.3 : frame / 70;

      const nodes = centers.flatMap((center, cluster) =>
        offsets.map(([dx, dy], index) => ({
          x: center.x * width + dx * Math.min(width, height) + Math.sin(time + index * 1.7) * 2 * energy,
          y: center.y * height + dy * Math.min(width, height) + Math.cos(time * 0.8 + index) * 2 * energy,
          color: center.color,
          cluster,
          index,
        })),
      );

      centers.forEach((center, cluster) => {
        const strength = signals[cluster] * energy;
        const gradient = context.createRadialGradient(
          center.x * width, center.y * height, 0,
          center.x * width, center.y * height, Math.min(width, height) * 0.27,
        );
        gradient.addColorStop(0, rgba(center.color, 0.13 * strength));
        gradient.addColorStop(1, rgba(center.color, 0));
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(center.x * width, center.y * height, Math.min(width, height) * 0.27, 0, Math.PI * 2);
        context.fill();
      });

      nodes.forEach((node, index) => {
        const localStrength = signals[node.cluster] * energy;
        nodes.forEach((target, targetIndex) => {
          if (targetIndex <= index || node.cluster !== target.cluster) return;
          const distance = Math.hypot(target.x - node.x, target.y - node.y);
          const limit = Math.min(width, height) * (0.16 + localStrength * 0.08);
          if (distance > limit) return;
          context.strokeStyle = rgba(node.color, 0.06 + localStrength * 0.42);
          context.lineWidth = 0.5 + localStrength * 1.5;
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        });
      });

      const crossStrength = (values.n2 / 100) * energy;
      for (let cluster = 0; cluster < 3; cluster += 1) {
        const next = (cluster + 1) % 3;
        const from = centers[cluster];
        const to = centers[next];
        context.strokeStyle = `rgba(255, 179, 92, ${0.08 + crossStrength * 0.48})`;
        context.lineWidth = 1 + crossStrength * 2.2;
        context.setLineDash([5, 8]);
        context.lineDashOffset = -time * 18;
        context.beginPath();
        context.moveTo(from.x * width, from.y * height);
        context.quadraticCurveTo(width * 0.5, height * 0.44, to.x * width, to.y * height);
        context.stroke();
      }
      context.setLineDash([]);

      const recurrence = (values.n3 / 100) * energy;
      context.strokeStyle = `rgba(183, 119, 255, ${0.1 + recurrence * 0.6})`;
      context.lineWidth = 1.5 + recurrence * 2;
      context.beginPath();
      context.ellipse(width * 0.5, height * 0.52, width * 0.23, height * 0.26, 0, 0, Math.PI * 2);
      context.stroke();

      nodes.forEach((node) => {
        const strength = signals[node.cluster] * energy;
        const pulse = 1 + Math.sin(time * 2.4 + node.index * 0.9 + node.cluster) * 0.28 * strength;
        context.shadowBlur = 10 * strength;
        context.shadowColor = rgba(node.color, 0.7);
        context.fillStyle = rgba(node.color, 0.32 + strength * 0.68);
        context.beginPath();
        context.arc(node.x, node.y, (2.2 + strength * 3.4) * pulse, 0, Math.PI * 2);
        context.fill();
      });
      context.shadowBlur = 0;

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const allStrength = Math.min(values.v, values.n1, values.n2, values.n3) / 100;
      const halo = verdict === "predicted" ? allStrength : verdict === "indeterminate" ? 0.32 : 0.12;
      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 62 + halo * 42);
      glow.addColorStop(0, verdict === "predicted" ? `rgba(255, 89, 73, ${0.55 * halo})` : `rgba(255,255,255,${0.12 * halo})`);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(centerX, centerY, 72 + halo * 32, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = verdict === "predicted" ? "#fff4ef" : "rgba(255,255,255,0.5)";
      context.font = `600 ${34 + halo * 18}px Georgia, serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText("Cø", centerX, centerY);

      frame += 1;
      if (!reducedMotion) animation = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, [values, verdict]);

  return (
    <canvas
      ref={canvasRef}
      className="network-canvas"
      role="img"
      aria-label={`Animated network model. Current result: ${verdict.replace("-", " ")}.`}
    />
  );
}

export function C0Lab() {
  const [values, setValues] = useState<SignalValues>(PROFILES[0].values);
  const [assessed, setAssessed] = useState(PROFILES[0].assessed);
  const [conflict, setConflict] = useState<SignalKey | null>(PROFILES[0].conflict);
  const [report, setReport] = useState(PROFILES[0].report);
  const [activeProfile, setActiveProfile] = useState(0);

  const verdict = getVerdict(values, assessed, conflict);
  const failed = SIGNALS.filter((signal) => values[signal.key] < THRESHOLD).map((signal) => signal.tag);
  const verdictCopy = getVerdictCopy(verdict, failed, conflict, assessed);
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const baseLesson = activeProfile >= 0
    ? PROFILES[activeProfile].lesson
    : "You are now testing a custom profile. A positive result still requires every gate to pass without unresolved conflict.";
  const lessonCopy = !assessed
    ? "Viability is currently unassessed. The model keeps the case indeterminate until the system's capacity for causal, adaptive dynamics is established independently."
    : conflict
      ? `${SIGNALS.find((signal) => signal.key === conflict)?.tag} evidence is in conflict. The model stays indeterminate instead of selecting the favorable surrogate.`
      : !report
        ? "Overt report is off. The model's verdict stays tied to the causal field, not to speech, button presses, or motor output."
        : baseLesson;

  const equationParts = useMemo(
    () => SIGNALS.map((signal) => ({
      ...signal,
      passes: values[signal.key] >= THRESHOLD && (signal.key !== "v" || assessed),
    })),
    [values, assessed],
  );

  const chooseProfile = (index: number) => {
    const profile = PROFILES[index];
    setValues(profile.values);
    setAssessed(profile.assessed);
    setConflict(profile.conflict);
    setReport(profile.report);
    setActiveProfile(index);
  };

  const updateSignal = (key: SignalKey, value: number) => {
    setValues((current) => ({ ...current, [key]: value }));
    setActiveProfile(-1);
  };

  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="C zero home">
          <span>Cø</span><em>/</em>N*
        </a>
        <div className="nav-links">
          <a href="#lab">Run the model</a>
          <a href="#logic">Read the logic</a>
          <a className="nav-paper" href={`${assetBase}/paper.pdf`}>Paper ↗</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <div className="kicker">
            <span className="kicker-rule" aria-hidden="true">
              <i className="rule-red" />
              <i className="rule-orange" />
              <i className="rule-violet" />
            </span>
            <span className="kicker-label">A falsifiable network-dynamics model</span>
          </div>
          <h1>When does processing become <i>presence?</i></h1>
          <p className="hero-lede">
            Cø names the minimal condition that there is <em>something it is like</em> for a system.
            The N* model makes a risky claim: presence emerges only when four gates align.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#lab">Enter the lab <span>↓</span></a>
            <a className="text-action" href={`${assetBase}/paper.pdf`}>Read the paper</a>
          </div>
        </div>

        <div className="hypothesis-card" aria-label="The central hypothesis">
          <div className="hypothesis-label">THE CENTRAL HYPOTHESIS</div>
          <div className="hero-equation" aria-label="Viability and N one and N two and N three if and only if C zero">
            <b className="v-color">V</b>
            <span>∧</span>
            <span>(</span>
            <b className="n1-color">N₁</b>
            <span>∧</span>
            <b className="n2-color">N₂</b>
            <span>∧</span>
            <b className="n3-color">N₃</b>
            <span>)</span>
            <span>⇔</span>
            <b className="c-color">Cø</b>
          </div>
          <div className="hypothesis-notes">
            <span>independently viable</span>
            <span>jointly sufficient</span>
            <span>individually necessary</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </header>

      <section className="thesis-strip" aria-label="Model summary">
        <div><small>01</small><strong>Not a report theory</strong><p>Speech and button presses are evidence, not ingredients.</p></div>
        <div><small>02</small><strong>Not integration alone</strong><p>Unity, availability, and recurrence do different work.</p></div>
        <div><small>03</small><strong>Built to return “uncertain”</strong><p>Conflicting evidence produces indeterminacy, not convenience.</p></div>
      </section>

      <section className="lab-section" id="lab">
        <div className="section-heading">
          <div>
            <span className="section-index">01 / PHENOMENAL PRESENCE LAB</span>
            <h2>Make the model move.</h2>
          </div>
          <p>Choose a paper-derived case, then disturb the system. Watch how each condition changes the network—and why no single impressive signal is enough.</p>
        </div>

        <div className="preset-row" role="group" aria-label="Example system profiles">
          {PROFILES.map((profile, index) => (
            <button
              type="button"
              key={profile.name}
              className={activeProfile === index ? "preset active" : "preset"}
              onClick={() => chooseProfile(index)}
              aria-pressed={activeProfile === index}
            >
              <span>{profile.eyebrow}</span>{profile.name}
            </button>
          ))}
        </div>

        <div className="lab-shell">
          <div className="visual-panel">
            <div className="visual-topline">
              <span>LIVE CAUSAL FIELD</span>
              <span className={`live-indicator ${verdict}`}><i /> {verdict.replace("-", " ")}</span>
            </div>
            <div className={`network-stage ${verdict}`}>
              <NetworkField values={values} verdict={verdict} />
              <div className="field-label field-n1"><b>N₁</b><span>unity</span></div>
              <div className="field-label field-n2"><b>N₂</b><span>reach</span></div>
              <div className="field-label field-n3"><b>N₃</b><span>dwell</span></div>
              <div className="verdict-card" aria-live="polite">
                <span>MODEL OUTPUT</span>
                <strong>{verdict === "predicted" ? "Cø predicted" : verdict === "indeterminate" ? "Indeterminate" : "Cø not predicted"}</strong>
                <p>{verdictCopy}</p>
              </div>
            </div>

            <div className="equation-gates" aria-label="Current gate states">
              {equationParts.map((part, index) => (
                <div className="gate-wrap" key={part.key}>
                  {index > 0 && <span className="and-mark">∧</span>}
                  <div className={`gate ${part.passes ? "pass" : "fail"} ${conflict === part.key ? "conflict" : ""}`}>
                    <b style={{ color: part.color }}>{part.tag}</b>
                    <span>{part.key === "v" && !assessed ? "unassessed" : conflict === part.key ? "conflict" : part.passes ? "passes" : "fails"}</span>
                  </div>
                </div>
              ))}
              <span className="implies">⇔</span>
              <div className={`c-gate ${verdict}`}><b>Cø</b><span>{verdict === "predicted" ? "present" : verdict === "indeterminate" ? "?" : "absent"}</span></div>
            </div>
          </div>

          <aside className="control-panel" aria-label="Model controls">
            <div className="control-heading">
              <span>EXPERIMENT CONTROLS</span>
              <button type="button" onClick={() => chooseProfile(0)}>Reset</button>
            </div>

            <div className="signal-controls">
              {SIGNALS.map((signal) => {
                const passes = values[signal.key] >= THRESHOLD;
                return (
                  <label className="signal-control" key={signal.key}>
                    <span className="signal-title">
                      <b style={{ color: signal.color }}>{signal.tag}</b>
                      <span><strong>{signal.title}</strong><small>{signal.role}</small></span>
                      <output aria-live="polite">{values[signal.key]}</output>
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={values[signal.key]}
                      aria-label={`${signal.title} evidence strength`}
                      onInput={(event) => updateSignal(signal.key, Number(event.currentTarget.value))}
                      onChange={(event) => updateSignal(signal.key, Number(event.currentTarget.value))}
                      style={{
                        "--range-color": signal.color,
                        "--range-progress": `${values[signal.key]}%`,
                      } as React.CSSProperties}
                    />
                    <span className="range-meta"><i>0</i><em style={{ left: `${THRESHOLD}%` }}>threshold {THRESHOLD}</em><i>100</i><b className={passes ? "pass-text" : "fail-text"}>{passes ? "PASS" : "FAIL"}</b></span>
                  </label>
                );
              })}
            </div>

            <div className="guardrail-controls">
              <label className="toggle-row">
                <span><strong>Viability independently assessed</strong><small>Must be set before Cø classification.</small></span>
                <input type="checkbox" checked={assessed} onChange={(event) => setAssessed(event.target.checked)} />
                <i aria-hidden="true" />
              </label>
              <label className="toggle-row report-toggle">
                <span><strong>Overt report available</strong><small>Change it. The verdict does not move.</small></span>
                <input type="checkbox" checked={report} onChange={(event) => setReport(event.target.checked)} />
                <i aria-hidden="true" />
              </label>
              <label className="select-row">
                <span><strong>Surrogate evidence</strong><small>Disagreement beyond κᵢ forces uncertainty.</small></span>
                <select value={conflict ?? "none"} onChange={(event) => setConflict(event.target.value === "none" ? null : event.target.value as SignalKey)}>
                  <option value="none">Measures agree</option>
                  <option value="n1">N₁ measures conflict</option>
                  <option value="n2">N₂ measures conflict</option>
                  <option value="n3">N₃ measures conflict</option>
                </select>
              </label>
            </div>

            <div className="lesson-card">
              <span>WHY THIS CASE MATTERS</span>
              <p>{lessonCopy}</p>
            </div>
          </aside>
        </div>

        <p className="lab-footnote"><b>Didactic note.</b> The 0–100 controls represent strength of evidence, not biological units. Real experiments must preregister component-specific measures, thresholds, time windows, and conflict tolerances.</p>
      </section>

      <section className="logic-section" id="logic">
        <div className="section-heading light-heading">
          <div>
            <span className="section-index">02 / FOUR DISTINCT JOBS</span>
            <h2>One field. Four constraints.</h2>
          </div>
          <p>N* is a conjunction, not a menu. Each condition answers a different failure mode in theories of minimal phenomenal presence.</p>
        </div>

        <div className="logic-grid">
          <article className="logic-card v-card">
            <span className="logic-number">V</span><small>THE GATE</small>
            <h3>Viability</h3>
            <p>Rules out inert diagrams, dead tissue, disconnected simulations, and dynamics the substrate cannot actually sustain.</p>
            <div className="logic-test">Ask: <b>Can this system causally realize the dynamics?</b></div>
          </article>
          <article className="logic-card n1-card">
            <span className="logic-number">N₁</span><small>THE UNITY CONDITION</small>
            <h3>Integration / synergy</h3>
            <p>Parts jointly carry structure that cannot be reduced to isolated signals. Activity alone is not enough.</p>
            <div className="logic-test">Without it: <b>available fragments, no unified content.</b></div>
          </article>
          <article className="logic-card n2-card">
            <span className="logic-number">N₂</span><small>THE AVAILABILITY CONDITION</small>
            <h3>Broadcast availability</h3>
            <p>Content reaches a relevant system-level backbone quickly enough to play a causal role—without requiring overt report.</p>
            <div className="logic-test">Without it: <b>stable local unity remains isolated.</b></div>
          </article>
          <article className="logic-card n3-card">
            <span className="logic-number">N₃</span><small>THE TEMPORAL CONDITION</small>
            <h3>Recurrent stability</h3>
            <p>Feedback sustains content for a bounded dwell interval: neither a feedforward flicker nor pathological fixation.</p>
            <div className="logic-test">Without it: <b>processing happens, but never settles into presence.</b></div>
          </article>
        </div>
      </section>

      <section className="pipeline-section">
        <div className="pipeline-intro">
          <span className="section-index">03 / THE SCIENTIFIC GUARDRAIL</span>
          <h2>A test that is allowed to say <i>“we don’t know.”</i></h2>
          <p>The model separates its sharp hypothesis from the evidence available in a particular experiment.</p>
        </div>
        <ol className="pipeline">
          <li><span>01</span><b>Bound</b><p>Fix the system, content, graph, and time window before seeing the outcome.</p></li>
          <li><span>02</span><b>Assess V</b><p>Establish viability independently of the desired consciousness verdict.</p></li>
          <li><span>03</span><b>Estimate N*</b><p>Measure integration, availability, and recurrence against preregistered thresholds.</p></li>
          <li><span>04</span><b>Check κᵢ</b><p>If surrogate measures diverge too far, return indeterminate.</p></li>
          <li><span>05</span><b>Classify</b><p>Predict Cø only when every term passes without unresolved conflict.</p></li>
        </ol>
      </section>

      <section className="falsification-section">
        <div className="falsification-copy">
          <span className="section-index">04 / BUILT TO FAIL</span>
          <h2>The model places two bets.</h2>
          <p>Its scientific value lies in exposure. Either counterexample forces revision rather than reinterpretation.</p>
        </div>
        <div className="bet-card">
          <small>SUFFICIENCY FAILURE</small>
          <div>V ∧ N* ∧ ¬Cø</div>
          <p>A viable system has the entire bundle, yet strong evidence denies phenomenal presence.</p>
        </div>
        <div className="bet-card">
          <small>NECESSITY FAILURE</small>
          <div>Cø ∧ ¬(V ∧ N*)</div>
          <p>Phenomenal presence persists while one or more required conditions are genuinely absent.</p>
        </div>
      </section>

      <section className="bridge-section">
        <div>
          <span className="section-index">05 / A BRIDGE THEORY</span>
          <h2>Three traditions.<br />One exposed conjunction.</h2>
        </div>
        <div className="bridge-list">
          <div><b>IIT</b><span>contributes pressure toward</span><strong className="n1-color">unity</strong></div>
          <div><b>GNWT</b><span>contributes pressure toward</span><strong className="n2-color">availability</strong></div>
          <div><b>RPT</b><span>contributes pressure toward</span><strong className="n3-color">recurrence</strong></div>
        </div>
        <p className="bridge-note">Cø / N* does not claim that any source theory is sufficient by itself. Its novelty is the conjunction, the viability gate, the conflict policy, and the explicit biconditional failure structure.</p>
      </section>

      <footer>
        <div className="footer-mark">Cø<span>/N*</span></div>
        <div>
          <p>A minimal network-dynamics model of phenomenal presence.</p>
          <small>Interactive interpretation of Phil Stilwell’s 2026 paper.</small>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href={`${assetBase}/paper.pdf`}>Read the paper ↗</a>
        </div>
      </footer>
    </main>
  );
}
