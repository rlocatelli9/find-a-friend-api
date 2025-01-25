import { z } from 'zod';
import { PetOrderByWithRelationInputObjectSchema } from './objects/PetOrderByWithRelationInput.schema';
import { PetWhereInputObjectSchema } from './objects/PetWhereInput.schema';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';
import { PetScalarFieldEnumSchema } from './enums/PetScalarFieldEnum.schema';

export const PetFindManySchema = z.object({
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
  distinct: z.array(PetScalarFieldEnumSchema).optional(),
});
