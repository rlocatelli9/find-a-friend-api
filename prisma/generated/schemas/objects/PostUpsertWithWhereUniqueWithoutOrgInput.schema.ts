import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOrgInputObjectSchema } from './PostUpdateWithoutOrgInput.schema';
import { PostUncheckedUpdateWithoutOrgInputObjectSchema } from './PostUncheckedUpdateWithoutOrgInput.schema';
import { PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PostUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutOrgInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
