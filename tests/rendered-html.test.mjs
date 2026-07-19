import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished Cø laboratory", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Cø \/ N\*/);
  assert.match(html, /Phenomenal Presence Lab/);
  assert.match(html, /Engage the model/);
  assert.match(html, /kicker-rule/);
  assert.match(html, /kicker-label/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
});

test("keeps the model logic and GitHub Pages export explicit", async () => {
  const [lab, layout, config, workflow] = await Promise.all([
    readFile(new URL("../app/C0Lab.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8"),
  ]);
  assert.match(lab, /getVerdict/);
  assert.match(lab, /indeterminate/);
  assert.match(lab, /Overt report available/);
  assert.match(lab, /aria-label=\{`\$\{signal\.title\} evidence strength`\}/);
  assert.match(lab, /onInput=\{\(event\) => updateSignal/);
  assert.match(lab, /lessonCopy/);
  assert.doesNotMatch(lab, /View source/);
  assert.doesNotMatch(lab, /github\.com\/philstilwell\/C0/);
  assert.match(layout, /favicon\.ico/);
  assert.match(layout, /apple-touch-icon\.png/);
  assert.match(config, /output: "export"/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.doesNotMatch(lab, /<svg/i);
  assert.ok(templateRoot);
});

test("server-renders the seven-paper research constellation", async () => {
  const response = await render("/constellation/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /One core claim/);
  assert.match(html, /Six ways to take it further/);
  assert.match(html, /Where Is the Conscious Subject/);
  assert.match(html, /Consciousness Without Report/);
  assert.match(html, /Indeterminacy as a Scientific Result/);
  assert.match(html, /From Phenomenal Presence to Phenomenal Character/);
  assert.match(html, /Cø as N\*/);
  assert.match(html, /Ablating N\*: Does Every Conjunct Earn Its Place/);
  assert.match(html, /Reading Consciousness from the Schematic/);
  assert.match(html, /philpapers\.org\/rec\/STIANW/);
  assert.match(html, /philpapers\.org\/rec\/STIRCF/);
  assert.match(html, /papers\/where-is-the-conscious-subject\.pdf/);
  assert.match(html, /papers\/consciousness-in-the-schematic\.pdf/);
  assert.match(html, /THE EXPLANATION/);
  assert.match(html, /The paper begins by narrowing the explanandum/);
});

test("server-renders the paired teaching collection", async () => {
  const [teachingResponse, homeResponse, constellationResponse] = await Promise.all([
    render("/teaching/"),
    render(),
    render("/constellation/"),
  ]);
  assert.equal(teachingResponse.status, 200);
  const [teaching, home, constellation] = await Promise.all([
    teachingResponse.text(),
    homeResponse.text(),
    constellationResponse.text(),
  ]);
  assert.match(teaching, /Teaching Cø \/ N\*: A Graduate Instructor/);
  assert.match(teaching, /Instructor edition/);
  assert.match(teaching, /Learning Cø \/ N\*: A Student Textbook of Phenomenal Presence/);
  assert.match(teaching, /FOR STUDENTS · AVAILABLE NOW/);
  assert.match(teaching, /teaching\/instructor-manual\/2\.1\/teaching-c0-n-star-instructor-manual\.pdf/);
  assert.match(teaching, /teaching\/student-textbook\/1\.0\/learning-c0-n-star-student-textbook\.pdf/);
  assert.match(teaching, /Student session resource pack/);
  assert.match(teaching, /companion to/);
  assert.match(teaching, /not a replacement for/);
  assert.match(teaching, /teaching\/student-materials\/2\.1\/c0-n-star-student-session-resource-pack\.pdf/);
  assert.match(teaching, /Contains answer guides, assessment keys, and controlled-reveal guidance/);
  assert.match(teaching, /philpapers\.org\/rec\/STITCE-4/);
  assert.doesNotMatch(teaching, /FORTHCOMING|In development|student textbook forthcoming/i);
  assert.doesNotMatch(teaching, /href=["']#["']/);
  assert.match(home, /href=["']\/teaching\//);
  assert.match(constellation, /href=["']\/teaching\//);
});

test("ships an exact public copy of instructor manual edition 2.1", async () => {
  const [publicManual, releaseManual] = await Promise.all([
    readFile(new URL("../public/teaching/instructor-manual/2.1/teaching-c0-n-star-instructor-manual.pdf", import.meta.url)),
    readFile(new URL("../output/pdf/teaching-c0-n-star-manual.pdf", import.meta.url)),
  ]);
  const digest = (value) => createHash("sha256").update(value).digest("hex");
  const expectedDigest = "d52f8ee5450e92ebfe1e9e52e37832c5eb32400e7bc387a79ea99184c1eb7dc6";
  assert.ok(publicManual.length > 4_000_000);
  assert.equal(digest(publicManual), expectedDigest);
  assert.equal(digest(releaseManual), expectedDigest);
});

test("ships an exact public copy of student textbook edition 1.0", async () => {
  const [publicTextbook, releaseTextbook] = await Promise.all([
    readFile(new URL("../public/teaching/student-textbook/1.0/learning-c0-n-star-student-textbook.pdf", import.meta.url)),
    readFile(new URL("../output/pdf/learning-c0-n-star-student-textbook.pdf", import.meta.url)),
  ]);
  const digest = (value) => createHash("sha256").update(value).digest("hex");
  const expectedDigest = "8d0ba2c9bfe55e99736c602c4607d7fe5d4c30dc8da422c12fb261d2d982d04f";
  assert.ok(publicTextbook.length > 2_500_000);
  assert.equal(digest(publicTextbook), expectedDigest);
  assert.equal(digest(releaseTextbook), expectedDigest);
});

test("uses the supplied five-color palette for the student textbook card", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.student-text-card \{ background: #fbe4aa; color: #601d1f; \}/);
  assert.match(css, /\.student-text-card > p \{ color: #3b2317; \}/);
  assert.match(css, /\.student-text-card \.course-text-meta \{ color: #8a5c39; \}/);
  assert.match(css, /border-top: 1px solid #aa9062/);
});

test("ships an exact public copy of the key-free student resource pack", async () => {
  const [publicPack, releasePack] = await Promise.all([
    readFile(new URL("../public/teaching/student-materials/2.1/c0-n-star-student-session-resource-pack.pdf", import.meta.url)),
    readFile(new URL("../output/pdf/c0-n-star-student-session-resource-pack.pdf", import.meta.url)),
  ]);
  const digest = (value) => createHash("sha256").update(value).digest("hex");
  const expectedDigest = "7a2020017f1d24600f3f82b06a0e6544a4c3f4a54646835dc7116b824dca34aa";
  assert.ok(publicPack.length > 600_000);
  assert.equal(digest(publicPack), expectedDigest);
  assert.equal(digest(releasePack), expectedDigest);
});

test("ships the Gemini-derived favicon assets", async () => {
  const [favicon, icon, apple] = await Promise.all([
    stat(new URL("../public/favicon.ico", import.meta.url)),
    stat(new URL("../public/icon.png", import.meta.url)),
    stat(new URL("../public/apple-touch-icon.png", import.meta.url)),
  ]);
  assert.ok(favicon.size > 1000);
  assert.ok(icon.size > 1000);
  assert.ok(apple.size > 1000);
});

test("ships the six companion paper PDFs", async () => {
  const files = await Promise.all([
    stat(new URL("../public/papers/where-is-the-conscious-subject.pdf", import.meta.url)),
    stat(new URL("../public/papers/consciousness-without-report.pdf", import.meta.url)),
    stat(new URL("../public/papers/indeterminacy-as-a-scientific-result.pdf", import.meta.url)),
    stat(new URL("../public/papers/from-phenomenal-presence-to-phenomenal-character.pdf", import.meta.url)),
    stat(new URL("../public/papers/ablating-n-star.pdf", import.meta.url)),
    stat(new URL("../public/papers/consciousness-in-the-schematic.pdf", import.meta.url)),
  ]);
  files.forEach((file) => assert.ok(file.size > 100_000));
});
