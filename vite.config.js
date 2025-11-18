import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Help Vite resolve dependencies in Yarn PnP
      'react': 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom'
    }
  },
  optimizeDeps: {
    // Force pre-bundling of these dependencies
    include: ['react', 'react-dom', 'react-router-dom'],
    // Disable dependency scanning to avoid PnP issues
    force: true
  },
  server: {
    // Ensure proper file watching with Yarn PnP
    watch: {
      usePolling: true
    },
    port: 8080
  }
})
