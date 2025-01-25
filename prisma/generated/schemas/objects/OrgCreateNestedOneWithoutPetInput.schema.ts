import { z } from 'zod';
import { OrgCreateWithoutPetInputObjectSchema } from './OrgCreateWithoutPetInput.schema';
import { OrgUncheckedCreateWithoutPetInputObjectSchema } from './OrgUncheckedCreateWithoutPetInput.schema';
import { OrgCreateOrConnectWithoutPetInputObjectSchema } from './OrgCreateOrConnectWithoutPetInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateNestedOneWithoutPetInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutPetInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutPetInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutPetInputObjectSchema)
      .optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgCreateNestedOneWithoutPetInputObjectSchema = Schema;
