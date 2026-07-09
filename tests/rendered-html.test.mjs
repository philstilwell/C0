import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /Make the model move/);
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
