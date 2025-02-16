import { z } from 'zod';
import { PetCreateWithoutPostsInputObjectSchema } from './PetCreateWithoutPostsInput.schema';
import { PetUncheckedCreateWithoutPostsInputObjectSchema } from './PetUncheckedCreateWithoutPostsInput.schema';
import { PetCreateOrConnectWithoutPostsInputObjectSchema } from './PetCreateOrConnectWithoutPostsInput.schema';
import { PetUpsertWithoutPostsInputObjectSchema } from './PetUpsertWithoutPostsInput.schema';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetUpdateWithoutPostsInputObjectSchema } from './PetUpdateWithoutPostsInput.schema';
import { PetUncheckedUpdateWithoutPostsInputObjectSchema } from './PetUncheckedUpdateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpdateOneRequiredWithoutPostsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PetCreateWithoutPostsInputObjectSchema),
        z.lazy(() => PetUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PetCreateOrConnectWithoutPostsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PetUpsertWithoutPostsInputObjectSchema).optional(),
    connect: z.lazy(() => PetWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PetUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => PetUncheckedUpdateWithoutPostsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PetUpdateOneRequiredWithoutPostsNestedInputObjectSchema = Schema;
