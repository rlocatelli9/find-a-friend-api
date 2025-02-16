import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';

export const TagOnPostFindUniqueSchema = z.object({
  where: TagOnPostWhereUniqueInputObjectSchema,
});
