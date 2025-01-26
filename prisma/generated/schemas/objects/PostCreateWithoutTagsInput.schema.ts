import { z } from 'zod';
import { OrgCreateNestedOneWithoutPostsInputObjectSchema } from './OrgCreateNestedOneWithoutPostsInput.schema';
import { PetCreateNestedOneWithoutPostsInputObjectSchema } from './PetCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutTagsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    published_at: z.coerce.date().optional().nullable(),
    deleted_at: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional(),
    org: z.lazy(() => OrgCreateNestedOneWithoutPostsInputObjectSchema),
    pet: z.lazy(() => PetCreateNestedOneWithoutPostsInputObjectSchema),
  })
  .strict();

export const PostCreateWithoutTagsInputObjectSchema = Schema;
