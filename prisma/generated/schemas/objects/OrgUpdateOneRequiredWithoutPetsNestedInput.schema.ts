import { z } from 'zod';
import { OrgCreateWithoutPetsInputObjectSchema } from './OrgCreateWithoutPetsInput.schema';
import { OrgUncheckedCreateWithoutPetsInputObjectSchema } from './OrgUncheckedCreateWithoutPetsInput.schema';
import { OrgCreateOrConnectWithoutPetsInputObjectSchema } from './OrgCreateOrConnectWithoutPetsInput.schema';
import { OrgUpsertWithoutPetsInputObjectSchema } from './OrgUpsertWithoutPetsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutPetsInputObjectSchema } from './OrgUpdateWithoutPetsInput.schema';
import { OrgUncheckedUpdateWithoutPetsInputObjectSchema } from './OrgUncheckedUpdateWithoutPetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneRequiredWithoutPetsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutPetsInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutPetsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutPetsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => OrgUpsertWithoutPetsInputObjectSchema).optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutPetsInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutPetsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneRequiredWithoutPetsNestedInputObjectSchema = Schema;
