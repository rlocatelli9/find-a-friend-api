import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutPetsInputObjectSchema } from './OrgCreateWithoutPetsInput.schema';
import { OrgUncheckedCreateWithoutPetsInputObjectSchema } from './OrgUncheckedCreateWithoutPetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutPetsInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPetsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPetsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutPetsInputObjectSchema = Schema;
