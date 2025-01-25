import { z } from 'zod';
import { TagUpdateWithoutPostsInputObjectSchema } from './TagUpdateWithoutPostsInput.schema';
import { TagUncheckedUpdateWithoutPostsInputObjectSchema } from './TagUncheckedUpdateWithoutPostsInput.schema';
import { TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithoutPostsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutPostsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithoutPostsInputObjectSchema = Schema;
