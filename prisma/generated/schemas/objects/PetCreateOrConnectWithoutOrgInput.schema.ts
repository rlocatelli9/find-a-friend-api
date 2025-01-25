import { z } from 'zod';
import { PetWhereUniqueInputObjectSchema } from './PetWhereUniqueInput.schema';
import { PetCreateWithoutOrgInputObjectSchema } from './PetCreateWithoutOrgInput.schema';
import { PetUncheckedCreateWithoutOrgInputObjectSchema } from './PetUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetCreateOrConnectWithoutOrgInput> = z
  .object({
    where: z.lazy(() => PetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PetCreateWithoutOrgInputObjectSchema),
      z.lazy(() => PetUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const PetCreateOrConnectWithoutOrgInputObjectSchema = Schema;
