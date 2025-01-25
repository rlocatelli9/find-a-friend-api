import { z } from 'zod';
import { TagOnPostUpdateInputObjectSchema } from './objects/TagOnPostUpdateInput.schema';
import { TagOnPostUncheckedUpdateInputObjectSchema } from './objects/TagOnPostUncheckedUpdateInput.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';

export const TagOnPostUpdateOneSchema = z.object({
  data: z.union([
    TagOnPostUpdateInputObjectSchema,
    TagOnPostUncheckedUpdateInputObjectSchema,
  ]),
  where: TagOnPostWhereUniqueInputObjectSchema,
});
