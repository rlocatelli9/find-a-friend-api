import { z } from 'zod';
import { TagOnPostCreateInputObjectSchema } from './objects/TagOnPostCreateInput.schema';
import { TagOnPostUncheckedCreateInputObjectSchema } from './objects/TagOnPostUncheckedCreateInput.schema';

export const TagOnPostCreateOneSchema = z.object({
  data: z.union([
    TagOnPostCreateInputObjectSchema,
    TagOnPostUncheckedCreateInputObjectSchema,
  ]),
});
