import { z } from 'zod';
import { PetCreateWithoutPostsInputObjectSchema } from './PetCreateWithoutPostsInput.schema';
import { PetUncheckedCreateWithoutPostsInputObjectSchema } from './PetUncheckedCreateWithoutPostsInput.schema';
import { PetCreateOrConnectWithoutPostsInputObjectSchema } from './PetCreateOrConnectWithoutPostsInput.schema';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetCreateNestedOneWithoutPostsInput> = z
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
    connect: z.lazy(() => PetWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PetCreateNestedOneWithoutPostsInputObjectSchema = Schema;
