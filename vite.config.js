import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@scripts': resolve(__dirname, './src/scripts'),
      '@components': resolve(__dirname, './src/scripts/components'),
      '@util': resolve(__dirname, './src/scripts/util'),
      '@styles': resolve(__dirname, './src/styles'),
    },
  },
});
