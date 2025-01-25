import { z } from 'zod';
import { OrgUpdateInputObjectSchema } from './objects/OrgUpdateInput.schema';
import { OrgUncheckedUpdateInputObjectSchema } from './objects/OrgUncheckedUpdateInput.schema';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';

export const OrgUpdateOneSchema = z.object({
  data: z.union([
    OrgUpdateInputObjectSchema,
    OrgUncheckedUpdateInputObjectSchema,
  ]),
  where: OrgWhereUniqueInputObjectSchema,
});
