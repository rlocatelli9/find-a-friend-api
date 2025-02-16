import { z } from 'zod';
import { PostCreateWithoutPetInputObjectSchema } from './PostCreateWithoutPetInput.schema';
import { PostUncheckedCreateWithoutPetInputObjectSchema } from './PostUncheckedCreateWithoutPetInput.schema';
import { PostCreateOrConnectWithoutPetInputObjectSchema } from './PostCreateOrConnectWithoutPetInput.schema';
import { PostCreateManyPetInputEnvelopeObjectSchema } from './PostCreateManyPetInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutPetInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutPetInputObjectSchema),
        z.lazy(() => PostCreateWithoutPetInputObjectSchema).array(),
        z.lazy(() => PostUncheckedCreateWithoutPetInputObjectSchema),
        z.lazy(() => PostUncheckedCreateWithoutPetInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PostCreateOrConnectWithoutPetInputObjectSchema),
        z.lazy(() => PostCreateOrConnectWithoutPetInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PostCreateManyPetInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PostUncheckedCreateNestedManyWithoutPetInputObjectSchema = Schema;
