import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  build: {
    outDir: 'dist',
    sourcemap: false, // Deshabilitamos sourcemaps en producción para mejor rendimiento
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['styled-components', 'framer-motion'],
          'vendor-utils': ['date-fns', 'react-intersection-observer'],
          'vendor-icons': ['react-icons', 'lucide-react', '@fortawesome/fontawesome-free']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    target: 'es2015',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 500
  },
  server: {
    port: 3000,
    host: true,
    cors: true,
    compression: true
  },
  preview: {
    port: 3000,
    host: true,
    cors: true,
    compression: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'framer-motion'
    ]
  }
})
