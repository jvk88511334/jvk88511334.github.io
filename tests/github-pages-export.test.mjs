import assert from "node:assert/strict";
import { access, readFile, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = new URL("../", import.meta.url);
test("exporte un portfolio statique complet pour GitHub Pages", async () => {
  await rm(new URL("out", root), { recursive: true, force: true });

  const result = spawnSync("npm run build:pages", {
    cwd: root,
    encoding: "utf8",
    shell: true,
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL: "https://jvk88511334.github.io",
    },
  });

  assert.equal(
    result.status,
    0,
    `L'export GitHub Pages a échoué.\n${result.stdout}\n${result.stderr}`,
  );

  const html = await readFile(new URL("out/index.html", root), "utf8");
  assert.match(html, /<html[^>]*lang="fr"/i);
  assert.match(html, /Jérôme Villiseck/i);
  assert.match(html, /https:\/\/jvk88511334\.github\.io\/og\.png/i);

  await Promise.all([
    access(new URL("out/jerome-villiseck.jpg", root)),
    access(new URL("out/cv-jerome-villiseck-2026.pdf", root)),
    access(new URL("out/stack-technique-jerome-villiseck.pdf", root)),
    access(new URL("out/rapport-activite-2025-jerome-villiseck.pdf", root)),
    access(new URL("out/og.png", root)),
  ]);
});
