import { z } from 'zod';
import { OrgUpdateManyMutationInputObjectSchema } from './objects/OrgUpdateManyMutationInput.schema';
import { OrgWhereInputObjectSchema } from './objects/OrgWhereInput.schema';

export const OrgUpdateManySchema = z.object({
  data: OrgUpdateManyMutationInputObjectSchema,
  where: OrgWhereInputObjectSchema.optional(),
});
