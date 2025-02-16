import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'owner_id',
  'pet_id',
  'published_at',
  'deleted_at',
  'created_at',
]);
