import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetAvgAggregateInputType> = z
  .object({
    age: z.literal(true).optional(),
    energy: z.literal(true).optional(),
  })
  .strict();

export const PetAvgAggregateInputObjectSchema = Schema;
