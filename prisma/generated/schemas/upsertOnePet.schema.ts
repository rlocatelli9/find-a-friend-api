import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './objects/PetWhereUniqueInput.schema';
import { PetCreateInputObjectSchema } from './objects/PetCreateInput.schema';
import { PetUncheckedCreateInputObjectSchema } from './objects/PetUncheckedCreateInput.schema';
import { PetUpdateInputObjectSchema } from './objects/PetUpdateInput.schema';
import { PetUncheckedUpdateInputObjectSchema } from './objects/PetUncheckedUpdateInput.schema';

export const PetUpsertSchema = z.object({
  where: PetWhereUniqueInputObjectSchema,
  create: z.union([
    PetCreateInputObjectSchema,
    PetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PetUpdateInputObjectSchema,
    PetUncheckedUpdateInputObjectSchema,
  ]),
});
