import { z } from 'zod';
import { OrgWhereInputObjectSchema } from './objects/OrgWhereInput.schema';

export const OrgDeleteManySchema = z.object({
  where: OrgWhereInputObjectSchema.optional(),
});
