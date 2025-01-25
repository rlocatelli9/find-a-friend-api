import { z } from 'zod';
import { TagOnPostUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TagOnPostUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    owner_id: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    posts: z
      .lazy(() => TagOnPostUncheckedCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
