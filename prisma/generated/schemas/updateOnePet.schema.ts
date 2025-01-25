import { z } from 'zod';
import { PetUpdateInputObjectSchema } from './objects/PetUpdateInput.schema';
import { PetUncheckedUpdateInputObjectSchema } from './objects/PetUncheckedUpdateInput.schema';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';

export const PetUpdateOneSchema = z.object({
  data: z.union([
    PetUpdateInputObjectSchema,
    PetUncheckedUpdateInputObjectSchema,
  ]),
  where: PetWhereUniqueInputObjectSchema,
});
