import { z } from 'zod';
import { PetCreateInputObjectSchema } from './objects/PetCreateInput.schema';
import { PetUncheckedCreateInputObjectSchema } from './objects/PetUncheckedCreateInput.schema';

export const PetCreateOneSchema = z.object({
  data: z.union([
    PetCreateInputObjectSchema,
    PetUncheckedCreateInputObjectSchema,
  ]),
});
