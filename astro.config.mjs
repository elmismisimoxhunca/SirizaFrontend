// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['@astrojs/tailwind']
          }
        }
      }
    },
    ssr: {
      external: ['sharp']
    }
  }
});
