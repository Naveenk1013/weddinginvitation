import sharp from "sharp";
import fs from "fs";
import path from "path";

const targetDir = path.resolve("public/images/tunnel");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/tilak_ceremony_1792936121022.jpg",
    dest: path.join(targetDir, "01-tilak.jpg"),
    name: "01-tilak.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/haldi_ceremony_1792937368889.jpg",
    dest: path.join(targetDir, "02-haldi.jpg"),
    name: "02-haldi.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/mehendi_ceremony_1792937391519.jpg",
    dest: path.join(targetDir, "03-mehendi.jpg"),
    name: "03-mehendi.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/sangeet_night_1792937420560.jpg",
    dest: path.join(targetDir, "04-sangeet.jpg"),
    name: "04-sangeet.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/varmala_ceremony_1792937450483.jpg",
    dest: path.join(targetDir, "05-varmala.jpg"),
    name: "05-varmala.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/saptapadi_phera_1792937476191.jpg",
    dest: path.join(targetDir, "06-phera.jpg"),
    name: "06-phera.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/sindoor_daan_1792937508586.jpg",
    dest: path.join(targetDir, "07-sindoor.jpg"),
    name: "07-sindoor.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/ashirwad_aarti_1792937540133.jpg",
    dest: path.join(targetDir, "08-ashirwad.jpg"),
    name: "08-ashirwad.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/vivah_ceremony_1792936154992.jpg",
    dest: path.join(targetDir, "09-vivah.jpg"),
    name: "09-vivah.jpg",
  },
];

console.log("Optimizing 9 wedding ceremony images to lightweight JPG...");
for (const img of images) {
  if (!fs.existsSync(img.src)) {
    console.error(`Missing source: ${img.src}`);
    continue;
  }
  await sharp(img.src)
    .resize({ width: 800, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(img.dest);

  const stats = fs.statSync(img.dest);
  console.log(`[OPTIMIZED] ${img.name}: ${(stats.size / 1024).toFixed(1)} KB`);
}
