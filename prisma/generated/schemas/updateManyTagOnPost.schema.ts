import { z } from 'zod';
import { TagOnPostUpdateManyMutationInputObjectSchema } from './objects/TagOnPostUpdateManyMutationInput.schema';
import { TagOnPostWhereInputObjectSchema } from './objects/TagOnPostWhereInput.schema';

export const TagOnPostUpdateManySchema = z.object({
  data: TagOnPostUpdateManyMutationInputObjectSchema,
  where: TagOnPostWhereInputObjectSchema.optional(),
});
