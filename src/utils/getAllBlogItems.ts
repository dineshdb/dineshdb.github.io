import { getCollection } from "astro:content";

export async function getAllBlogItems() {
  const tils = await getCollection("til");
  const blogs = await getCollection("blog");

  const allPosts = [
    ...blogs.map((blog) => {
      return { ...blog, slug: `/blog/${blog.slug}` };
    }),
    ...tils.map((til) => {
      return {
        ...til,
        slug: `/TIL/${til.slug}`,
        data: {
          ...til.data,
          tags: [...til.data.tags, "TIL"],
        },
      };
    }),
  ].sort((a, b) => {
    return new Date(b.data.publishDate) - new Date(a.data.publishDate);
  });

  return allPosts;
}
