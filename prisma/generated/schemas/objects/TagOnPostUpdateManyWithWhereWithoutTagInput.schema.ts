import { z } from 'zod';
import { TagOnPostScalarWhereInputObjectSchema } from './TagOnPostScalarWhereInput.schema';
import { TagOnPostUpdateManyMutationInputObjectSchema } from './TagOnPostUpdateManyMutationInput.schema';
import { TagOnPostUncheckedUpdateManyWithoutPostsInputObjectSchema } from './TagOnPostUncheckedUpdateManyWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostUpdateManyWithWhereWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagOnPostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TagOnPostUpdateManyMutationInputObjectSchema),
      z.lazy(() => TagOnPostUncheckedUpdateManyWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();

export const TagOnPostUpdateManyWithWhereWithoutTagInputObjectSchema = Schema;
