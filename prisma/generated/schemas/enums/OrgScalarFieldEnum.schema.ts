import { z } from 'zod';

export const OrgScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'phone',
  'cnpj',
  'uf',
  'city',
  'complement',
  'country',
  'zip_code',
  'latitude',
  'longitude',
  'owner_id',
  'created_at',
  'updated_at',
  'deleted_at',
]);
