import { defineCollection, z } from 'astro:content';

const diarySchema = z.object({
  title: z.string(),
  date: z.string().or(z.date()).transform((val) => new Date(val)),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

const otherDocsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().or(z.date()).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
});

const citationsSchema = z.object({
  title: z.string(),
  quote: z.string(),
  authors: z.array(z.string()),
  source: z.string(),
  doi: z.string().optional(),
  url: z.string().url().optional(),
  tags: z.array(z.string()),
  year: z.number().optional(),
  publicationType: z.enum(['journal', 'conference', 'book', 'report', 'blog', 'news']).optional(),
  verified: z.boolean().default(false),
});

const docsCollection = defineCollection({
  schema: ({ id }) => {
    if (id.startsWith('diario/diary/')) {
      return diarySchema;
    }
    return otherDocsSchema;
  }
});

const citationsCollection = defineCollection({
  schema: citationsSchema,
});

export const collections = {
  docs: docsCollection,
  citations: citationsCollection,
};
