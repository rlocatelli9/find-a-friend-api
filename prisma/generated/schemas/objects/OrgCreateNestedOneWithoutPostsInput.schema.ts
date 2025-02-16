import { z } from 'zod';
import { OrgCreateWithoutPostsInputObjectSchema } from './OrgCreateWithoutPostsInput.schema';
import { OrgUncheckedCreateWithoutPostsInputObjectSchema } from './OrgUncheckedCreateWithoutPostsInput.schema';
import { OrgCreateOrConnectWithoutPostsInputObjectSchema } from './OrgCreateOrConnectWithoutPostsInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateNestedOneWithoutPostsInput> = z
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
    connect: z.lazy(() => OrgWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrgCreateNestedOneWithoutPostsInputObjectSchema = Schema;
