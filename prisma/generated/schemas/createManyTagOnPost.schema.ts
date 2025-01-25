import { z } from 'zod';
import { TagOnPostCreateManyInputObjectSchema } from './objects/TagOnPostCreateManyInput.schema';

export const TagOnPostCreateManySchema = z.object({
  data: z.union([
    TagOnPostCreateManyInputObjectSchema,
    z.array(TagOnPostCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
