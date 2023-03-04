// https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from "astro:content";

const eventCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

const contributorCollection = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
  contributors: contributorCollection,
};
