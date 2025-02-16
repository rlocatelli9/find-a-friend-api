import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutOrgInputObjectSchema } from './TagUpdateWithoutOrgInput.schema';
import { TagUncheckedUpdateWithoutOrgInputObjectSchema } from './TagUncheckedUpdateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
