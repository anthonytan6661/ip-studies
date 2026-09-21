import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load cleanly on GitHub Pages or local preview
  server: {
    port: 5173,
    host: true, // Allows access from mobile phone via local WiFi IP (e.g. 192.168.x.x:5173)
    open: true
  }
});
