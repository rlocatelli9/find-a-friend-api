import { z } from 'zod';
import { TagOnPostCreateWithoutTagInputObjectSchema } from './TagOnPostCreateWithoutTagInput.schema';
import { TagOnPostUncheckedCreateWithoutTagInputObjectSchema } from './TagOnPostUncheckedCreateWithoutTagInput.schema';
import { TagOnPostCreateOrConnectWithoutTagInputObjectSchema } from './TagOnPostCreateOrConnectWithoutTagInput.schema';
import { TagOnPostCreateManyTagInputEnvelopeObjectSchema } from './TagOnPostCreateManyTagInputEnvelope.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUncheckedCreateNestedManyWithoutTagInput> =
  z
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
      createMany: z
        .lazy(() => TagOnPostCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
          z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagOnPostUncheckedCreateNestedManyWithoutTagInputObjectSchema =
  Schema;
