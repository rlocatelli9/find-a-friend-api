import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema),
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagOnPostScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema),
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const TagOnPostScalarWhereInputObjectSchema = Schema;
