import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSizeFilterObjectSchema } from './NestedEnumSizeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumSizeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => SizeSchema).optional(),
    in: z
      .union([z.lazy(() => SizeSchema).array(), z.lazy(() => SizeSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => SizeSchema).array(), z.lazy(() => SizeSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => SizeSchema),
        z.lazy(() => NestedEnumSizeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSizeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSizeFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumSizeWithAggregatesFilterObjectSchema = Schema;
