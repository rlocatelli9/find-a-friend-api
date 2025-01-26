import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { OrgCreateNestedOneWithoutUserInputObjectSchema } from './OrgCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    password_hash: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    org: z
      .lazy(() => OrgCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
