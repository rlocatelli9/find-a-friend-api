import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';
import { TagOnPostCreateInputObjectSchema } from './objects/TagOnPostCreateInput.schema';
import { TagOnPostUncheckedCreateInputObjectSchema } from './objects/TagOnPostUncheckedCreateInput.schema';
import { TagOnPostUpdateInputObjectSchema } from './objects/TagOnPostUpdateInput.schema';
import { TagOnPostUncheckedUpdateInputObjectSchema } from './objects/TagOnPostUncheckedUpdateInput.schema';

export const TagOnPostUpsertSchema = z.object({
  where: TagOnPostWhereUniqueInputObjectSchema,
  create: z.union([
    TagOnPostCreateInputObjectSchema,
    TagOnPostUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TagOnPostUpdateInputObjectSchema,
    TagOnPostUncheckedUpdateInputObjectSchema,
  ]),
});
