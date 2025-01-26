import { z } from 'zod';
import { OrgCreateWithoutUserInputObjectSchema } from './OrgCreateWithoutUserInput.schema';
import { OrgUncheckedCreateWithoutUserInputObjectSchema } from './OrgUncheckedCreateWithoutUserInput.schema';
import { OrgCreateOrConnectWithoutUserInputObjectSchema } from './OrgCreateOrConnectWithoutUserInput.schema';
import { OrgUpsertWithoutUserInputObjectSchema } from './OrgUpsertWithoutUserInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutUserInputObjectSchema } from './OrgUpdateWithoutUserInput.schema';
import { OrgUncheckedUpdateWithoutUserInputObjectSchema } from './OrgUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => OrgUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutUserInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneWithoutUserNestedInputObjectSchema = Schema;
