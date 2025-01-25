import { z } from 'zod';

export const TagOnPostScalarFieldEnumSchema = z.enum([
  'post_id',
  'tag_id',
  'created_at',
  'updated_at',
  'deleted_at',
]);
