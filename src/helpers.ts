import { getCollection, type CollectionEntry } from "astro:content";
/**
 * Wrapper around Astro getCollection that sorts and
 * filters the blog posts in a consistent way.
 */
export const getPublishedBlogPosts = async () => {
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);

  // sort so we can make prev/next links
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};
