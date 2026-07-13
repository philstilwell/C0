import assert from "node:assert/strict";
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

test("server-renders the six-paper research constellation", async () => {
  const response = await render("/constellation/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /One core claim/);
  assert.match(html, /Five ways to take it further/);
  assert.match(html, /Where Is the Conscious Subject/);
  assert.match(html, /Consciousness Without Report/);
  assert.match(html, /Indeterminacy as a Scientific Result/);
  assert.match(html, /From Phenomenal Presence to Phenomenal Character/);
  assert.match(html, /Cø as N\*/);
  assert.match(html, /Ablating N\*: Does Every Conjunct Earn Its Place/);
  assert.match(html, /philpapers\.org\/rec\/STIANW/);
  assert.match(html, /papers\/where-is-the-conscious-subject\.pdf/);
  assert.match(html, /THE EXPLANATION/);
  assert.match(html, /The paper begins by narrowing the explanandum/);
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

test("ships the five companion paper PDFs", async () => {
  const files = await Promise.all([
    stat(new URL("../public/papers/where-is-the-conscious-subject.pdf", import.meta.url)),
    stat(new URL("../public/papers/consciousness-without-report.pdf", import.meta.url)),
    stat(new URL("../public/papers/indeterminacy-as-a-scientific-result.pdf", import.meta.url)),
    stat(new URL("../public/papers/from-phenomenal-presence-to-phenomenal-character.pdf", import.meta.url)),
    stat(new URL("../public/papers/ablating-n-star.pdf", import.meta.url)),
  ]);
  files.forEach((file) => assert.ok(file.size > 100_000));
});
