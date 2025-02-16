import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutTagsInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const PostCreateOrConnectWithoutTagsInputObjectSchema = Schema;
