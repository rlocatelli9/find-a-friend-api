import { z } from 'zod';
import { UserCreateWithoutOrgInputObjectSchema } from './UserCreateWithoutOrgInput.schema';
import { UserUncheckedCreateWithoutOrgInputObjectSchema } from './UserUncheckedCreateWithoutOrgInput.schema';
import { UserCreateOrConnectWithoutOrgInputObjectSchema } from './UserCreateOrConnectWithoutOrgInput.schema';
import { UserUpsertWithoutOrgInputObjectSchema } from './UserUpsertWithoutOrgInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrgInputObjectSchema } from './UserUpdateWithoutOrgInput.schema';
import { UserUncheckedUpdateWithoutOrgInputObjectSchema } from './UserUncheckedUpdateWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrgNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOrgInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOrgInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutOrgInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutOrgInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutOrgInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutOrgInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutOrgNestedInputObjectSchema = Schema;
