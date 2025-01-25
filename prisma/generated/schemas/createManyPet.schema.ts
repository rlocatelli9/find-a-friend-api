import { z } from 'zod';
import { PetCreateManyInputObjectSchema } from './objects/PetCreateManyInput.schema';

export const PetCreateManySchema = z.object({
  data: z.union([
    PetCreateManyInputObjectSchema,
    z.array(PetCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
