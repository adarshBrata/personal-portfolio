import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";
import { fileURLToPath, URL } from 'url';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  output: 'server',

  adapter: node({
    mode: "standalone"
  }),

  experimental: {
    svg: true,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
});