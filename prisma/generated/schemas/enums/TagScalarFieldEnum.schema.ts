import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum([
  'id',
  'value',
  'owner_id',
  'created_at',
  'updated_at',
  'deleted_at',
]);
