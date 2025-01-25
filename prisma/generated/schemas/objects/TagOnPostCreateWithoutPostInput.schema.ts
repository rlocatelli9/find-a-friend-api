import { z } from 'zod';
import { TagCreateNestedOneWithoutPostsInputObjectSchema } from './TagCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateWithoutPostInput> = z
  .object({
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    tag: z.lazy(() => TagCreateNestedOneWithoutPostsInputObjectSchema),
  })
  .strict();

export const TagOnPostCreateWithoutPostInputObjectSchema = Schema;
