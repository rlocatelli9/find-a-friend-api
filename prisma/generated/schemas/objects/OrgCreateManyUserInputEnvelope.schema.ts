import { z } from 'zod';
import { OrgCreateManyUserInputObjectSchema } from './OrgCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OrgCreateManyUserInputObjectSchema),
      z.lazy(() => OrgCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const OrgCreateManyUserInputEnvelopeObjectSchema = Schema;
