import { z } from 'zod';
import { TagOnPostOrderByWithRelationInputObjectSchema } from './objects/TagOnPostOrderByWithRelationInput.schema';
import { TagOnPostWhereInputObjectSchema } from './objects/TagOnPostWhereInput.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';
import { TagOnPostScalarFieldEnumSchema } from './enums/TagOnPostScalarFieldEnum.schema';

export const TagOnPostFindFirstSchema = z.object({
  orderBy: z
    .union([
      TagOnPostOrderByWithRelationInputObjectSchema,
      TagOnPostOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TagOnPostWhereInputObjectSchema.optional(),
  cursor: TagOnPostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TagOnPostScalarFieldEnumSchema).optional(),
});
