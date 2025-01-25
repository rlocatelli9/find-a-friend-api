import { z } from 'zod';
import { OrgCreateWithoutTagsInputObjectSchema } from './OrgCreateWithoutTagsInput.schema';
import { OrgUncheckedCreateWithoutTagsInputObjectSchema } from './OrgUncheckedCreateWithoutTagsInput.schema';
import { OrgCreateOrConnectWithoutTagsInputObjectSchema } from './OrgCreateOrConnectWithoutTagsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateNestedOneWithoutTagsInput> = z
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
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgCreateNestedOneWithoutTagsInputObjectSchema = Schema;
