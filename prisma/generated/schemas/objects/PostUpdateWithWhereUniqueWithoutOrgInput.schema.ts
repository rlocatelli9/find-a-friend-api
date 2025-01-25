import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOrgInputObjectSchema } from './PostUpdateWithoutOrgInput.schema';
import { PostUncheckedUpdateWithoutOrgInputObjectSchema } from './PostUncheckedUpdateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
