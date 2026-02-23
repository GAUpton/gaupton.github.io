import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    startDate: z.date(),
    url: z.string().url().optional(),
  }),
});
const editing = defineCollection({
  schema: z.object({
    role: z.string(),
    publication: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    url: z.string().url().optional(),
  }),
});
const commercial = defineCollection({
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    startDate: z.date(),
    url: z.string().url().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { writing, editing, commercial, pages };
