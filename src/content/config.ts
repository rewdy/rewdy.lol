import { defineCollection, z } from "astro:content";

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: blogPostSchema,
});

export const collections = { blog };
