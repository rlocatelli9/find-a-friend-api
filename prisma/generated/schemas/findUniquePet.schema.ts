import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';

export const PetFindUniqueSchema = z.object({
  where: PetWhereUniqueInputObjectSchema,
});
