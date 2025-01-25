import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagOnPostOrderByRelationAggregateInputObjectSchema } from './TagOnPostOrderByRelationAggregateInput.schema';
import { OrgOrderByWithRelationInputObjectSchema } from './OrgOrderByWithRelationInput.schema';
import { PetOrderByWithRelationInputObjectSchema } from './PetOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    pet_id: z.lazy(() => SortOrderSchema).optional(),
    published_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    tags: z
      .lazy(() => TagOnPostOrderByRelationAggregateInputObjectSchema)
      .optional(),
    org: z.lazy(() => OrgOrderByWithRelationInputObjectSchema).optional(),
    pet: z.lazy(() => PetOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PostOrderByWithRelationInputObjectSchema = Schema;
