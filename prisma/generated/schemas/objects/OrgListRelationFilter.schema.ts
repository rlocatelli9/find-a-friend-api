import { z } from 'zod';
import { OrgWhereInputObjectSchema } from './OrgWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgListRelationFilter> = z
  .object({
    every: z.lazy(() => OrgWhereInputObjectSchema).optional(),
    some: z.lazy(() => OrgWhereInputObjectSchema).optional(),
    none: z.lazy(() => OrgWhereInputObjectSchema).optional(),
  })
  .strict();

export const OrgListRelationFilterObjectSchema = Schema;
