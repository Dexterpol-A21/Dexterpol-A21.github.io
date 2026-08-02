/**
 * Captura el hero de cada proyecto en desktop (Muro) y móvil (Archivo).
 *
 * Uso:
 *   npx playwright install chromium   # una vez
 *   npm run capture:heroes
 *
 * Salida:
 *   public/img/projects/{slug}-desktop.png
 *   public/img/projects/{slug}-mobile.png
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/img/projects");

/** Viewports: desktop = Muro, mobile = Archivo (iPhone 16 Pro Max logical) */
const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 440, height: 956 }; // iPhone 16 Pro Max CSS viewport

const SKIP_HOSTS = [];

/** Misma lista que index.astro (solo lo necesario para capturar) */
const PROJECTS = [
  { title: "GoodScribe", link: "https://goodscribe.org" },
  { title: "Gabis", link: "https://gabis.com.mx" },
  { title: "NoProb", link: "https://noprobsystems.com" },
  { title: "Doctor en Casa", link: "https://www.doctorencasa.org" },
  { title: "Barberia 99", link: "https://barberia99.com" },
  { title: "TotalLCard", link: "https://totallcard.pages.dev" },
  {
    title: "Utrilla Contract",
    link: "https://astronautical-ascension.utrillaprojects.workers.dev/es/",
    waitMs: 8000, // videos en hero
  },
  { title: "Aurelia Concierge", link: "https://macau-sauna.pages.dev" },
  { title: "1decien", link: "https://1decien-astro.pages.dev" },
  { title: "Unicornio Azul", link: "https://unicornioazul.es" },
  { title: "Vyroba Wood", link: "https://vyroba-wood-web.pages.dev" },
];

function slugify(title) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function shouldSkip(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return SKIP_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return true;
  }
}

async function dismissNoise(page) {
  const candidates = [
    'button:has-text("Aceptar")',
    'button:has-text("Accept")',
    'button:has-text("Accept All")',
    'button:has-text("Aceptar Todo")',
    'button:has-text("Agree")',
    'button:has-text("Got it")',
    'button:has-text("Entendido")',
    '[aria-label="Close"]',
    '[aria-label="Cerrar"]',
  ];
  for (const sel of candidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 400 })) {
        await el.click({ timeout: 800 });
      }
    } catch {
      /* ignore */
    }
  }
}

async function captureHero(page, outPath, { allowAnimations = false } = {}) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: outPath,
    type: "png",
    fullPage: false,
    animations: allowAnimations ? "allow" : "disabled",
  });
}

async function shoot(project, context, viewport, suffix) {
  const slug = slugify(project.title);
  const outPath = path.join(OUT_DIR, `${slug}-${suffix}.png`);
  const page = await context.newPage();
  const settleMs = project.waitMs ?? 1800;

  try {
    await page.setViewportSize(viewport);
    const res = await page.goto(project.link, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    if (!res || !res.ok()) {
      console.warn(`  ! ${project.title} [${suffix}] HTTP ${res?.status() ?? "n/a"}`);
    }
    await page.waitForTimeout(settleMs);
    await dismissNoise(page);
    await page.waitForTimeout(project.waitMs ? 400 : 600);
    await captureHero(page, outPath, { allowAnimations: Boolean(project.waitMs) });
    console.log(`  ✓ ${slug}-${suffix}.png (wait ${settleMs}ms)`);
  } catch (err) {
    console.error(`  ✗ ${project.title} [${suffix}]: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.slice("--only=".length).toLowerCase() : null;

  const browser = await chromium.launch({ headless: true });
  const hasVideoWaits = PROJECTS.some((p) => p.waitMs);
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    locale: "es-MX",
    ...(hasVideoWaits ? {} : { reducedMotion: "reduce" }),
  });

  const targets = PROJECTS.filter((p) => {
    if (!p.link || p.link === "#") return false;
    if (shouldSkip(p.link)) {
      console.log(`  – skip ${p.title} (${new URL(p.link).hostname})`);
      return false;
    }
    if (only && !slugify(p.title).includes(only) && !p.title.toLowerCase().includes(only)) {
      return false;
    }
    return true;
  });

  console.log(`Capturando ${targets.length} proyectos → ${OUT_DIR}\n`);

  for (const project of targets) {
    console.log(`→ ${project.title}`);
    await shoot(project, context, DESKTOP, "desktop");
    await shoot(project, context, MOBILE, "mobile");
  }

  await browser.close();
  console.log("\nListo. Usa imageDesktop / imageMobile en index.astro:");
  for (const p of targets) {
    const slug = slugify(p.title);
    console.log(
      `  ${p.title}: desktop=/img/projects/${slug}-desktop.png mobile=/img/projects/${slug}-mobile.png`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
