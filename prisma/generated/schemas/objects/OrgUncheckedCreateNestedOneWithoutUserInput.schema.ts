import { z } from 'zod';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';
import { OrgCreateOrConnectWithoutUserInputObjectSchema } from './OrgCreateOrConnectWithoutUserInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUncheckedCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema;
