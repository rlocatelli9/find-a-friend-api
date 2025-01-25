import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';

export const PetDeleteOneSchema = z.object({
  where: PetWhereUniqueInputObjectSchema,
});
