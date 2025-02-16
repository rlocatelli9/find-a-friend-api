import { z } from 'zod';
import { PetWhereInputObjectSchema } from './objects/PetWhereInput.schema';

export const PetDeleteManySchema = z.object({
  where: PetWhereInputObjectSchema.optional(),
});
