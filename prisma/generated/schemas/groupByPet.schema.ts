import { z } from 'zod';
import { PetWhereInputObjectSchema } from './objects/PetWhereInput.schema';
import { PetOrderByWithAggregationInputObjectSchema } from './objects/PetOrderByWithAggregationInput.schema';
import { PetScalarWhereWithAggregatesInputObjectSchema } from './objects/PetScalarWhereWithAggregatesInput.schema';
import { PetScalarFieldEnumSchema } from './enums/PetScalarFieldEnum.schema';

export const PetGroupBySchema = z.object({
  where: PetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PetOrderByWithAggregationInputObjectSchema,
      PetOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PetScalarFieldEnumSchema),
});
