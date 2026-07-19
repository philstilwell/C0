import type { Metadata } from "next";
import textbookBuild from "@/output/student-textbook-build-manifest.json";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const manualHref = `${assetBase}/teaching/instructor-manual/2.1/teaching-c0-n-star-instructor-manual.pdf`;
const textbookEdition = textbookBuild.release.edition;
const textbookPages = textbookBuild.release.pdf.pages;
const textbookSizeMb = (textbookBuild.release.pdf.bytes / 1_000_000).toFixed(1);
const textbookHref = `${assetBase}${textbookBuild.release.pdf.public_url}`;
const studentMaterialsHref = `${assetBase}/teaching/student-materials/2.1/c0-n-star-student-session-resource-pack.pdf`;
const manualPhilPapersHref = "https://philpapers.org/rec/STITCE-4";
const textbookPhilPapersHref = "https://philpapers.org/rec/STILCX";

const manualContents = [
  {
    index: "01",
    title: "Theory placement",
    copy: "Situates Cø / N* among integrated-information, global-workspace, recurrent-processing, higher-order, predictive-processing, biological, and eliminativist approaches.",
  },
  {
    index: "02",
    title: "Lecture architecture",
    copy: "Supplies objectives, preparation, timed plans, lecture notes, board and slide plans, readings, misconceptions, and exit tickets for every session.",
  },
  {
    index: "03",
    title: "Collaborative inquiry",
    copy: "Uses role-based exercises, structured discussions, progressive evidence releases, worksheets, and equitable participation protocols.",
  },
  {
    index: "04",
    title: "Validation under pressure",
    copy: "Builds in objection matrices, component ablation, falsification criteria, research-design rubrics, and an adversarial capstone.",
  },
] as const;

export const metadata: Metadata = {
  title: "Teaching Cø / N* — Graduate Course Resources",
  description:
    "Graduate teaching resources for the Cø / N* theory of phenomenal consciousness: an audited instructor manual and its accessible student textbook.",
  openGraph: {
    title: "Teaching Cø / N* — Graduate Course Resources",
    description:
      "A paired fourteen-session instructor manual and student textbook for critical, evidence-led study of Cø / N*.",
  },
};

