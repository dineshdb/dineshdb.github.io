import { defineCollection, reference, z } from "astro:content";
const blog = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
    author: reference("authors"),
    source: z
      .object({
        title: z.string(),
        href: z.string(),
        image: z.string().optional(),
      })
      .optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  }),
});

const now = defineCollection({
  type: "content",
  schema: z.object({
    type: z
      .enum([
        "location",
        "thought",
        "mood",
        "work",
        "learning",
        "goal",
        "default",
      ])
      .default("default"),
    title: z.string().optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    location: z.string().optional(),
    status: z.enum(["current", "past"]).default("past"),
  }),
});

export const collections = {
  blog,
  authors,
  now,
};
