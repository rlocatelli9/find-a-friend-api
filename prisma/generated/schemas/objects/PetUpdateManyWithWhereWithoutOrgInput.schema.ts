import { z } from 'zod';
import { PetScalarWhereInputObjectSchema } from './PetScalarWhereInput.schema';
import { PetUpdateManyMutationInputObjectSchema } from './PetUpdateManyMutationInput.schema';
import { PetUncheckedUpdateManyWithoutPetInputObjectSchema } from './PetUncheckedUpdateManyWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PetScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PetUpdateManyMutationInputObjectSchema),
      z.lazy(() => PetUncheckedUpdateManyWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const PetUpdateManyWithWhereWithoutOrgInputObjectSchema = Schema;
