import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutPetInputObjectSchema } from './PostUpdateWithoutPetInput.schema';
import { PostUncheckedUpdateWithoutPetInputObjectSchema } from './PostUncheckedUpdateWithoutPetInput.schema';
import { PostCreateWithoutPetInputObjectSchema } from './PostCreateWithoutPetInput.schema';
import { PostUncheckedCreateWithoutPetInputObjectSchema } from './PostUncheckedCreateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutPetInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PostUpdateWithoutPetInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutPetInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutPetInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpsertWithWhereUniqueWithoutPetInputObjectSchema = Schema;
