import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'password_hash',
  'created_at',
  'updated_at',
  'deleted_at',
  'role',
]);
