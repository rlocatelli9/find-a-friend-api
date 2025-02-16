import { z } from 'zod';
import { OrgUpdateWithoutPetsInputObjectSchema } from './OrgUpdateWithoutPetsInput.schema';
import { OrgUncheckedUpdateWithoutPetsInputObjectSchema } from './OrgUncheckedUpdateWithoutPetsInput.schema';
import { OrgCreateWithoutPetsInputObjectSchema } from './OrgCreateWithoutPetsInput.schema';
import { OrgUncheckedCreateWithoutPetsInputObjectSchema } from './OrgUncheckedCreateWithoutPetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutPetsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrgUpdateWithoutPetsInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutPetsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPetsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPetsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithoutPetsInputObjectSchema = Schema;
