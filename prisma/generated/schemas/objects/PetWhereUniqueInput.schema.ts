import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetWhereUniqueInput> = z
  .object({
    id: z.string().uuid(),
  })
  .strict();

export const PetWhereUniqueInputObjectSchema = Schema;
