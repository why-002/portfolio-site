import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://wyattr.dev',

  vite: {
    css: {
      devSourcemap: true,
      lightningcss: true
    },

    plugins: [tailwindcss()]
  },

  integrations: [playformCompress()]
});
