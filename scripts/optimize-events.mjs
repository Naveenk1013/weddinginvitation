import sharp from "sharp";
import fs from "fs";
import path from "path";

const targetDir = path.resolve("public/images/events");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/tilak_ceremony_1792936121022.jpg",
    dest: path.join(targetDir, "tilak.jpg"),
    name: "tilak.jpg",
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/vivah_ceremony_1792936154992.jpg",
    dest: path.join(targetDir, "vivah.jpg"),
    name: "vivah.jpg",
  },
];

for (const img of images) {
  if (!fs.existsSync(img.src)) {
    console.error(`Source not found: ${img.src}`);
    continue;
  }
  // Resize to max width 960px and optimize to JPEG at quality 80 for very low file size
  await sharp(img.src)
    .resize({ width: 960, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(img.dest);

  const stats = fs.statSync(img.dest);
  console.log(`[OPTIMIZED] ${img.name}: ${(stats.size / 1024).toFixed(1)} KB at ${img.dest}`);
}
