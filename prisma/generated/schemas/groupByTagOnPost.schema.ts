import { z } from 'zod';
import { TagOnPostWhereInputObjectSchema } from './objects/TagOnPostWhereInput.schema';
import { TagOnPostOrderByWithAggregationInputObjectSchema } from './objects/TagOnPostOrderByWithAggregationInput.schema';
import { TagOnPostScalarWhereWithAggregatesInputObjectSchema } from './objects/TagOnPostScalarWhereWithAggregatesInput.schema';
import { TagOnPostScalarFieldEnumSchema } from './enums/TagOnPostScalarFieldEnum.schema';

export const TagOnPostGroupBySchema = z.object({
  where: TagOnPostWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TagOnPostOrderByWithAggregationInputObjectSchema,
      TagOnPostOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TagOnPostScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TagOnPostScalarFieldEnumSchema),
});
