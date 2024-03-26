import { defineConfig } from 'vite';
import symfonyPlugin from 'vite-plugin-symfony';

export default defineConfig({
  plugins: [
    symfonyPlugin({
      stimulus: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        app: './assets/app.js',
      },
    },
  },
});
