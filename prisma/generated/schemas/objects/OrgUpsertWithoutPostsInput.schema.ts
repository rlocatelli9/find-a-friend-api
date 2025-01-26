import { z } from 'zod';
import { OrgUpdateWithoutPostsInputObjectSchema } from './OrgUpdateWithoutPostsInput.schema';
import { OrgUncheckedUpdateWithoutPostsInputObjectSchema } from './OrgUncheckedUpdateWithoutPostsInput.schema';
import { OrgCreateWithoutPostsInputObjectSchema } from './OrgCreateWithoutPostsInput.schema';
import { OrgUncheckedCreateWithoutPostsInputObjectSchema } from './OrgUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrgUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrgCreateWithoutPostsInputObjectSchema),
      z.lazy(() => OrgUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpsertWithoutPostsInputObjectSchema = Schema;
