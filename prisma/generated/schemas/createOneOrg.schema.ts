import { z } from 'zod';
import { OrgCreateInputObjectSchema } from './objects/OrgCreateInput.schema';
import { OrgUncheckedCreateInputObjectSchema } from './objects/OrgUncheckedCreateInput.schema';

export const OrgCreateOneSchema = z.object({
  data: z.union([
    OrgCreateInputObjectSchema,
    OrgUncheckedCreateInputObjectSchema,
  ]),
});
