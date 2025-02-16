import { z } from 'zod';
import { PetWhereInputObjectSchema } from './PetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetListRelationFilter> = z
  .object({
    every: z.lazy(() => PetWhereInputObjectSchema).optional(),
    some: z.lazy(() => PetWhereInputObjectSchema).optional(),
    none: z.lazy(() => PetWhereInputObjectSchema).optional(),
  })
  .strict();

export const PetListRelationFilterObjectSchema = Schema;
