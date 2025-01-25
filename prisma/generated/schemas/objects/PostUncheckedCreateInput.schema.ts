import { z } from 'zod';
import { TagOnPostUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './TagOnPostUncheckedCreateNestedManyWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    owner_id: z.string(),
    pet_id: z.string(),
    published_at: z.coerce.date().optional().nullable(),
    deleted_at: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional(),
    tags: z
      .lazy(
        () => TagOnPostUncheckedCreateNestedManyWithoutPostInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PostUncheckedCreateInputObjectSchema = Schema;
