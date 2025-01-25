import { z } from 'zod';
import { PostCreateManyOrgInputObjectSchema } from './PostCreateManyOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyOrgInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PostCreateManyOrgInputObjectSchema),
      z.lazy(() => PostCreateManyOrgInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PostCreateManyOrgInputEnvelopeObjectSchema = Schema;
