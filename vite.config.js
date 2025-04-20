import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { fixMimeTypes, checkAndFixGltfFiles } from './server-middleware.js'

// Get the current directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.resolve(__dirname, 'public')

// Check and fix GLTF files before starting the server
console.log('Checking 3D model files...')
// We'll do the file checking in the middleware instead of during config loading
// to avoid dynamic fs require issues

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        // Use our middleware to fix MIME types
        server.middlewares.use(fixMimeTypes);
        
        // Run the GLTF file check when the server starts
        server.httpServer.once('listening', () => {
          console.log('Server started, checking 3D model files...')
          checkAndFixGltfFiles(publicDir)
        })
        
        // Existing middleware for CORS and other headers
        server.middlewares.use((req, res, next) => {
          // Set CORS headers
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          
          // Move to next middleware
          next();
        });
      }
    },
  ],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'X-Content-Type-Options': 'nosniff'
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    },
  },
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.bin'],
  resolve: {
    alias: {
      // Make sure Three.js can properly load the models
      'three': 'three',
    }
  },
  optimizeDeps: {
    include: ['three'],
  },
  base: '/portfolio/',
})
