import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutUserInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutUserInputObjectSchema = Schema;
