import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrgInputObjectSchema } from './UserCreateWithoutOrgInput.schema';
import { UserUncheckedCreateWithoutOrgInputObjectSchema } from './UserUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrgInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrgInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutOrgInputObjectSchema = Schema;
