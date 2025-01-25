import { z } from 'zod';
import { OrgWhereInputObjectSchema } from './objects/OrgWhereInput.schema';
import { OrgOrderByWithAggregationInputObjectSchema } from './objects/OrgOrderByWithAggregationInput.schema';
import { OrgScalarWhereWithAggregatesInputObjectSchema } from './objects/OrgScalarWhereWithAggregatesInput.schema';
import { OrgScalarFieldEnumSchema } from './enums/OrgScalarFieldEnum.schema';

export const OrgGroupBySchema = z.object({
  where: OrgWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      OrgOrderByWithAggregationInputObjectSchema,
      OrgOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: OrgScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OrgScalarFieldEnumSchema),
});
