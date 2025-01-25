import { z } from 'zod';
import { OrgWhereUniqueInputObjectSchema } from './objects/OrgWhereUniqueInput.schema';

export const OrgFindUniqueSchema = z.object({
  where: OrgWhereUniqueInputObjectSchema,
});
