import { z } from 'zod';
import { OrgOrderByWithRelationInputObjectSchema } from './objects/OrgOrderByWithRelationInput.schema';
import { OrgWhereInputObjectSchema } from './objects/OrgWhereInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';
import { OrgCountAggregateInputObjectSchema } from './objects/OrgCountAggregateInput.schema';
import { OrgMinAggregateInputObjectSchema } from './objects/OrgMinAggregateInput.schema';
import { OrgMaxAggregateInputObjectSchema } from './objects/OrgMaxAggregateInput.schema';
import { OrgAvgAggregateInputObjectSchema } from './objects/OrgAvgAggregateInput.schema';
import { OrgSumAggregateInputObjectSchema } from './objects/OrgSumAggregateInput.schema';

export const OrgAggregateSchema = z.object({
  orderBy: z
    .union([
      OrgOrderByWithRelationInputObjectSchema,
      OrgOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OrgWhereInputObjectSchema.optional(),
  cursor: OrgWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), OrgCountAggregateInputObjectSchema])
    .optional(),
  _min: OrgMinAggregateInputObjectSchema.optional(),
  _max: OrgMaxAggregateInputObjectSchema.optional(),
  _avg: OrgAvgAggregateInputObjectSchema.optional(),
  _sum: OrgSumAggregateInputObjectSchema.optional(),
});
