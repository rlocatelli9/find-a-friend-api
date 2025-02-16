import { z } from 'zod';
import { TagOnPostOrderByWithRelationInputObjectSchema } from './objects/TagOnPostOrderByWithRelationInput.schema';
import { TagOnPostWhereInputObjectSchema } from './objects/TagOnPostWhereInput.schema';
import { TagOnPostWhereUniqueInputObjectSchema } from './objects/TagOnPostWhereUniqueInput.schema';
import { TagOnPostCountAggregateInputObjectSchema } from './objects/TagOnPostCountAggregateInput.schema';
import { TagOnPostMinAggregateInputObjectSchema } from './objects/TagOnPostMinAggregateInput.schema';
import { TagOnPostMaxAggregateInputObjectSchema } from './objects/TagOnPostMaxAggregateInput.schema';

export const TagOnPostAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), TagOnPostCountAggregateInputObjectSchema])
    .optional(),
  _min: TagOnPostMinAggregateInputObjectSchema.optional(),
  _max: TagOnPostMaxAggregateInputObjectSchema.optional(),
});
