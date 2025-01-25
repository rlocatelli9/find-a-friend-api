import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutPetInputObjectSchema } from './OrgCreateWithoutPetInput.schema';
import { OrgUncheckedCreateWithoutPetInputObjectSchema } from './OrgUncheckedCreateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutPetInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPetInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutPetInputObjectSchema = Schema;
