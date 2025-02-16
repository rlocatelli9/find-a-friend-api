import { z } from 'zod';
import { TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema';
import { TagCreateOrConnectWithoutPostsInputObjectSchema } from './TagCreateOrConnectWithoutPostsInput.schema';
import { TagUpsertWithoutPostsInputObjectSchema } from './TagUpsertWithoutPostsInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutPostsInputObjectSchema } from './TagUpdateWithoutPostsInput.schema';
import { TagUncheckedUpdateWithoutPostsInputObjectSchema } from './TagUncheckedUpdateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutPostsNestedInput> = z
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
    upsert: z.lazy(() => TagUpsertWithoutPostsInputObjectSchema).optional(),
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TagUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => TagUncheckedUpdateWithoutPostsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagUpdateOneRequiredWithoutPostsNestedInputObjectSchema = Schema;
