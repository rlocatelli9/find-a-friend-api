import { z } from 'zod';
import { PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutOrgInput.schema';
import { TagUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutOrgInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgUncheckedCreateWithoutPetInput> = z
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
    owner_id: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    Post: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutOrgInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrgUncheckedCreateWithoutPetInputObjectSchema = Schema;
