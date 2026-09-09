// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import embeds from 'astro-embed/integration';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://patrickullrich.ca',
  // embeds() must run before mdx(): a bare x.com/.../status/... URL on its own
  // line in an .mdx post becomes a static, no-JS tweet card at build time.
  integrations: [embeds({ services: { LinkPreview: false } }), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
