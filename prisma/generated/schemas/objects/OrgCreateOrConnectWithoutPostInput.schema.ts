import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutPostInputObjectSchema } from './OrgCreateWithoutPostInput.schema';
import { OrgUncheckedCreateWithoutPostInputObjectSchema } from './OrgUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPostInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutPostInputObjectSchema = Schema;
