import { z } from 'zod';
import { PetScalarWhereInputObjectSchema } from './PetScalarWhereInput.schema';
import { PetUpdateManyMutationInputObjectSchema } from './PetUpdateManyMutationInput.schema';
import { PetUncheckedUpdateManyWithoutPetsInputObjectSchema } from './PetUncheckedUpdateManyWithoutPetsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PetScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PetUpdateManyMutationInputObjectSchema),
      z.lazy(() => PetUncheckedUpdateManyWithoutPetsInputObjectSchema),
    ]),
  })
  .strict();

export const PetUpdateManyWithWhereWithoutOrgInputObjectSchema = Schema;
