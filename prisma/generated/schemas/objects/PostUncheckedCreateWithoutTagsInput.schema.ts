import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateWithoutTagsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    owner_id: z.string(),
    pet_id: z.string(),
    published_at: z.coerce.date().optional().nullable(),
    deleted_at: z.coerce.date().optional().nullable(),
    created_at: z.coerce.date().optional(),
  })
  .strict();

export const PostUncheckedCreateWithoutTagsInputObjectSchema = Schema;
