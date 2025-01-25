import { z } from 'zod';
import { TagOnPostScalarWhereInputObjectSchema } from './TagOnPostScalarWhereInput.schema';
import { TagOnPostUpdateManyMutationInputObjectSchema } from './TagOnPostUpdateManyMutationInput.schema';
import { TagOnPostUncheckedUpdateManyWithoutTagsInputObjectSchema } from './TagOnPostUncheckedUpdateManyWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpdateManyWithWhereWithoutPostInput> = z
  .object({
    where: z.lazy(() => TagOnPostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TagOnPostUpdateManyMutationInputObjectSchema),
      z.lazy(() => TagOnPostUncheckedUpdateManyWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const TagOnPostUpdateManyWithWhereWithoutPostInputObjectSchema = Schema;
