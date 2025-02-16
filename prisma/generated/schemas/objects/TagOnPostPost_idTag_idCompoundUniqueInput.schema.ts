import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOnPostPost_idTag_idCompoundUniqueInput> = z
  .object({
    post_id: z.string(),
    tag_id: z.string(),
  })
  .strict();

export const TagOnPostPost_idTag_idCompoundUniqueInputObjectSchema = Schema;
