import { z } from 'zod';
import { PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema';
import { PostCreateOrConnectWithoutOrgInputObjectSchema } from './PostCreateOrConnectWithoutOrgInput.schema';
import { PostCreateManyOrgInputEnvelopeObjectSchema } from './PostCreateManyOrgInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutOrgInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PostCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PostCreateWithoutOrgInputObjectSchema).array(),
        z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema),
        z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema),
        z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PostCreateManyOrgInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PostWhereUniqueInputObjectSchema),
        z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema = Schema;
