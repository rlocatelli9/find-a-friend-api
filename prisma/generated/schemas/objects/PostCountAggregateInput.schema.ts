import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    pet_id: z.literal(true).optional(),
    published_at: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PostCountAggregateInputObjectSchema = Schema;
