import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetCreateWithoutPostsInputObjectSchema } from './PetCreateWithoutPostsInput.schema';
import { PetUncheckedCreateWithoutPostsInputObjectSchema } from './PetUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetCreateOrConnectWithoutPostsInput> = z
  .object({
    where: z.lazy(() => PetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PetCreateWithoutPostsInputObjectSchema),
      z.lazy(() => PetUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const PetCreateOrConnectWithoutPostsInputObjectSchema = Schema;
