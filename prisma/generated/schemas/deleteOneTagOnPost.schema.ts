import { z } from 'zod';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';

export const TagOnPostDeleteOneSchema = z.object({
  where: TagOnPostWhereUniqueInputObjectSchema,
});
