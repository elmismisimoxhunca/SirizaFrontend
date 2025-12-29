// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'ignore',
  redirects: {
    '/producto/la-nueva-violencia-moderna': {
      status: 301,
      destination: '/producto'
    },
  },
});
