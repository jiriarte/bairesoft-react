const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const QUALITY = 85;
const MAX_WIDTH = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    // Redimensionar la imagen si es necesario
    const metadata = await sharp(inputPath).metadata();
    let pipeline = sharp(inputPath);

    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Crear directorio de salida si no existe
    const outputDir = path.dirname(outputPath);
    await fs.mkdir(outputDir, { recursive: true });

    // Optimizar según el formato
    if (path.extname(inputPath).toLowerCase() === '.jpg' || 
        path.extname(inputPath).toLowerCase() === '.jpeg') {
      await pipeline
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    } else if (path.extname(inputPath).toLowerCase() === '.png') {
      await pipeline
        .png({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    }

    // Comprimir aún más con imagemin
    await imagemin([outputPath], {
      destination: path.dirname(outputPath),
      plugins: [
        imageminMozjpeg({ quality: QUALITY }),
        imageminPngquant({
          quality: [QUALITY/100, 0.9],
          speed: 4
        })
      ]
    });

    console.log(\`✅ Optimized: \${path.basename(inputPath)}\`);
  } catch (error) {
    console.error(\`❌ Error optimizing \${inputPath}:\`, error);
  }
}

async function processDirectory(inputDir, outputDir) {
  try {
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const stat = await fs.stat(inputPath);
      
      if (stat.isDirectory()) {
        await processDirectory(
          inputPath,
          path.join(outputDir, file)
        );
      } else if (['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
        const outputPath = path.join(outputDir, file);
        await optimizeImage(inputPath, outputPath);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

// Directorios de entrada y salida
const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images-optimized');

// Iniciar optimización
(async () => {
  console.log('🚀 Starting image optimization...');
  await processDirectory(INPUT_DIR, OUTPUT_DIR);
  console.log('✨ Image optimization complete!');
})();
