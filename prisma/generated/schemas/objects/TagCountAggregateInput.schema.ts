import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    value: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TagCountAggregateInputObjectSchema = Schema;
