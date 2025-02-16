import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutPetInputObjectSchema } from './PostUpdateWithoutPetInput.schema';
import { PostUncheckedUpdateWithoutPetInputObjectSchema } from './PostUncheckedUpdateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutPetInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutPetInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpdateWithWhereUniqueWithoutPetInputObjectSchema = Schema;
