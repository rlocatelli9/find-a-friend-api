import { z } from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'ORG', 'MEMBER']);
