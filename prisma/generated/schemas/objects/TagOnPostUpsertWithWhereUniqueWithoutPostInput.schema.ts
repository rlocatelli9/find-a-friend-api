import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostUpdateWithoutPostInputObjectSchema } from './TagOnPostUpdateWithoutPostInput.schema';
import { TagOnPostUncheckedUpdateWithoutPostInputObjectSchema } from './TagOnPostUncheckedUpdateWithoutPostInput.schema';
import { TagOnPostCreateWithoutPostInputObjectSchema } from './TagOnPostCreateWithoutPostInput.schema';
import { TagOnPostUncheckedCreateWithoutPostInputObjectSchema } from './TagOnPostUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpsertWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagOnPostUpdateWithoutPostInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedUpdateWithoutPostInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagOnPostCreateWithoutPostInputObjectSchema),
        z.lazy(() => TagOnPostUncheckedCreateWithoutPostInputObjectSchema),
      ]),
    })
    .strict();

export const TagOnPostUpsertWithWhereUniqueWithoutPostInputObjectSchema =
  Schema;
