import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Use the '/api' prefix for all backend requests
      '/api': {
        target: 'http://localhost:3000', // Backend server URL
        changeOrigin: true,
        secure: false,
        // Optionally, rewrite the '/api' prefix in the request path
        // to the root '/' if your backend routes don't have the '/api' prefix
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
