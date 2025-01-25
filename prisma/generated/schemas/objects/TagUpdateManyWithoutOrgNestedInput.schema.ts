import { z } from 'zod';
import { TagCreateWithoutOrgInputObjectSchema } from './TagCreateWithoutOrgInput.schema';
import { TagUncheckedCreateWithoutOrgInputObjectSchema } from './TagUncheckedCreateWithoutOrgInput.schema';
import { TagCreateOrConnectWithoutOrgInputObjectSchema } from './TagCreateOrConnectWithoutOrgInput.schema';
import { TagUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutOrgInput.schema';
import { TagCreateManyOrgInputEnvelopeObjectSchema } from './TagCreateManyOrgInputEnvelope.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutOrgInput.schema';
import { TagUpdateManyWithWhereWithoutOrgInputObjectSchema } from './TagUpdateManyWithWhereWithoutOrgInput.schema';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateManyWithoutOrgNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutOrgInputObjectSchema),
        z.lazy(() => TagCreateWithoutOrgInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutOrgInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutOrgInputObjectSchema),
        z.lazy(() => TagCreateOrConnectWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TagUpsertWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => TagUpsertWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagCreateManyOrgInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TagUpdateWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => TagUpdateWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TagUpdateManyWithWhereWithoutOrgInputObjectSchema),
        z.lazy(() => TagUpdateManyWithWhereWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TagScalarWhereInputObjectSchema),
        z.lazy(() => TagScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagUpdateManyWithoutOrgNestedInputObjectSchema = Schema;
