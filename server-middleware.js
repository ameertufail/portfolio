// Server middleware to fix MIME type issues with 3D model files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// MIME type map for different file extensions
const MIME_TYPES = {
  '.gltf': 'model/gltf+json',
  '.glb': 'model/gltf-binary',
  '.bin': 'application/octet-stream',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

/**
 * Middleware function to handle MIME types
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next middleware
 */
export function fixMimeTypes(req, res, next) {
  if (req.url) {
    const ext = path.extname(req.url).toLowerCase();
    
    // Check if we have a MIME type mapping for this extension
    if (MIME_TYPES[ext]) {
      console.log(`Setting MIME type for ${req.url} to ${MIME_TYPES[ext]}`);
      res.setHeader('Content-Type', MIME_TYPES[ext]);
      
      // For 3D model files, also set cache control headers
      if (['.gltf', '.glb', '.bin'].includes(ext)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    }
  }
  
  next();
}

/**
 * Check and fix GLTF files by ensuring they reference the correct binary file
 * @param {string} publicDir - Path to the public directory
 */
export function checkAndFixGltfFiles(publicDir) {
  try {
    // List of directories containing 3D models
    const modelDirs = ['desktop_pc', 'planet'];
    
    for (const dir of modelDirs) {
      const dirPath = path.join(publicDir, dir);
      if (!fs.existsSync(dirPath)) {
        console.warn(`Model directory not found: ${dirPath}`);
        continue;
      }
      
      const gltfPath = path.join(dirPath, 'scene.gltf');
      if (!fs.existsSync(gltfPath)) {
        console.warn(`GLTF file not found: ${gltfPath}`);
        continue;
      }
      
      // Read and parse the GLTF file
      let gltfContent;
      try {
        gltfContent = fs.readFileSync(gltfPath, 'utf8');
        const gltf = JSON.parse(gltfContent);
        
        // Check if we need to fix the buffers
        let modified = false;
        
        if (gltf.buffers && Array.isArray(gltf.buffers)) {
          for (let i = 0; i < gltf.buffers.length; i++) {
            const buffer = gltf.buffers[i];
            
            if (buffer.uri && buffer.uri !== 'scene.bin' && !buffer.uri.startsWith('data:')) {
              console.log(`Fixing buffer URI in ${gltfPath}: ${buffer.uri} -> scene.bin`);
              
              // Create a backup of the original file
              const backupPath = `${gltfPath}.backup`;
              if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(gltfPath, backupPath);
                console.log(`Created backup: ${backupPath}`);
              }
              
              // Fix the URI
              gltf.buffers[i].uri = 'scene.bin';
              modified = true;
            }
          }
        }
        
        // Save the modified file
        if (modified) {
          fs.writeFileSync(gltfPath, JSON.stringify(gltf, null, 2));
          console.log(`Updated GLTF file: ${gltfPath}`);
        }
      } catch (error) {
        console.error(`Error processing GLTF file ${gltfPath}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error checking GLTF files: ${error.message}`);
  }
} 