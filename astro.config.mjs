import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import UnoCSS from "unocss/astro";
import compressor from "astro-compressor";
import preact from "@astrojs/preact";

import unocss from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://dbhattarai.info.np",
  integrations: [
    mdx(),
    compressor(),
    UnoCSS({
      // injectReset: true,
    }),
    preact({
      compat: true,
    }),
    unocss(),
  ],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: ["remark-gfm", "remark-smartypants"],
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService(),
  },
});
