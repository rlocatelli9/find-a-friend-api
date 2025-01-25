import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutUserInputObjectSchema } from './OrgUpdateWithoutUserInput.schema';
import { OrgUncheckedUpdateWithoutUserInputObjectSchema } from './OrgUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => OrgUpdateWithoutUserInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
