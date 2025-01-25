import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutTagsInputObjectSchema } from './OrgCreateWithoutTagsInput.schema';
import { OrgUncheckedCreateWithoutTagsInputObjectSchema } from './OrgUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutTagsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutTagsInputObjectSchema = Schema;
