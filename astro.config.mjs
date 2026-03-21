// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: your custom domain — Astro uses this to generate correct URLs
  site: 'https://meganbarker.ca',

  vite: {
    plugins: [tailwindcss()]
  }
});