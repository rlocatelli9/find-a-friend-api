import { z } from 'zod';
import { PetWhereInputObjectSchema } from './PetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetRelationFilter> = z
  .object({
    is: z
      .lazy(() => PetWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PetWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PetRelationFilterObjectSchema = Schema;
