import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTypeFilterObjectSchema } from './EnumTypeFilter.schema';
import { TypeSchema } from '../enums/Type.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumSizeFilterObjectSchema } from './EnumSizeFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PetScalarWhereInputObjectSchema),
        z.lazy(() => PetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PetScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PetScalarWhereInputObjectSchema),
        z.lazy(() => PetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumTypeFilterObjectSchema),
        z.lazy(() => TypeSchema),
      ])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    race: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    deficiencies: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    owner_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    age: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    energy: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    available: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    size: z
      .union([
        z.lazy(() => EnumSizeFilterObjectSchema),
        z.lazy(() => SizeSchema),
      ])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    deleted_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const PetScalarWhereInputObjectSchema = Schema;
