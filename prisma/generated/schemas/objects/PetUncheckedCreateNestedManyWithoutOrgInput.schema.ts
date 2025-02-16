import { z } from 'zod';
import { PetCreateWithoutOrgInputObjectSchema } from './PetCreateWithoutOrgInput.schema';
import { PetUncheckedCreateWithoutOrgInputObjectSchema } from './PetUncheckedCreateWithoutOrgInput.schema';
import { PetCreateOrConnectWithoutOrgInputObjectSchema } from './PetCreateOrConnectWithoutOrgInput.schema';
import { PetCreateManyOrgInputEnvelopeObjectSchema } from './PetCreateManyOrgInputEnvelope.schema';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutOrgInput> = z
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
    createMany: z
      .lazy(() => PetCreateManyOrgInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PetWhereUniqueInputObjectSchema),
        z.lazy(() => PetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PetUncheckedCreateNestedManyWithoutOrgInputObjectSchema = Schema;
