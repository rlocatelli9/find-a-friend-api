import { z } from 'zod';
import { TagOnPostWhereInputObjectSchema } from './objects/TagOnPostWhereInput.schema';

export const TagOnPostDeleteManySchema = z.object({
  where: TagOnPostWhereInputObjectSchema.optional(),
});
