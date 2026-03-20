import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // Vendor chunk for core dependencies
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/@tanstack')) {
            return 'vendor'
          }
          // Route-level chunks (automatic via dynamic imports)
          if (id.includes('/routes/')) {
            return 'routes'
          }
        },
      },
    },
    // Enable code splitting for better route-level separation
    cssCodeSplit: true,
    minify: 'terser',
    sourcemap: false,
  },
})
