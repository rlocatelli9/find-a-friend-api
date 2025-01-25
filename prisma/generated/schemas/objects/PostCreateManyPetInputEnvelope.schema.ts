import { z } from 'zod';
import { PostCreateManyPetInputObjectSchema } from './PostCreateManyPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyPetInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PostCreateManyPetInputObjectSchema),
      z.lazy(() => PostCreateManyPetInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PostCreateManyPetInputEnvelopeObjectSchema = Schema;
