import { z } from 'zod';
import { TagOnPostCreateWithoutPostInputObjectSchema } from './TagOnPostCreateWithoutPostInput.schema';
import { TagOnPostUncheckedCreateWithoutPostInputObjectSchema } from './TagOnPostUncheckedCreateWithoutPostInput.schema';
import { TagOnPostCreateOrConnectWithoutPostInputObjectSchema } from './TagOnPostCreateOrConnectWithoutPostInput.schema';
import { TagOnPostCreateManyPostInputEnvelopeObjectSchema } from './TagOnPostCreateManyPostInputEnvelope.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateNestedManyWithoutPostInput> = z
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
    createMany: z
      .lazy(() => TagOnPostCreateManyPostInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
        z.lazy(() => TagOnPostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagOnPostCreateNestedManyWithoutPostInputObjectSchema = Schema;
