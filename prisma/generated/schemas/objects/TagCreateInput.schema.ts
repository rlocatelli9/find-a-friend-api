import { z } from 'zod';
import { TagOnPostCreateNestedManyWithoutTagInputObjectSchema } from './TagOnPostCreateNestedManyWithoutTagInput.schema';
import { OrgCreateNestedOneWithoutTagsInputObjectSchema } from './OrgCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    posts: z
      .lazy(() => TagOnPostCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
    org: z.lazy(() => OrgCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
