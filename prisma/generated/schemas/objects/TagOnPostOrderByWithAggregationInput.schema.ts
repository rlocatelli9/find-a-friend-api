import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagOnPostCountOrderByAggregateInputObjectSchema } from './TagOnPostCountOrderByAggregateInput.schema';
import { TagOnPostMaxOrderByAggregateInputObjectSchema } from './TagOnPostMaxOrderByAggregateInput.schema';
import { TagOnPostMinOrderByAggregateInputObjectSchema } from './TagOnPostMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostOrderByWithAggregationInput> = z
  .object({
    post_id: z.lazy(() => SortOrderSchema).optional(),
    tag_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => TagOnPostCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TagOnPostMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TagOnPostMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOnPostOrderByWithAggregationInputObjectSchema = Schema;
