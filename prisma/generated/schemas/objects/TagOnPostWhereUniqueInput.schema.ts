import { z } from 'zod';
import { TagOnPostPost_idTag_idCompoundUniqueInputObjectSchema } from './TagOnPostPost_idTag_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostWhereUniqueInput> = z
  .object({
    post_id_tag_id: z
      .lazy(() => TagOnPostPost_idTag_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOnPostWhereUniqueInputObjectSchema = Schema;
