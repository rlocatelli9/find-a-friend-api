import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PetCountOrderByAggregateInputObjectSchema } from './PetCountOrderByAggregateInput.schema';
import { PetAvgOrderByAggregateInputObjectSchema } from './PetAvgOrderByAggregateInput.schema';
import { PetMaxOrderByAggregateInputObjectSchema } from './PetMaxOrderByAggregateInput.schema';
import { PetMinOrderByAggregateInputObjectSchema } from './PetMinOrderByAggregateInput.schema';
import { PetSumOrderByAggregateInputObjectSchema } from './PetSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    race: z.lazy(() => SortOrderSchema).optional(),
    deficiencies: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    energy: z.lazy(() => SortOrderSchema).optional(),
    available: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => PetCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PetAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PetMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PetSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PetOrderByWithAggregationInputObjectSchema = Schema;
