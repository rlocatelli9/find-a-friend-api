import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithoutTagInputObjectSchema } from './TagOnPostUpdateWithoutTagInput.schema';
import { TagOnPostUncheckedUpdateWithoutTagInputObjectSchema } from './TagOnPostUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagOnPostUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagOnPostUpdateWithWhereUniqueWithoutTagInputObjectSchema = Schema;
