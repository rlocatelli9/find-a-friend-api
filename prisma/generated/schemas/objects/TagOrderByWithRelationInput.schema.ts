import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagOnPostOrderByRelationAggregateInputObjectSchema } from './TagOnPostOrderByRelationAggregateInput.schema';
import { OrgOrderByWithRelationInputObjectSchema } from './OrgOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    posts: z
      .lazy(() => TagOnPostOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Org: z.lazy(() => OrgOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
