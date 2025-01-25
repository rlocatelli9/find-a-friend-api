import { z } from 'zod';
import { OrgCreateWithoutPetInputObjectSchema } from './OrgCreateWithoutPetInput.schema';
import { OrgUncheckedCreateWithoutPetInputObjectSchema } from './OrgUncheckedCreateWithoutPetInput.schema';
import { OrgCreateOrConnectWithoutPetInputObjectSchema } from './OrgCreateOrConnectWithoutPetInput.schema';
import { OrgUpsertWithoutPetInputObjectSchema } from './OrgUpsertWithoutPetInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutPetInputObjectSchema } from './OrgUpdateWithoutPetInput.schema';
import { OrgUncheckedUpdateWithoutPetInputObjectSchema } from './OrgUncheckedUpdateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneRequiredWithoutPetNestedInput> = z
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
    upsert: z.lazy(() => OrgUpsertWithoutPetInputObjectSchema).optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutPetInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutPetInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneRequiredWithoutPetNestedInputObjectSchema = Schema;
