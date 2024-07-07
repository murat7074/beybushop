
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://elisishop.onrender.com',
        changeOrigin: true,
        secure: true, // HTTPS kullanılmasını sağlar
        credentials: 'include',
      },
    },
  },
})
