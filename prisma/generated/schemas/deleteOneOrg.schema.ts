import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';

export const OrgDeleteOneSchema = z.object({
  where: OrgWhereUniqueInputObjectSchema,
});
