import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import compressor from "astro-compressor";
import preact from "@astrojs/preact";
import { modifiedTime } from "./src/utils/remarkLastModified";
import svelte from "@astrojs/svelte";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";
import tailwindcss from "@tailwindcss/postcss";

// https://astro.build/config
export default defineConfig({
  site: "https://dbhattarai.info.np",
  integrations: [
    mdx(),
    compressor(),
    preact({
      compat: true,
    }),
    svelte(),
  ],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: [remarkGfm, remarkSmartypants, modifiedTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
});
