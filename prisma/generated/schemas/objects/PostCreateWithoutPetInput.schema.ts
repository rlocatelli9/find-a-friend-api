import { z } from 'zod';
import { TagOnPostCreateNestedManyWithoutPostInputObjectSchema } from './TagOnPostCreateNestedManyWithoutPostInput.schema';
import { OrgCreateNestedOneWithoutPostInputObjectSchema } from './OrgCreateNestedOneWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutPetInput> = z
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
    org: z.lazy(() => OrgCreateNestedOneWithoutPostInputObjectSchema),
  })
  .strict();

export const PostCreateWithoutPetInputObjectSchema = Schema;
