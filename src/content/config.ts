import { defineCollection, reference, z } from "astro:content";
const blog = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
    author: reference("authors"),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  }),
});

export const collections = {
  blog,
  authors,
};
