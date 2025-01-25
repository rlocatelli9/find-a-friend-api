import { z } from 'zod';
import { TagCreateManyOrgInputObjectSchema } from './TagCreateManyOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateManyOrgInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TagCreateManyOrgInputObjectSchema),
      z.lazy(() => TagCreateManyOrgInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagCreateManyOrgInputEnvelopeObjectSchema = Schema;
