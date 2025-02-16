import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateManyOrgInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const TagCreateManyOrgInputObjectSchema = Schema;
