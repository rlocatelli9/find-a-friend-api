import { z } from 'zod';
import { TagOnPostCreateWithoutTagInputObjectSchema } from './TagOnPostCreateWithoutTagInput.schema';
import { TagOnPostUncheckedCreateWithoutTagInputObjectSchema } from './TagOnPostUncheckedCreateWithoutTagInput.schema';
import { TagOnPostCreateOrConnectWithoutTagInputObjectSchema } from './TagOnPostCreateOrConnectWithoutTagInput.schema';
import { TagOnPostUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './TagOnPostUpsertWithWhereUniqueWithoutTagInput.schema';
import { TagOnPostCreateManyTagInputEnvelopeObjectSchema } from './TagOnPostCreateManyTagInputEnvelope.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './TagOnPostUpdateWithWhereUniqueWithoutTagInput.schema';
import { TagOnPostUpdateManyWithWhereWithoutTagInputObjectSchema } from './TagOnPostUpdateManyWithWhereWithoutTagInput.schema';
import { TagOnPostScalarWhereInputObjectSchema } from './TagOnPostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpdateManyWithoutTagNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagOnPostCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagOnPostCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => TagOnPostUncheckedCreateWithoutTagInputObjectSchema),
        z
          .lazy(() => TagOnPostUncheckedCreateWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagOnPostCreateOrConnectWithoutTagInputObjectSchema),
        z
          .lazy(() => TagOnPostCreateOrConnectWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TagOnPostUpsertWithWhereUniqueWithoutTagInputObjectSchema),
        z
          .lazy(() => TagOnPostUpsertWithWhereUniqueWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagOnPostCreateManyTagInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TagOnPostUpdateWithWhereUniqueWithoutTagInputObjectSchema),
        z
          .lazy(() => TagOnPostUpdateWithWhereUniqueWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TagOnPostUpdateManyWithWhereWithoutTagInputObjectSchema),
        z
          .lazy(() => TagOnPostUpdateManyWithWhereWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema),
        z.lazy(() => TagOnPostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagOnPostUpdateManyWithoutTagNestedInputObjectSchema = Schema;
