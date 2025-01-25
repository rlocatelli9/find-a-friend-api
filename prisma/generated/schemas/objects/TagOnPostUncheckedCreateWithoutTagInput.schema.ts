import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUncheckedCreateWithoutTagInput> = z
  .object({
    post_id: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const TagOnPostUncheckedCreateWithoutTagInputObjectSchema = Schema;
