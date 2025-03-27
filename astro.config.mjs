import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  output: 'static',
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});