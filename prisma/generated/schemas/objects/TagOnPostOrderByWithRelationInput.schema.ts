import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostOrderByWithRelationInput> = z
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
    post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional(),
    tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TagOnPostOrderByWithRelationInputObjectSchema = Schema;
