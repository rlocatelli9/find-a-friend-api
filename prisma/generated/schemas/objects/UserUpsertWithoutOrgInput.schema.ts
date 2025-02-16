import { z } from 'zod';
import { UserUpdateWithoutOrgInputObjectSchema } from './UserUpdateWithoutOrgInput.schema';
import { UserUncheckedUpdateWithoutOrgInputObjectSchema } from './UserUncheckedUpdateWithoutOrgInput.schema';
import { UserCreateWithoutOrgInputObjectSchema } from './UserCreateWithoutOrgInput.schema';
import { UserUncheckedCreateWithoutOrgInputObjectSchema } from './UserUncheckedCreateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutOrgInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOrgInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOrgInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrgInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrgInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutOrgInputObjectSchema = Schema;
