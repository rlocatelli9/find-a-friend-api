import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutUserInputObjectSchema } from './OrgUpdateWithoutUserInput.schema';
import { OrgUncheckedUpdateWithoutUserInputObjectSchema } from './OrgUncheckedUpdateWithoutUserInput.schema';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => OrgUpdateWithoutUserInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutUserInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
