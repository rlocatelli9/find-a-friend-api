import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostMinOrderByAggregateInput> = z
  .object({
    post_id: z.lazy(() => SortOrderSchema).optional(),
    tag_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TagOnPostMinOrderByAggregateInputObjectSchema = Schema;
