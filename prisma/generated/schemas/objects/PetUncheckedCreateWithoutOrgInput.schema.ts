import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { SizeSchema } from '../enums/Size.schema';
import { PostUncheckedCreateNestedManyWithoutPetInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PetUncheckedCreateWithoutOrgInput> = z
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
    posts: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutPetInputObjectSchema)
      .optional(),
  })
  .strict();

export const PetUncheckedCreateWithoutOrgInputObjectSchema = Schema;
