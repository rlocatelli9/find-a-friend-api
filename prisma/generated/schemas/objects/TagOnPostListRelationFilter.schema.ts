import { z } from 'zod';
import { TagOnPostWhereInputObjectSchema } from './TagOnPostWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostListRelationFilter> = z
  .object({
    every: z.lazy(() => TagOnPostWhereInputObjectSchema).optional(),
    some: z.lazy(() => TagOnPostWhereInputObjectSchema).optional(),
    none: z.lazy(() => TagOnPostWhereInputObjectSchema).optional(),
  })
  .strict();

export const TagOnPostListRelationFilterObjectSchema = Schema;
