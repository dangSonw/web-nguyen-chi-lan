import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'chrome90',
    cssTarget: 'chrome90'
  },
  server: {
    port: 5177,
    open: false
  },
  preview: {
    port: 5177
  }
});

