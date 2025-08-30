// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: 'localhost',
    port: 5173,
    proxy: {
      // Semua request ke /api akan diteruskan ke Django
      '/api': {
        target: 'http://localhost:8000',  // sesuaikan port Django-mu
        changeOrigin: true,
        secure: false
      }
    }
  }
})