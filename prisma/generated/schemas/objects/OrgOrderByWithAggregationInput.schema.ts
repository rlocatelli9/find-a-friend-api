import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgCountOrderByAggregateInputObjectSchema } from './OrgCountOrderByAggregateInput.schema';
import { OrgAvgOrderByAggregateInputObjectSchema } from './OrgAvgOrderByAggregateInput.schema';
import { OrgMaxOrderByAggregateInputObjectSchema } from './OrgMaxOrderByAggregateInput.schema';
import { OrgMinOrderByAggregateInputObjectSchema } from './OrgMinOrderByAggregateInput.schema';
import { OrgSumOrderByAggregateInputObjectSchema } from './OrgSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrgOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    cnpj: z.lazy(() => SortOrderSchema).optional(),
    uf: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    complement: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    zip_code: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => OrgCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => OrgAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => OrgMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OrgMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => OrgSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const OrgOrderByWithAggregationInputObjectSchema = Schema;
