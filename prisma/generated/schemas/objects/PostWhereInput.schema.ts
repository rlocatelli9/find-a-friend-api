import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TagOnPostListRelationFilterObjectSchema } from './TagOnPostListRelationFilter.schema';
import { OrgRelationFilterObjectSchema } from './OrgRelationFilter.schema';
import { OrgWhereInputObjectSchema } from './OrgWhereInput.schema';
import { PetRelationFilterObjectSchema } from './PetRelationFilter.schema';
import { PetWhereInputObjectSchema } from './PetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    owner_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pet_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    published_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    deleted_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    tags: z.lazy(() => TagOnPostListRelationFilterObjectSchema).optional(),
    org: z
      .union([
        z.lazy(() => OrgRelationFilterObjectSchema),
        z.lazy(() => OrgWhereInputObjectSchema),
      ])
      .optional(),
    pet: z
      .union([
        z.lazy(() => PetRelationFilterObjectSchema),
        z.lazy(() => PetWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PostWhereInputObjectSchema = Schema;
