import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';

const assetsDir = './public/assets';

async function convertToAvif() {
  try {
    const files = await readdir(assetsDir);
    const imageFiles = files.filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));
    
    for (const file of imageFiles) {
      const inputPath = join(assetsDir, file);
      const { name } = parse(file);
      const outputPath = join(assetsDir, `${name}.avif`);
      
      console.log(`Converting ${file} to AVIF...`);
      
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Created ${name}.avif`);
    }
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

convertToAvif();
