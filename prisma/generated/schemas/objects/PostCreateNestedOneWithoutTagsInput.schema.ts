import { z } from 'zod';
import { PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';
import { PostCreateOrConnectWithoutTagsInputObjectSchema } from './PostCreateOrConnectWithoutTagsInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateNestedOneWithoutTagsInput> = z
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
    connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PostCreateNestedOneWithoutTagsInputObjectSchema = Schema;
