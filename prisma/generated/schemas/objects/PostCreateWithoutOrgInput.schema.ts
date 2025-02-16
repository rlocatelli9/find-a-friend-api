import { z } from 'zod';
import { TagOnPostCreateNestedManyWithoutPostInputObjectSchema } from './TagOnPostCreateNestedManyWithoutPostInput.schema';
import { PetCreateNestedOneWithoutPostsInputObjectSchema } from './PetCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutOrgInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    published_at: z.coerce.date().optional().nullable(),
    deleted_at: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional(),
    tags: z
      .lazy(() => TagOnPostCreateNestedManyWithoutPostInputObjectSchema)
      .optional(),
    pet: z.lazy(() => PetCreateNestedOneWithoutPostsInputObjectSchema),
  })
  .strict();

export const PostCreateWithoutOrgInputObjectSchema = Schema;
