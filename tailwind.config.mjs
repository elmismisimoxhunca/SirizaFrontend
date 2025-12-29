/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gold': '#d4a847',
        'gold-light': '#e8c876',
        'ink': '#0d0d0f',
        'ink-light': '#1a1a1f',
        'cream': '#faf7f2',
      },
      fontFamily: {
        'display': ['EB Garamond', 'serif'],
        'body': ['Spectral', 'serif'],
      },
    },
  },
  plugins: [],
}
