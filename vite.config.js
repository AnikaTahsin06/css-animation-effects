import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/css-animation-effects/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        animatedScroll: resolve(__dirname, 'pages/animated-scroll.html')
        // Add more pages as needed
      }
    }
  }
});
