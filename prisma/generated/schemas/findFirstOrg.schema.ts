import { z } from 'zod';
import { OrgOrderByWithRelationInputObjectSchema } from './objects/OrgOrderByWithRelationInput.schema';
import { OrgWhereInputObjectSchema } from './objects/OrgWhereInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';
import { OrgScalarFieldEnumSchema } from './enums/OrgScalarFieldEnum.schema';

export const OrgFindFirstSchema = z.object({
  orderBy: z
    .union([
      OrgOrderByWithRelationInputObjectSchema,
      OrgOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OrgWhereInputObjectSchema.optional(),
  cursor: OrgWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OrgScalarFieldEnumSchema).optional(),
});
