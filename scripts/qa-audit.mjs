// Automated QA Audit Script for Rachna & Udit Wedding Invitation

// 1. WCAG 2.2 Relative Luminance and Contrast Ratio Calculation
function getLuminance(hex) {
  const rgb = hex.replace("#", "").match(/.{2}/g).map((x) => parseInt(x, 16) / 255);
  const a = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const colors = {
  bg: "#FFF8ED",
  surface: "#FFFDF8",
  ink: "#2A1713",
  muted: "#6B5149",
  maroon: "#6E1E2A",
  saffron: "#C85A16",
  gold: "#B07A22",
  white: "#FFFFFF",
};

console.log("=== 1. WCAG 2.2 CONTRAST AUDIT ===");
const pairs = [
  { name: "Ink on Background (Normal Body Text)", fg: colors.ink, bg: colors.bg, min: 4.5 },
  { name: "Ink on Surface (Card Body Text)", fg: colors.ink, bg: colors.surface, min: 4.5 },
  { name: "Maroon on Background (Headings & Invocation)", fg: colors.maroon, bg: colors.bg, min: 3.0 },
  { name: "Maroon on Surface (Card Titles)", fg: colors.maroon, bg: colors.surface, min: 3.0 },
  { name: "Muted on Background (Secondary Text)", fg: colors.muted, bg: colors.bg, min: 4.5 },
  { name: "White on Maroon (Primary Button & Active Lang)", fg: colors.white, bg: colors.maroon, min: 4.5 },
];

let contrastFailures = 0;
for (const p of pairs) {
  const ratio = getContrastRatio(p.fg, p.bg);
  const passed = ratio >= p.min;
  console.log(
    `[${passed ? "PASS" : "FAIL"}] ${p.name}: ${ratio.toFixed(2)}:1 (Required: >= ${p.min}:1)`
  );
  if (!passed) contrastFailures++;
}

// 2. Confirmed Dates & Wednesday Assertion
console.log("\n=== 2. DATE & WEDNESDAY ASSERTION ===");
const tilak = new Date("2026-11-25T12:00:00Z");
const vivah = new Date("2026-12-02T12:00:00Z");

const tilakDay = tilak.getUTCDay(); // 3 = Wednesday
const vivahDay = vivah.getUTCDay(); // 3 = Wednesday

const d1Pass = tilakDay === 3;
const d2Pass = vivahDay === 3;

console.log(`[${d1Pass ? "PASS" : "FAIL"}] शुभ तिलक 2026-11-25 is Wednesday (Day ${tilakDay})`);
console.log(`[${d2Pass ? "PASS" : "FAIL"}] शुभ विवाह 2026-12-02 is Wednesday (Day ${vivahDay})`);

// 3. Bilingual Dictionaries Parity
console.log("\n=== 3. DICTIONARY PARITY AUDIT ===");
const { hi } = await import("../src/i18n/hi.js").catch(async () => await import("../src/i18n/hi.ts"));
const { en } = await import("../src/i18n/en.js").catch(async () => await import("../src/i18n/en.ts"));

function checkKeys(obj1, obj2, prefix = "") {
  let missing = [];
  for (const key of Object.keys(obj1)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (obj2[key] === undefined) {
      missing.push(fullKey);
    } else if (typeof obj1[key] === "object" && obj1[key] !== null) {
      missing = missing.concat(checkKeys(obj1[key], obj2[key], fullKey));
    }
  }
  return missing;
}

const missingInEn = checkKeys(hi, en);
const missingInHi = checkKeys(en, hi);

console.log(
  `[${missingInEn.length === 0 ? "PASS" : "WARN"}] Missing keys in English: ${missingInEn.length === 0 ? "None" : missingInEn.join(", ")}`
);
console.log(
  `[${missingInHi.length === 0 ? "PASS" : "WARN"}] Missing keys in Hindi: ${missingInHi.length === 0 ? "None" : missingInHi.join(", ")}`
);

// 4. Server HTML Semantic Landmark & Content Audit
console.log("\n=== 4. LIVE HTML & SEMANTIC AUDIT ===");
try {
  let html = "";
  const ports = [process.env.PORT, 3000, 3001].filter(Boolean);
  for (const port of ports) {
    try {
      const res = await fetch(`http://localhost:${port}`);
      if (res.ok) {
        html = await res.text();
        console.log(`[INFO] Connected to dev server on port ${port}`);
        break;
      }
    } catch {}
  }
  if (!html) throw new Error("Could not connect to dev server on ports: " + ports.join(", "));

  const checks = [
    { name: "Opening Invocation (॥ श्री गणेशाय नमः ॥)", test: html.includes("॥ श्री गणेशाय नमः ॥") },
    { name: "Couple Name Bride (रचना)", test: html.includes("रचना") },
    { name: "Couple Name Groom (उदित)", test: html.includes("उदित") },
    { name: "Ceremony Heading (सप्रेम आमंत्रण)", test: html.includes("सप्रेम आमंत्रण") },
    { name: "Shubh Tilak Event (शुभ तिलक)", test: html.includes("शुभ तिलक") },
    { name: "Shubh Vivah Event (शुभ विवाह)", test: html.includes("शुभ विवाह") },
    { name: "Tilak Date (25 नवंबर 2026)", test: html.includes("25 नवंबर 2026") },
    { name: "Vivah Date (2 दिसंबर 2026)", test: html.includes("2 दिसंबर 2026") },
    { name: "Skip to Content Link", test: html.includes('class="skip-link"') },
    { name: "Semantic <header> landmark", test: html.includes("<header") },
    { name: "Semantic <main> landmark", test: html.includes("<main") },
    { name: "Semantic <footer> landmark", test: html.includes("<footer") },
    { name: "Semantic <h1> couple names", test: html.includes("<h1") },
    { name: "Language Switcher Buttons", test: html.includes('aria-pressed="true"') },
    { name: "ARIA Live Polite Region", test: html.includes('aria-live="polite"') },
    { name: "Safe Area Viewport Meta", test: html.includes("viewport-fit=cover") },
  ];

  let htmlFailures = 0;
  for (const c of checks) {
    console.log(`[${c.test ? "PASS" : "FAIL"}] ${c.name}`);
    if (!c.test) htmlFailures++;
  }

  console.log("\n=== SUMMARY ===");
  if (contrastFailures === 0 && d1Pass && d2Pass && htmlFailures === 0) {
    console.log("ALL PHASE 4 QA AUDIT CHECKS PASSED SUCCESSFULLY!");
  } else {
    console.log(`Audits completed with ${contrastFailures + htmlFailures} warnings/failures.`);
  }
} catch (err) {
  console.error("Local server fetch failed:", err);
}
