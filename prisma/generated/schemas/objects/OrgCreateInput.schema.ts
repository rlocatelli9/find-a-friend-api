import { z } from 'zod';
import { UserCreateNestedOneWithoutOrgInputObjectSchema } from './UserCreateNestedOneWithoutOrgInput.schema';
import { PetCreateNestedManyWithoutOrgInputObjectSchema } from './PetCreateNestedManyWithoutOrgInput.schema';
import { PostCreateNestedManyWithoutOrgInputObjectSchema } from './PostCreateNestedManyWithoutOrgInput.schema';
import { TagCreateNestedManyWithoutOrgInputObjectSchema } from './TagCreateNestedManyWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateInput> = z
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
    Post: z
      .lazy(() => PostCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrgCreateInputObjectSchema = Schema;
