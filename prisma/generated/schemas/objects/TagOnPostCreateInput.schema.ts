import { z } from 'zod';
import { PostCreateNestedOneWithoutTagsInputObjectSchema } from './PostCreateNestedOneWithoutTagsInput.schema';
import { TagCreateNestedOneWithoutPostsInputObjectSchema } from './TagCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    post: z.lazy(() => PostCreateNestedOneWithoutTagsInputObjectSchema),
    tag: z.lazy(() => TagCreateNestedOneWithoutPostsInputObjectSchema),
  })
  .strict();

export const TagOnPostCreateInputObjectSchema = Schema;
