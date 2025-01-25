import { z } from 'zod';
import { OrgUpdateWithoutPostInputObjectSchema } from './OrgUpdateWithoutPostInput.schema';
import { OrgUncheckedUpdateWithoutPostInputObjectSchema } from './OrgUncheckedUpdateWithoutPostInput.schema';
import { OrgCreateWithoutPostInputObjectSchema } from './OrgCreateWithoutPostInput.schema';
import { OrgUncheckedCreateWithoutPostInputObjectSchema } from './OrgUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutPostInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrgUpdateWithoutPostInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPostInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithoutPostInputObjectSchema = Schema;
