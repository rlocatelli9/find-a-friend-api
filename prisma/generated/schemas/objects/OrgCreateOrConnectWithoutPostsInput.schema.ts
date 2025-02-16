import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './OrgWhereUniqueInput.schema';
import { OrgCreateWithoutPostsInputObjectSchema } from './OrgCreateWithoutPostsInput.schema';
import { OrgUncheckedCreateWithoutPostsInputObjectSchema } from './OrgUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateOrConnectWithoutPostsInput> = z
  .object({
    where: z.lazy(() => OrgWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPostsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgCreateOrConnectWithoutPostsInputObjectSchema = Schema;
