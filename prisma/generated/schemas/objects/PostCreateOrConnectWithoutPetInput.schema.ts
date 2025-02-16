import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutPetInputObjectSchema } from './PostCreateWithoutPetInput.schema';
import { PostUncheckedCreateWithoutPetInputObjectSchema } from './PostUncheckedCreateWithoutPetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateOrConnectWithoutPetInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutPetInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutPetInputObjectSchema),
    ]),
  })
  .strict();

export const PostCreateOrConnectWithoutPetInputObjectSchema = Schema;
