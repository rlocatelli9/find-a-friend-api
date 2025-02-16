import { z } from 'zod';
import { PostCreateWithoutPetInputObjectSchema } from './PostCreateWithoutPetInput.schema';
import { PostUncheckedCreateWithoutPetInputObjectSchema } from './PostUncheckedCreateWithoutPetInput.schema';
import { PostCreateOrConnectWithoutPetInputObjectSchema } from './PostCreateOrConnectWithoutPetInput.schema';
import { PostUpsertWithWhereUniqueWithoutPetInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutPetInput.schema';
import { PostCreateManyPetInputEnvelopeObjectSchema } from './PostCreateManyPetInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutPetInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutPetInput.schema';
import { PostUpdateManyWithWhereWithoutPetInputObjectSchema } from './PostUpdateManyWithWhereWithoutPetInput.schema';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateManyWithoutPetNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PostUpsertWithWhereUniqueWithoutPetInputObjectSchema),
        z
          .lazy(() => PostUpsertWithWhereUniqueWithoutPetInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PostCreateManyPetInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PostUpdateWithWhereUniqueWithoutPetInputObjectSchema),
        z
          .lazy(() => PostUpdateWithWhereUniqueWithoutPetInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PostUpdateManyWithWhereWithoutPetInputObjectSchema),
        z
          .lazy(() => PostUpdateManyWithWhereWithoutPetInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PostScalarWhereInputObjectSchema),
        z.lazy(() => PostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PostUpdateManyWithoutPetNestedInputObjectSchema = Schema;
