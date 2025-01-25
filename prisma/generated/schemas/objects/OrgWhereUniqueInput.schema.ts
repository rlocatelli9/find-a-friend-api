import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    owner_id: z.string().optional(),
  })
  .strict();

export const OrgWhereUniqueInputObjectSchema = Schema;
