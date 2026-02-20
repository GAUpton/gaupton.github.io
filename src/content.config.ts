import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing/' }),
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    startDate: z.date(),
    url: z.string().url().optional(),
  }),
});
const editing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/editing/' }),
  schema: z.object({
    role: z.string(),
    publication: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    url: z.string().url().optional(),
  }),
});
const commercial = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/commercial/' }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    startDate: z.date(),
    url: z.string().url().optional(),
  }),
});

export const collections = { writing, editing, commercial };
