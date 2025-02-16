import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './TagOnPostWhereUniqueInput.schema';
import { TagOnPostCreateWithoutPostInputObjectSchema } from './TagOnPostCreateWithoutPostInput.schema';
import { TagOnPostUncheckedCreateWithoutPostInputObjectSchema } from './TagOnPostUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => TagOnPostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagOnPostCreateWithoutPostInputObjectSchema),
      z.lazy(() => TagOnPostUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const TagOnPostCreateOrConnectWithoutPostInputObjectSchema = Schema;
