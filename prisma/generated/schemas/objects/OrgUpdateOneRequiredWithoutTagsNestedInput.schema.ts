import { z } from 'zod';
import { OrgCreateWithoutTagsInputObjectSchema } from './OrgCreateWithoutTagsInput.schema';
import { OrgUncheckedCreateWithoutTagsInputObjectSchema } from './OrgUncheckedCreateWithoutTagsInput.schema';
import { OrgCreateOrConnectWithoutTagsInputObjectSchema } from './OrgCreateOrConnectWithoutTagsInput.schema';
import { OrgUpsertWithoutTagsInputObjectSchema } from './OrgUpsertWithoutTagsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutTagsInputObjectSchema } from './OrgUpdateWithoutTagsInput.schema';
import { OrgUncheckedUpdateWithoutTagsInputObjectSchema } from './OrgUncheckedUpdateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneRequiredWithoutTagsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutTagsInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutTagsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutTagsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => OrgUpsertWithoutTagsInputObjectSchema).optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutTagsInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutTagsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneRequiredWithoutTagsNestedInputObjectSchema = Schema;
