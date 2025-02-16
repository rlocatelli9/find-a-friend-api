import { z } from 'zod';
import { UserCreateWithoutOrgInputObjectSchema } from './UserCreateWithoutOrgInput.schema';
import { UserUncheckedCreateWithoutOrgInputObjectSchema } from './UserUncheckedCreateWithoutOrgInput.schema';
import { UserCreateOrConnectWithoutOrgInputObjectSchema } from './UserCreateOrConnectWithoutOrgInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrgInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutOrgInputObjectSchema = Schema;
