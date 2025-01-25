import { z } from 'zod';
import { TagOnPostCreateManyPostInputObjectSchema } from './TagOnPostCreateManyPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateManyPostInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TagOnPostCreateManyPostInputObjectSchema),
      z.lazy(() => TagOnPostCreateManyPostInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagOnPostCreateManyPostInputEnvelopeObjectSchema = Schema;
