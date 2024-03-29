import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import presetWind from "@unocss/preset-wind";
import compressor from "astro-compressor";
import preact from "@astrojs/preact";
import unocss from "@unocss/astro";
import presetAttributify from "@unocss/preset-attributify";
import { modifiedTime } from "./src/utils/remarkLastModified";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://dbhattarai.info.np",
  integrations: [
    mdx(),
    compressor(),
    preact({
      compat: true,
    }),
    unocss({
      presets: [presetWind(), presetAttributify()],
    }),
    svelte(),
  ],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: ["remark-gfm", "remark-smartypants", modifiedTime],
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
});
