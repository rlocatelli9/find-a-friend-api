import { z } from 'zod';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';
import { OrgCreateOrConnectWithoutUserInputObjectSchema } from './OrgCreateOrConnectWithoutUserInput.schema';
import { OrgUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OrgUpsertWithWhereUniqueWithoutUserInput.schema';
import { OrgCreateManyUserInputEnvelopeObjectSchema } from './OrgCreateManyUserInputEnvelope.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OrgUpdateWithWhereUniqueWithoutUserInput.schema';
import { OrgUpdateManyWithWhereWithoutUserInputObjectSchema } from './OrgUpdateManyWithWhereWithoutUserInput.schema';
import { OrgScalarWhereInputObjectSchema } from './OrgScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUncheckedUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrgCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrgCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => OrgCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => OrgUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => OrgUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => OrgCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => OrgWhereUniqueInputObjectSchema),
        z.lazy(() => OrgWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => OrgWhereUniqueInputObjectSchema),
        z.lazy(() => OrgWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => OrgWhereUniqueInputObjectSchema),
        z.lazy(() => OrgWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrgWhereUniqueInputObjectSchema),
        z.lazy(() => OrgWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => OrgUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OrgUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => OrgUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => OrgScalarWhereInputObjectSchema),
        z.lazy(() => OrgScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const OrgUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
