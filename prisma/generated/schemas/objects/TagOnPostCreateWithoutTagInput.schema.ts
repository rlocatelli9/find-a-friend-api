import { z } from 'zod';
import { PostCreateNestedOneWithoutTagsInputObjectSchema } from './PostCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateWithoutTagInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    post: z.lazy(() => PostCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagOnPostCreateWithoutTagInputObjectSchema = Schema;
