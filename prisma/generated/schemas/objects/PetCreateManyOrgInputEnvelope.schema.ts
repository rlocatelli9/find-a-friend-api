import { z } from 'zod';
import { PetCreateManyOrgInputObjectSchema } from './PetCreateManyOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetCreateManyOrgInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PetCreateManyOrgInputObjectSchema),
      z.lazy(() => PetCreateManyOrgInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PetCreateManyOrgInputEnvelopeObjectSchema = Schema;
