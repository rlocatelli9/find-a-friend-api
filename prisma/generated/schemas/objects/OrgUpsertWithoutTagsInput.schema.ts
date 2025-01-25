import { z } from 'zod';
import { OrgUpdateWithoutTagsInputObjectSchema } from './OrgUpdateWithoutTagsInput.schema';
import { OrgUncheckedUpdateWithoutTagsInputObjectSchema } from './OrgUncheckedUpdateWithoutTagsInput.schema';
import { OrgCreateWithoutTagsInputObjectSchema } from './OrgCreateWithoutTagsInput.schema';
import { OrgUncheckedCreateWithoutTagsInputObjectSchema } from './OrgUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrgUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutTagsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithoutTagsInputObjectSchema = Schema;
