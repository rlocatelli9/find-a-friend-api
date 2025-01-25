import { z } from 'zod';
import { OrgCreateManyInputObjectSchema } from './objects/OrgCreateManyInput.schema';

export const OrgCreateManySchema = z.object({
  data: z.union([
    OrgCreateManyInputObjectSchema,
    z.array(OrgCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
