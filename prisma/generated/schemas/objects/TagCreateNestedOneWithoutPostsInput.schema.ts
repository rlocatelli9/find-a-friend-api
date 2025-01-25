import { z } from 'zod';
import { TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema';
import { TagCreateOrConnectWithoutPostsInputObjectSchema } from './TagCreateOrConnectWithoutPostsInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutPostsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutPostsInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TagCreateOrConnectWithoutPostsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateNestedOneWithoutPostsInputObjectSchema = Schema;
