import { z } from 'zod';
import { TagOnPostCreateWithoutPostInputObjectSchema } from './TagOnPostCreateWithoutPostInput.schema';
import { TagOnPostUncheckedCreateWithoutPostInputObjectSchema } from './TagOnPostUncheckedCreateWithoutPostInput.schema';
import { TagOnPostCreateOrConnectWithoutPostInputObjectSchema } from './TagOnPostCreateOrConnectWithoutPostInput.schema';
import { TagOnPostUpsertWithWhereUniqueWithoutPostInputObjectSchema } from './TagOnPostUpsertWithWhereUniqueWithoutPostInput.schema';
import { TagOnPostCreateManyPostInputEnvelopeObjectSchema } from './TagOnPostCreateManyPostInputEnvelope.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithWhereUniqueWithoutPostInputObjectSchema } from './TagOnPostUpdateWithWhereUniqueWithoutPostInput.schema';
import { TagOnPostUpdateManyWithWhereWithoutPostInputObjectSchema } from './TagOnPostUpdateManyWithWhereWithoutPostInput.schema';
import { TagOnPostScalarWhereInputObjectSchema } from './TagOnPostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUncheckedUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagOnPostCreateWithoutPostInputObjectSchema),
          z.lazy(() => TagOnPostCreateWithoutPostInputObjectSchema).array(),
          z.lazy(() => TagOnPostUncheckedCreateWithoutPostInputObjectSchema),
          z
            .lazy(() => TagOnPostUncheckedCreateWithoutPostInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagOnPostCreateOrConnectWithoutPostInputObjectSchema),
          z
            .lazy(() => TagOnPostCreateOrConnectWithoutPostInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TagOnPostUpsertWithWhereUniqueWithoutPostInputObjectSchema,
          ),
          z
            .lazy(
              () => TagOnPostUpsertWithWhereUniqueWithoutPostInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagOnPostCreateManyPostInputEnvelopeObjectSchema)
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
          z.lazy(
            () => TagOnPostUpdateWithWhereUniqueWithoutPostInputObjectSchema,
          ),
          z
            .lazy(
              () => TagOnPostUpdateWithWhereUniqueWithoutPostInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TagOnPostUpdateManyWithWhereWithoutPostInputObjectSchema,
          ),
          z
            .lazy(
              () => TagOnPostUpdateManyWithWhereWithoutPostInputObjectSchema,
            )
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

export const TagOnPostUncheckedUpdateManyWithoutPostNestedInputObjectSchema =
  Schema;
