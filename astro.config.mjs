// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  redirects: {
    '/producto/la-nueva-violencia-moderna': '/producto',
    '/producto/la-nueva-violencia-moderna/': '/producto',
  },
});
