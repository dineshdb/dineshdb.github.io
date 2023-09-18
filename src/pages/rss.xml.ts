import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import {SITE_DESCRIPTION, SITE_TITLE} from "../consts"

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      categories: post.data.tags,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
