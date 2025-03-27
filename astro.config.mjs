import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";
import awsAmplify from 'astro-aws-amplify';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  output: 'server',
  adapter: awsAmplify(),
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});