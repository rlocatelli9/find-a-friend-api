import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetUpdateWithoutOrgInputObjectSchema } from './PetUpdateWithoutOrgInput.schema';
import { PetUncheckedUpdateWithoutOrgInputObjectSchema } from './PetUncheckedUpdateWithoutOrgInput.schema';
import { PetCreateWithoutOrgInputObjectSchema } from './PetCreateWithoutOrgInput.schema';
import { PetUncheckedCreateWithoutOrgInputObjectSchema } from './PetUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PetWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PetUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => PetUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PetCreateWithoutOrgInputObjectSchema),
      z.lazy(() => PetUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const PetUpsertWithWhereUniqueWithoutOrgInputObjectSchema = Schema;
