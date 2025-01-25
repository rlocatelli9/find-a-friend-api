import { z } from 'zod';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';
import { OrgCreateOrConnectWithoutUserInputObjectSchema } from './OrgCreateOrConnectWithoutUserInput.schema';
import { OrgCreateManyUserInputEnvelopeObjectSchema } from './OrgCreateManyUserInputEnvelope.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUncheckedCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => OrgCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrgWhereUniqueInputObjectSchema),
        z.lazy(() => OrgWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const OrgUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
