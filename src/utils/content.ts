import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

/**
 * Sort items by date descending and slice to first N items
 */
export function sortAndSlice<T extends { data: { publishDate: Date } }>(
  items: T[],
  count: number,
): T[] {
  return items
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
    .slice(0, count);
}

/**
 * Get recent blog posts
 */
export async function getRecentBlogPosts(
  count: number = 3,
): Promise<CollectionEntry<"blog">[]> {
  const allPosts = await getCollection("blog");
  return sortAndSlice(allPosts, count);
}

/**
 * Get recent now updates
 */
export async function getRecentUpdates(
  count: number = 2,
): Promise<CollectionEntry<"now">[]> {
  const allNow = await getCollection("now");
  return sortAndSlice(allNow, count);
}

/**
 * Add blog URL prefix to posts from getCollection
 */
export function withBlogUrls(
  posts: CollectionEntry<"blog">[],
): Array<CollectionEntry<"blog"> & { slug: string }> {
  return posts.map((post) => ({ ...post, slug: `/blog/${post.slug}` }));
}
