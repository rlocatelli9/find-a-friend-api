import { z } from 'zod';
import { OrgUpdateWithoutPetInputObjectSchema } from './OrgUpdateWithoutPetInput.schema';
import { OrgUncheckedUpdateWithoutPetInputObjectSchema } from './OrgUncheckedUpdateWithoutPetInput.schema';
import { OrgCreateWithoutPetInputObjectSchema } from './OrgCreateWithoutPetInput.schema';
import { OrgUncheckedCreateWithoutPetInputObjectSchema } from './OrgUncheckedCreateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutPetInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrgUpdateWithoutPetInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutPetInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPetInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithoutPetInputObjectSchema = Schema;
