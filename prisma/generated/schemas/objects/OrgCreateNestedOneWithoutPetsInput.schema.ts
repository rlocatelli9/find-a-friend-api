import { z } from 'zod';
import { OrgCreateWithoutPetsInputObjectSchema } from './OrgCreateWithoutPetsInput.schema';
import { OrgUncheckedCreateWithoutPetsInputObjectSchema } from './OrgUncheckedCreateWithoutPetsInput.schema';
import { OrgCreateOrConnectWithoutPetsInputObjectSchema } from './OrgCreateOrConnectWithoutPetsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateNestedOneWithoutPetsInput> = z
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
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgCreateNestedOneWithoutPetsInputObjectSchema = Schema;
