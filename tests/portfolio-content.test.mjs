import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const dataPath = new URL("../app/portfolio-data.ts", import.meta.url);
const pagePath = new URL("../app/page.tsx", import.meta.url);
test("le contenu présente le positionnement et les cinq réalisations", async () => {
  const source = await readFile(dataPath, "utf8");
  for (const expected of [
    "Développeur full-stack",
    "Responsable d'application",
    "ITEM",
    "Périscope",
    "QualiMarc",
    "theses.fr",
    "Licences nationales",
  ]) {
    assert.match(source, new RegExp(expected.replace(".", "\\."), "u"));
  }
});

test("les coordonnées validées et les liens publics sont présents", async () => {
  const source = await readFile(dataPath, "utf8");
  assert.match(source, /12 rue Andy Warhol/u);
  assert.match(source, /06\.50\.37\.33\.88/u);
  assert.match(source, /jerome\.pro@monemail\.com/u);
  assert.match(source, /https:\/\/item\.sudoc\.fr/u);
  assert.match(source, /https:\/\/periscope\.sudoc\.fr/u);
  assert.match(source, /https:\/\/qualimarc\.sudoc\.fr/u);
  assert.match(source, /https:\/\/theses\.fr/u);
  assert.match(source, /https:\/\/www\.licencesnationales\.fr/u);
});

test("les scripts npm restent exécutables sous Windows", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );
  for (const scriptName of ["dev", "build", "start"]) {
    assert.doesNotMatch(
      packageJson.scripts[scriptName],
      /^WRANGLER_LOG_PATH=/u,
    );
  }
});

test("la page contient les repères sémantiques et les alternatives", async () => {
  const source = await readFile(pagePath, "utf8");
  assert.match(source, /<main/u);
  assert.match(source, /<nav/u);
  assert.match(source, /alt="Portrait de Jérôme Villiseck"/u);
  assert.match(source, /href="#realisations"/u);
  assert.match(source, /href="#parcours"/u);
  assert.match(source, /href="#contact"/u);
});

test("la page propose le CV et des liens de contact directs", async () => {
  const source = await readFile(pagePath, "utf8");
  assert.match(source, /cv-jerome-villiseck-2026\.pdf/u);
  assert.match(source, /mailto:/u);
  assert.match(source, /tel:/u);
  assert.match(source, /rel="noreferrer"/u);
});

test("les styles couvrent le focus, le mobile et la réduction des mouvements", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /:focus-visible/u);
  assert.match(css, /@media \(max-width:/u);
  assert.match(css, /prefers-reduced-motion: reduce/u);
});

test("les métadonnées sociales utilisent la carte du portfolio", async () => {
  const layout = await readFile(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );
  assert.match(layout, /og\.png/u);
  assert.match(layout, /Développeur full-stack/u);
  assert.match(layout, /summary_large_image/u);
});

test("le portrait utilise directement la ressource statique", async () => {
  const source = await readFile(pagePath, "utf8");
  assert.doesNotMatch(source, /from "next\/image"/u);
  assert.match(source, /<img/u);
  assert.match(source, /src="\/jerome-villiseck\.jpg"/u);
});
