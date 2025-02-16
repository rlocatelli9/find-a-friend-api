import { z } from 'zod';
import { PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';
import { PostCreateOrConnectWithoutTagsInputObjectSchema } from './PostCreateOrConnectWithoutTagsInput.schema';
import { PostUpsertWithoutTagsInputObjectSchema } from './PostUpsertWithoutTagsInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutTagsInputObjectSchema } from './PostUpdateWithoutTagsInput.schema';
import { PostUncheckedUpdateWithoutTagsInputObjectSchema } from './PostUncheckedUpdateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutTagsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutTagsInputObjectSchema),
        z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PostCreateOrConnectWithoutTagsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PostUpsertWithoutTagsInputObjectSchema).optional(),
    connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PostUpdateWithoutTagsInputObjectSchema),
        z.lazy(() => PostUncheckedUpdateWithoutTagsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PostUpdateOneRequiredWithoutTagsNestedInputObjectSchema = Schema;
