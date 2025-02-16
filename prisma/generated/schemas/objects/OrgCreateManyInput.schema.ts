import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgCreateManyInput> = z
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
  })
  .strict();

export const OrgCreateManyInputObjectSchema = Schema;
