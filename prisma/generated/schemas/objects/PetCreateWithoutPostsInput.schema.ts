import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { SizeSchema } from '../enums/Size.schema';
import { OrgCreateNestedOneWithoutPetInputObjectSchema } from './OrgCreateNestedOneWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetCreateWithoutPostsInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => TypeSchema),
    name: z.string(),
    race: z.string(),
    deficiencies: z.boolean().optional(),
    description: z.string(),
    age: z.number(),
    energy: z.number(),
    available: z.boolean().optional(),
    size: z.lazy(() => SizeSchema),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    org: z.lazy(() => OrgCreateNestedOneWithoutPetInputObjectSchema),
  })
  .strict();

export const PetCreateWithoutPostsInputObjectSchema = Schema;
