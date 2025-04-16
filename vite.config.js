import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      },
    },
    assetsInlineLimit: 0, // Prevents Vite from inlining small files
  }
});
