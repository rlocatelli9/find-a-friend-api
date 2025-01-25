import { z } from 'zod';
import { PostUpdateWithoutTagsInputObjectSchema } from './PostUpdateWithoutTagsInput.schema';
import { PostUncheckedUpdateWithoutTagsInputObjectSchema } from './PostUncheckedUpdateWithoutTagsInput.schema';
import { PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpsertWithoutTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PostUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutTagsInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpsertWithoutTagsInputObjectSchema = Schema;
