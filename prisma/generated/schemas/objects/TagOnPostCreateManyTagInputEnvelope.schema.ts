import { z } from 'zod';
import { TagOnPostCreateManyTagInputObjectSchema } from './TagOnPostCreateManyTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateManyTagInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TagOnPostCreateManyTagInputObjectSchema),
      z.lazy(() => TagOnPostCreateManyTagInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagOnPostCreateManyTagInputEnvelopeObjectSchema = Schema;
