import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostCreateWithoutTagInputObjectSchema } from './TagOnPostCreateWithoutTagInput.schema';
import { TagOnPostUncheckedCreateWithoutTagInputObjectSchema } from './TagOnPostUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagOnPostCreateWithoutTagInputObjectSchema),
      z.lazy(() => TagOnPostUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagOnPostCreateOrConnectWithoutTagInputObjectSchema = Schema;
