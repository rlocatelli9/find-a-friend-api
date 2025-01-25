import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    cnpj: z.literal(true).optional(),
    uf: z.literal(true).optional(),
    city: z.literal(true).optional(),
    complement: z.literal(true).optional(),
    country: z.literal(true).optional(),
    zip_code: z.literal(true).optional(),
    latitude: z.literal(true).optional(),
    longitude: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
  })
  .strict();

export const OrgMaxAggregateInputObjectSchema = Schema;
