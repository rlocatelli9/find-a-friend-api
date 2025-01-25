import { z } from 'zod';
import { UserCreateNestedOneWithoutOrgInputObjectSchema } from './UserCreateNestedOneWithoutOrgInput.schema';
import { PetCreateNestedManyWithoutOrgInputObjectSchema } from './PetCreateNestedManyWithoutOrgInput.schema';
import { TagCreateNestedManyWithoutOrgInputObjectSchema } from './TagCreateNestedManyWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    cnpj: z.string(),
    uf: z.string(),
    city: z.string(),
    complement: z.string(),
    country: z.string(),
    zip_code: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutOrgInputObjectSchema),
    Pet: z
      .lazy(() => PetCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrgCreateWithoutPostInputObjectSchema = Schema;
