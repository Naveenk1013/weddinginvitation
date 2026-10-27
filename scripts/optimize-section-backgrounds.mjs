import sharp from "sharp";
import fs from "fs";
import path from "path";

const outDir = path.resolve("public/images/backgrounds");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/bg_ganesha_palace_1792991703295.jpg",
    dest: "01-ganesha-bg.jpg",
    width: 1080,
    quality: 80,
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/bg_couple_palace_1792991726366.jpg",
    dest: "02-couple-bg.jpg",
    width: 1080,
    quality: 80,
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/bg_invitation_scroll_1792991745804.jpg",
    dest: "03-invitation-bg.jpg",
    width: 1080,
    quality: 80,
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/bg_timeline_mandap_1792991773822.jpg",
    dest: "04-timeline-bg.jpg",
    width: 1080,
    quality: 80,
  },
  {
    src: "C:/Users/NAVEEN/.gemini/antigravity-ide/brain/fdc0d4f2-f7ef-4a6e-8115-d914ec28b4a3/bg_countdown_terrace_1792991800018.jpg",
    dest: "05-countdown-bg.jpg",
    width: 1080,
    quality: 80,
  },
];

for (const img of images) {
  const destPath = path.join(outDir, img.dest);
  await sharp(img.src)
    .resize({ width: img.width, withoutEnlargement: true })
    .jpeg({ quality: img.quality, mozjpeg: true })
    .toFile(destPath);
  
  const stats = fs.statSync(destPath);
  console.log(`[OPTIMIZED] ${img.dest}: ${(stats.size / 1024).toFixed(1)} KB`);
}

console.log("All royal backgrounds optimized successfully!");
