import { z } from 'zod';

export const PetScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'name',
  'race',
  'deficiencies',
  'description',
  'owner_id',
  'age',
  'energy',
  'available',
  'size',
  'created_at',
  'updated_at',
  'deleted_at',
]);
