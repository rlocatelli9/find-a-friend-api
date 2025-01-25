import { z } from 'zod';
import { TagCreateWithoutOrgInputObjectSchema } from './TagCreateWithoutOrgInput.schema';
import { TagUncheckedCreateWithoutOrgInputObjectSchema } from './TagUncheckedCreateWithoutOrgInput.schema';
import { TagCreateOrConnectWithoutOrgInputObjectSchema } from './TagCreateOrConnectWithoutOrgInput.schema';
import { TagCreateManyOrgInputEnvelopeObjectSchema } from './TagCreateManyOrgInputEnvelope.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutOrgInput> = z
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
    createMany: z
      .lazy(() => TagCreateManyOrgInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagUncheckedCreateNestedManyWithoutOrgInputObjectSchema = Schema;
