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

const docsCollection = defineCollection({
  schema: ({ id }) => {
    if (id.startsWith('diario/diary/')) {
      return diarySchema;
    }
    return otherDocsSchema;
  }
});

export const collections = {
  docs: docsCollection
};
