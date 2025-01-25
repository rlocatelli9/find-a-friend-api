import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetAvgOrderByAggregateInput> = z
  .object({
    age: z.lazy(() => SortOrderSchema).optional(),
    energy: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PetAvgOrderByAggregateInputObjectSchema = Schema;
