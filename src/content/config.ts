import { defineCollection, z } from 'astro:content';

const packagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    nights: z.number(),
    price: z.number(),
    currency: z.string().default('EGP'),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    included: z.array(z.string()),
    notIncluded: z.array(z.string()).optional(),
    itinerary: z.array(z.object({
      day: z.number(),
      title: z.string(),
      description: z.string(),
    })),
    featured: z.boolean().default(false),
    category: z.enum(['short', 'medium', 'long', 'cruise', 'group']),
    order: z.number().default(0),
  }),
});

const cruisesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    nights: z.number(),
    price: z.number(),
    currency: z.string().default('EGP'),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    shipName: z.string(),
    highlights: z.array(z.string()),
    included: z.array(z.string()),
    notIncluded: z.array(z.string()).optional(),
    itinerary: z.array(z.object({
      day: z.number(),
      title: z.string(),
      description: z.string(),
    })),
    featured: z.boolean().default(false),
    cabinTypes: z.array(z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
    })).optional(),
    order: z.number().default(0),
  }),
});

const groupsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    nights: z.number(),
    price: z.number(),
    currency: z.string().default('EGP'),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    maxGroupSize: z.number(),
    highlights: z.array(z.string()),
    included: z.array(z.string()),
    notIncluded: z.array(z.string()).optional(),
    itinerary: z.array(z.object({
      day: z.number(),
      title: z.string(),
      description: z.string(),
    })),
    featured: z.boolean().default(false),
    nextDepartures: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    tagline: z.string(),
    email: z.string(),
    phone: z.string(),
    whatsapp: z.string().optional(),
    address: z.string(),
    socialLinks: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      twitter: z.string().optional(),
      youtube: z.string().optional(),
    }).optional(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroImage: z.string(),
  }),
});

export const collections = {
  packages: packagesCollection,
  cruises: cruisesCollection,
  groups: groupsCollection,
  pages: pagesCollection,
  settings: settingsCollection,
};

