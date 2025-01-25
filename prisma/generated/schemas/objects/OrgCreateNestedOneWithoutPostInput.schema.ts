import { z } from 'zod';
import { OrgCreateWithoutPostInputObjectSchema } from './OrgCreateWithoutPostInput.schema';
import { OrgUncheckedCreateWithoutPostInputObjectSchema } from './OrgUncheckedCreateWithoutPostInput.schema';
import { OrgCreateOrConnectWithoutPostInputObjectSchema } from './OrgCreateOrConnectWithoutPostInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateNestedOneWithoutPostInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutPostInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutPostInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutPostInputObjectSchema)
      .optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgCreateNestedOneWithoutPostInputObjectSchema = Schema;
