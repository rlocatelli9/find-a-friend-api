import { z } from 'zod';
import { OrgScalarWhereInputObjectSchema } from './OrgScalarWhereInput.schema';
import { OrgUpdateManyMutationInputObjectSchema } from './OrgUpdateManyMutationInput.schema';
import { OrgUncheckedUpdateManyWithoutOrgInputObjectSchema } from './OrgUncheckedUpdateManyWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => OrgScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => OrgUpdateManyMutationInputObjectSchema),
      z.lazy(() => OrgUncheckedUpdateManyWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const OrgUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
