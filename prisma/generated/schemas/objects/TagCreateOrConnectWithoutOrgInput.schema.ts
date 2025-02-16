import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutOrgInputObjectSchema } from './TagCreateWithoutOrgInput.schema';
import { TagUncheckedCreateWithoutOrgInputObjectSchema } from './TagUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutOrgInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutOrgInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutOrgInputObjectSchema = Schema;
