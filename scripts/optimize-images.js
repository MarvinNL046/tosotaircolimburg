import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

const imageConfig = {
  quality: 85,
  maxWidth: 800,
  formats: ['webp', 'jpeg']
};

async function optimizeImage(inputPath, filename) {
  const name = path.parse(filename).name;
  
  // Create output directory if it doesn't exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Get original image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`Processing ${filename}: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024 / 1024).toFixed(2)}MB`);
  
  // Generate multiple sizes for srcset
  const sizes = [
    { suffix: '-sm', width: 400 },
    { suffix: '-md', width: 600 },
    { suffix: '-lg', width: 800 },
    { suffix: '-xl', width: 1200 }
  ];
  
  for (const format of imageConfig.formats) {
    for (const size of sizes) {
      const outputPath = path.join(OUTPUT_DIR, `${name}${size.suffix}.${format}`);
      
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFormat(format, {
          quality: imageConfig.quality,
          effort: 6
        })
        .toFile(outputPath);
      
      const stats = await fs.stat(outputPath);
      console.log(`  Created ${name}${size.suffix}.${format}: ${(stats.size / 1024).toFixed(0)}KB`);
    }
  }
  
  // Create a standard optimized version
  const standardPath = path.join(IMAGES_DIR, filename);
  await sharp(inputPath)
    .resize(imageConfig.maxWidth, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: imageConfig.quality })
    .toFile(standardPath + '.optimized');
  
  // Replace original with optimized version
  await fs.rename(standardPath + '.optimized', standardPath);
  
  const finalStats = await fs.stat(standardPath);
  console.log(`  Final ${filename}: ${(finalStats.size / 1024).toFixed(0)}KB\n`);
}

async function main() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('optimized')
    );
    
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(IMAGES_DIR, file);
      await optimizeImage(inputPath, file);
    }
    
    console.log('✓ Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

main();