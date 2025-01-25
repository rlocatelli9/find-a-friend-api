import { z } from 'zod';
import { PetOrderByWithRelationInputObjectSchema } from './objects/PetOrderByWithRelationInput.schema';
import { PetWhereInputObjectSchema } from './objects/PetWhereInput.schema';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';
import { PetCountAggregateInputObjectSchema } from './objects/PetCountAggregateInput.schema';
import { PetMinAggregateInputObjectSchema } from './objects/PetMinAggregateInput.schema';
import { PetMaxAggregateInputObjectSchema } from './objects/PetMaxAggregateInput.schema';
import { PetAvgAggregateInputObjectSchema } from './objects/PetAvgAggregateInput.schema';
import { PetSumAggregateInputObjectSchema } from './objects/PetSumAggregateInput.schema';

export const PetAggregateSchema = z.object({
  orderBy: z
    .union([
      PetOrderByWithRelationInputObjectSchema,
      PetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PetWhereInputObjectSchema.optional(),
  cursor: PetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PetCountAggregateInputObjectSchema])
    .optional(),
  _min: PetMinAggregateInputObjectSchema.optional(),
  _max: PetMaxAggregateInputObjectSchema.optional(),
  _avg: PetAvgAggregateInputObjectSchema.optional(),
  _sum: PetSumAggregateInputObjectSchema.optional(),
});
