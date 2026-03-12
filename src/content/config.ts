import { defineCollection, z } from 'astro:content';

const leistungen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  leistungen,
};
