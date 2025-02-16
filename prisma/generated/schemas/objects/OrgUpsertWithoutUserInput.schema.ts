import { z } from 'zod';
import { OrgUpdateWithoutUserInputObjectSchema } from './OrgUpdateWithoutUserInput.schema';
import { OrgUncheckedUpdateWithoutUserInputObjectSchema } from './OrgUncheckedUpdateWithoutUserInput.schema';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutUserInput> = z
  .object({
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

export const OrgUpsertWithoutUserInputObjectSchema = Schema;
