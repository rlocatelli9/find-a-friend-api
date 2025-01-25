import { z } from 'zod';
import { PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema';
import { PostCreateOrConnectWithoutOrgInputObjectSchema } from './PostCreateOrConnectWithoutOrgInput.schema';
import { PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutOrgInput.schema';
import { PostCreateManyOrgInputEnvelopeObjectSchema } from './PostCreateManyOrgInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutOrgInput.schema';
import { PostUpdateManyWithWhereWithoutOrgInputObjectSchema } from './PostUpdateManyWithWhereWithoutOrgInput.schema';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateManyWithoutOrgNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PostCreateWithoutOrgInputObjectSchema).array(),
        z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema),
        z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PostCreateManyOrgInputEnvelopeObjectSchema)
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
        z.lazy(() => PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PostUpdateManyWithWhereWithoutOrgInputObjectSchema),
        z
          .lazy(() => PostUpdateManyWithWhereWithoutOrgInputObjectSchema)
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

export const PostUpdateManyWithoutOrgNestedInputObjectSchema = Schema;
