// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stitch.vethariel.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // Evita prebundle de jsx-dev-runtime en modo production (jsxDEV = undefined → crash en islands).
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
  },
});
