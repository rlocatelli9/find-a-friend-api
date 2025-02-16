import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithoutPostInputObjectSchema } from './TagOnPostUpdateWithoutPostInput.schema';
import { TagOnPostUncheckedUpdateWithoutPostInputObjectSchema } from './TagOnPostUncheckedUpdateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpdateWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagOnPostUpdateWithoutPostInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedUpdateWithoutPostInputObjectSchema),
      ]),
    })
    .strict();

export const TagOnPostUpdateWithWhereUniqueWithoutPostInputObjectSchema =
  Schema;
