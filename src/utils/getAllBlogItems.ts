import { getCollection } from "astro:content";

export async function getAllBlogItems() {
  const blogs = await getCollection("blog");

  return blogs
    .map((blog) => {
      return { ...blog, slug: `/blog/${blog.slug}` };
    })
    .sort((a, b) => {
      return new Date(b.data.publishDate) - new Date(a.data.publishDate);
    });
}
