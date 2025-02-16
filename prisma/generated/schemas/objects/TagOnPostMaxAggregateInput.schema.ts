import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostMaxAggregateInputType> = z
  .object({
    post_id: z.literal(true).optional(),
    tag_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
  })
  .strict();

export const TagOnPostMaxAggregateInputObjectSchema = Schema;
