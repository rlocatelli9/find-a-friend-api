import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithoutTagInputObjectSchema } from './TagOnPostUpdateWithoutTagInput.schema';
import { TagOnPostUncheckedUpdateWithoutTagInputObjectSchema } from './TagOnPostUncheckedUpdateWithoutTagInput.schema';
import { TagOnPostCreateWithoutTagInputObjectSchema } from './TagOnPostCreateWithoutTagInput.schema';
import { TagOnPostUncheckedCreateWithoutTagInputObjectSchema } from './TagOnPostUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagOnPostUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagOnPostCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedCreateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagOnPostUpsertWithWhereUniqueWithoutTagInputObjectSchema = Schema;
