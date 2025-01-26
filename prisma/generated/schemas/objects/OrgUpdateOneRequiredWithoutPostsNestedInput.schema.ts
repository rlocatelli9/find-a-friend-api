import { z } from 'zod';
import { OrgCreateWithoutPostsInputObjectSchema } from './OrgCreateWithoutPostsInput.schema';
import { OrgUncheckedCreateWithoutPostsInputObjectSchema } from './OrgUncheckedCreateWithoutPostsInput.schema';
import { OrgCreateOrConnectWithoutPostsInputObjectSchema } from './OrgCreateOrConnectWithoutPostsInput.schema';
import { OrgUpsertWithoutPostsInputObjectSchema } from './OrgUpsertWithoutPostsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgUpdateWithoutPostsInputObjectSchema } from './OrgUpdateWithoutPostsInput.schema';
import { OrgUncheckedUpdateWithoutPostsInputObjectSchema } from './OrgUncheckedUpdateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateOneRequiredWithoutPostsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrgCreateWithoutPostsInputObjectSchema),
        z.lazy(() => OrgUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrgCreateOrConnectWithoutPostsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => OrgUpsertWithoutPostsInputObjectSchema).optional(),
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => OrgUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => OrgUncheckedUpdateWithoutPostsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrgUpdateOneRequiredWithoutPostsNestedInputObjectSchema = Schema;
