import { z } from 'zod';
import { PetCreateWithoutOrgInputObjectSchema } from './PetCreateWithoutOrgInput.schema';
import { PetUncheckedCreateWithoutOrgInputObjectSchema } from './PetUncheckedCreateWithoutOrgInput.schema';
import { PetCreateOrConnectWithoutOrgInputObjectSchema } from './PetCreateOrConnectWithoutOrgInput.schema';
import { PetUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './PetUpsertWithWhereUniqueWithoutOrgInput.schema';
import { PetCreateManyOrgInputEnvelopeObjectSchema } from './PetCreateManyOrgInputEnvelope.schema';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './PetUpdateWithWhereUniqueWithoutOrgInput.schema';
import { PetUpdateManyWithWhereWithoutOrgInputObjectSchema } from './PetUpdateManyWithWhereWithoutOrgInput.schema';
import { PetScalarWhereInputObjectSchema } from './PetScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpdateManyWithoutOrgNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PetCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PetCreateWithoutOrgInputObjectSchema).array(),
        z.lazy(() => PetUncheckedCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PetUncheckedCreateWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PetCreateOrConnectWithoutOrgInputObjectSchema),
        z.lazy(() => PetCreateOrConnectWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PetUpsertWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => PetUpsertWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PetCreateManyOrgInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PetWhereUniqueInputObjectSchema),
        z.lazy(() => PetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PetWhereUniqueInputObjectSchema),
        z.lazy(() => PetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PetWhereUniqueInputObjectSchema),
        z.lazy(() => PetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PetWhereUniqueInputObjectSchema),
        z.lazy(() => PetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PetUpdateWithWhereUniqueWithoutOrgInputObjectSchema),
        z
          .lazy(() => PetUpdateWithWhereUniqueWithoutOrgInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PetUpdateManyWithWhereWithoutOrgInputObjectSchema),
        z.lazy(() => PetUpdateManyWithWhereWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PetScalarWhereInputObjectSchema),
        z.lazy(() => PetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PetUpdateManyWithoutOrgNestedInputObjectSchema = Schema;
