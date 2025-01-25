import { z } from 'zod';
import { OrgWhereInputObjectSchema } from './OrgWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgRelationFilter> = z
  .object({
    is: z
      .lazy(() => OrgWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OrgWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const OrgRelationFilterObjectSchema = Schema;
