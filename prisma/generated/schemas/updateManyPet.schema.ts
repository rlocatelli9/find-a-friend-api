import { z } from 'zod';
import { PetUpdateManyMutationInputObjectSchema } from './objects/PetUpdateManyMutationInput.schema';
import { PetWhereInputObjectSchema } from './objects/PetWhereInput.schema';

export const PetUpdateManySchema = z.object({
  data: PetUpdateManyMutationInputObjectSchema,
  where: PetWhereInputObjectSchema.optional(),
});
