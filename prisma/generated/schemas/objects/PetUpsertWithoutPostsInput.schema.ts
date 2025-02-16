import { z } from 'zod';
import { PetUpdateWithoutPostsInputObjectSchema } from './PetUpdateWithoutPostsInput.schema';
import { PetUncheckedUpdateWithoutPostsInputObjectSchema } from './PetUncheckedUpdateWithoutPostsInput.schema';
import { PetCreateWithoutPostsInputObjectSchema } from './PetCreateWithoutPostsInput.schema';
import { PetUncheckedCreateWithoutPostsInputObjectSchema } from './PetUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PetUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => PetUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PetCreateWithoutPostsInputObjectSchema),
      z.lazy(() => PetUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const PetUpsertWithoutPostsInputObjectSchema = Schema;
