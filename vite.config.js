import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: 'src/main.js',
      output: {
        entryFileNames: 'main.js',
      },
    },
  },
  plugins: [cssInjectedByJsPlugin(), vue()],
});
