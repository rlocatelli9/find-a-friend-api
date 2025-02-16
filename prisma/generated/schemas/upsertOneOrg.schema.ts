import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';
import { OrgCreateInputObjectSchema } from './objects/OrgCreateInput.schema';
import { OrgUncheckedCreateInputObjectSchema } from './objects/OrgUncheckedCreateInput.schema';
import { OrgUpdateInputObjectSchema } from './objects/OrgUpdateInput.schema';
import { OrgUncheckedUpdateInputObjectSchema } from './objects/OrgUncheckedUpdateInput.schema';

export const OrgUpsertSchema = z.object({
  where: OrgWhereUniqueInputObjectSchema,
  create: z.union([
    OrgCreateInputObjectSchema,
    OrgUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    OrgUpdateInputObjectSchema,
    OrgUncheckedUpdateInputObjectSchema,
  ]),
});
