import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutOrgInputObjectSchema } from './TagUpdateWithoutOrgInput.schema';
import { TagUncheckedUpdateWithoutOrgInputObjectSchema } from './TagUncheckedUpdateWithoutOrgInput.schema';
import { TagCreateWithoutOrgInputObjectSchema } from './TagCreateWithoutOrgInput.schema';
import { TagUncheckedCreateWithoutOrgInputObjectSchema } from './TagUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutOrgInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
