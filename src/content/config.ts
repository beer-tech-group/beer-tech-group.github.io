// https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from "astro:content";

const eventCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    address: z.string(),
    location: z.string(),
    locationLink: z.string().optional(),
    date: z.string(),
    mode: z.enum(["In person", "Virtual"]),
    type: z.enum(["Conference", "Tech Talk", "Workshop", "Networking"]),
    speakers: z.array(z.string()).optional(),
    mentors: z.array(z.string()).optional(),
    sponsors: z.array(z.string()).optional(),
    invitationLink: z.string().optional(),
    participants: z.union([z.string(), z.number()]).optional(),
    soldout: z.boolean().optional(),
    tags: z.array(z.string()),
    permalink: z.string(),
  }),
});

const contributorCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    business: z.string().optional(),
    image: z.string(),
    permalink: z.string(),
  }),
});

const sponsorCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    url: z.string(),
    permalink: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
  contributors: contributorCollection,
  sponsors: sponsorCollection,
};