export default function TeachingPage() {
  return (
    <main className="teaching-page">
      <a className="skip-link" href="#teaching-content">Skip to teaching resources</a>

      <nav className="topbar teaching-topbar" aria-label="Primary navigation">
        <a className="wordmark" href={`${assetBase}/`} aria-label="C zero home">
          <span>Cø</span><em>/</em>N*
        </a>
        <div className="nav-links teaching-nav-links">
          <a href={`${assetBase}/`}>Interactive model</a>
          <a href={`${assetBase}/constellation/`}>Research</a>
          <a className="nav-paper" href={textbookHref} target="_blank" rel="noreferrer">Student textbook ↗</a>
        </div>
      </nav>

      <header className="teaching-hero" id="top">
        <div className="teaching-hero-copy">
          <p className="teaching-kicker"><span aria-hidden="true" /> GRADUATE COURSE RESOURCES</p>
          <h1>Teach a new theory without teaching it as <i>settled.</i></h1>
          <p className="teaching-lede">
            The Cø / N* course collection is built for precise reconstruction, fair comparison with rival
            theories, and evidence that could force revision. Its instructor manual and student textbook
            now provide two coordinated routes through the same fourteen-part sequence.
          </p>
          <div className="teaching-hero-actions">
            <a className="teaching-primary-action" href={manualHref} target="_blank" rel="noreferrer">Open manual (PDF · 4.5 MB) <span>↗</span></a>
            <a className="teaching-secondary-action" href={textbookHref} target="_blank" rel="noreferrer">Open student textbook (PDF · {textbookSizeMb} MB) <span>↗</span></a>
          </div>
        </div>
        <aside className="teaching-hero-ledger" aria-label="Course collection at a glance">
          <span>COORDINATED COURSE COLLECTION</span>
          <dl>
            <div><dt>Sessions</dt><dd>14</dd></div>
            <div><dt>Course texts</dt><dd>2</dd></div>
            <div><dt>Source papers</dt><dd>7</dd></div>
            <div><dt>Release</dt><dd>July 2026</dd></div>
          </dl>
          <p>Aligned instructor guidance and student exposition, with collaborative work, staged evidence, exercises, and adversarial validation.</p>
        </aside>
      </header>

      <section className="course-texts-section" id="teaching-content" tabIndex={-1} aria-labelledby="course-texts-heading">
        <div className="teaching-section-heading">
          <div>
            <span>01 / COURSE TEXTS</span>
            <h2 id="course-texts-heading">One course. Two audiences.</h2>
          </div>
          <p>The collection keeps instructor guidance and student exposition distinct while aligning their sequence, vocabulary, notation, cases, and learning outcomes.</p>
        </div>

        <div className="course-text-grid" id="course-texts">
          <article className="course-text-card instructor-text-card">
            <div className="course-text-status"><span aria-hidden="true" /> FOR INSTRUCTORS · AVAILABLE NOW</div>
            <h3>Teaching Cø / N*: A Graduate Instructor&apos;s Manual</h3>
            <p>An audited fourteen-session manual integrating the seven-paper research program with lecture notes, theory placement, collaborative exercises and discussions, staged case materials, worksheets, assessment rubrics, and adversarial validation protocols.</p>
            <div className="course-text-meta">Edition 2.1 · July 2026 · 169 pages · PDF, 4.5 MB</div>
            <div className="course-text-actions">
              <a href={manualHref} target="_blank" rel="noreferrer">Open manual (PDF · 4.5 MB) <span>↗</span></a>
              <a href={manualPhilPapersHref} target="_blank" rel="noreferrer">View PhilPapers record <span>↗</span></a>
            </div>
            <aside className="instructor-warning">
              <strong>Instructor edition</strong>
              <p>Contains answer guides, assessment keys, and controlled-reveal guidance. Use student-facing materials—not this edition—for course distribution.</p>
            </aside>
          </article>

          <article className="course-text-card student-text-card">
            <div className="course-text-status"><span aria-hidden="true" /> FOR STUDENTS · AVAILABLE NOW</div>
            <h3>Learning Cø / N*: A Student Textbook of Phenomenal Presence</h3>
            <p>A graduate-accessible companion to the manual, with annotated explanations, worked examples, analogies and their limits, thought experiments, collaborative exercises, counterexample challenges, and a complete adversarial capstone workbook.</p>
            <div className="course-text-meta">Student edition {textbookEdition} · July 2026 · {textbookPages} pages · PDF, {textbookSizeMb} MB</div>
            <div className="course-text-actions">
              <a href={textbookHref} target="_blank" rel="noreferrer">Open textbook (PDF · {textbookSizeMb} MB) <span>↗</span></a>
              <a href={textbookPhilPapersHref} target="_blank" rel="noreferrer">View PhilPapers record <span>↗</span></a>
            </div>
            <div className="textbook-plan" aria-label="Textbook relationship to the instructor manual">
              <div><span>01</span><p><strong>Shared spine</strong> Fourteen aligned chapters and stable terminology.</p></div>
              <div><span>02</span><p><strong>Student-facing</strong> Accessible annotations without instructor keys.</p></div>
              <div><span>03</span><p><strong>Active inquiry</strong> Analogies, thought experiments, collaborative work, and revision pressure.</p></div>
            </div>
          </article>
        </div>

        <article className="course-supplement" aria-labelledby="student-materials-heading">
          <div>
            <div className="course-text-status"><span aria-hidden="true" /> FOR STUDENT DISTRIBUTION · AVAILABLE NOW</div>
            <h3 id="student-materials-heading">Student session resource pack</h3>
          </div>
          <p>A key-free, reveal-safe handout for the fourteen-session course. It supports staged classroom activities and is a companion to—not a replacement for—the student textbook.</p>
          <a href={studentMaterialsHref} target="_blank" rel="noreferrer">Open student materials (PDF · 0.6 MB) <span>↗</span></a>
        </article>
      </section>

      <section className="manual-contents-section" aria-labelledby="manual-contents-heading">
        <div className="teaching-section-heading teaching-section-heading-light">
          <div>
            <span>02 / INSIDE THE MANUAL</span>
            <h2 id="manual-contents-heading">A complete course, not a syllabus sketch.</h2>
          </div>
          <p>The manual integrates all seven Cø / N* papers into a graduate seminar while preserving the theory&apos;s conditional and adversarial stance.</p>
        </div>
        <div className="manual-content-grid">
          {manualContents.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="course-architecture-section" aria-labelledby="course-architecture-heading">
        <div className="course-architecture-copy">
          <span>03 / FLEXIBLE COURSE ARCHITECTURE</span>
          <h2 id="course-architecture-heading">Fourteen sessions, with principled shorter routes.</h2>
          <p>The full seminar spans fourteen meetings. The manual also specifies a supported nine-session core and a four-session workshop; compression does not license omission of the model&apos;s evidential guardrails.</p>
        </div>
        <div className="course-route-grid" aria-label="Supported course formats">
          <div><strong>14</strong><span>Full graduate seminar</span></div>
          <div><strong>9</strong><span>Supported core sequence</span></div>
          <div><strong>4</strong><span>Intensive workshop</span></div>
        </div>
      </section>

      <section className="teaching-closing">
        <p>READY FOR COURSE DESIGN</p>
        <h2>Plan with the instructor architecture. Learn and test the theory with the student companion.</h2>
        <div className="teaching-closing-actions">
          <a className="teaching-primary-action" href={manualHref} target="_blank" rel="noreferrer">Open the manual (PDF · 4.5 MB) <span>↗</span></a>
          <a className="teaching-secondary-action" href={textbookHref} target="_blank" rel="noreferrer">Open the textbook (PDF · {textbookSizeMb} MB) <span>↗</span></a>
        </div>
      </section>

      <footer className="teaching-footer">
        <div className="footer-mark">Cø<span>/N*</span></div>
        <div>
          <p>Graduate teaching resources for a testable theory of phenomenal presence.</p>
          <small>Instructor manual available · Student textbook available</small>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href={`${assetBase}/`}>Interactive model</a>
          <a href={`${assetBase}/constellation/`}>Research constellation</a>
        </div>
      </footer>
    </main>
  );
}
