import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    name: z.literal(true).optional(),
    race: z.literal(true).optional(),
    deficiencies: z.literal(true).optional(),
    description: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    age: z.literal(true).optional(),
    energy: z.literal(true).optional(),
    available: z.literal(true).optional(),
    size: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
  })
  .strict();

export const PetMinAggregateInputObjectSchema = Schema;
