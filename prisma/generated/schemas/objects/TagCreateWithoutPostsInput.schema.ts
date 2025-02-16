import { z } from 'zod';
import { OrgCreateNestedOneWithoutTagsInputObjectSchema } from './OrgCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateWithoutPostsInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    org: z.lazy(() => OrgCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagCreateWithoutPostsInputObjectSchema = Schema;
