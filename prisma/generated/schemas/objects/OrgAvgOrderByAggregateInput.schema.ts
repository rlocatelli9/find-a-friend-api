import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgAvgOrderByAggregateInput> = z
  .object({
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const OrgAvgOrderByAggregateInputObjectSchema = Schema;
