import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PostRelationFilterObjectSchema } from './PostRelationFilter.schema';
import { PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagOnPostWhereInputObjectSchema),
        z.lazy(() => TagOnPostWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagOnPostWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagOnPostWhereInputObjectSchema),
        z.lazy(() => TagOnPostWhereInputObjectSchema).array(),
      ])
      .optional(),
    post_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tag_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    deleted_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    post: z
      .union([
        z.lazy(() => PostRelationFilterObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema),
      ])
      .optional(),
    tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagOnPostWhereInputObjectSchema = Schema;
