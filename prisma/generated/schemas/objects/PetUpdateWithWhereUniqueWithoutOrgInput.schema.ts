import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetUpdateWithoutOrgInputObjectSchema } from './PetUpdateWithoutOrgInput.schema';
import { PetUncheckedUpdateWithoutOrgInputObjectSchema } from './PetUncheckedUpdateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PetWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PetUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => PetUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const PetUpdateWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
