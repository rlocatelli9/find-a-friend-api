import { z } from 'zod';
import { OrgCreateWithoutPostInputObjectSchema } from './OrgCreateWithoutPostInput.schema';
import { OrgUncheckedCreateWithoutPostInputObjectSchema } from './OrgUncheckedCreateWithoutPostInput.schema';
import { OrgCreateOrConnectWithoutPostInputObjectSchema } from './OrgCreateOrConnectWithoutPostInput.schema';
import { OrgUpsertWithoutPostInputObjectSchema } from './OrgUpsertWithoutPostInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutPostInputObjectSchema } from './OrgUpdateWithoutPostInput.schema';
import { OrgUncheckedUpdateWithoutPostInputObjectSchema } from './OrgUncheckedUpdateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneRequiredWithoutPostNestedInput> = z
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
    upsert: z.lazy(() => OrgUpsertWithoutPostInputObjectSchema).optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutPostInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutPostInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneRequiredWithoutPostNestedInputObjectSchema = Schema;
