// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// import remarkCodeBlocks from 'remark-code-blocks';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  markdown: {
    // remarkPlugins: [remarkCodeBlocks],
  },

  integrations: [mdx()]
});