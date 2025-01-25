import { z } from 'zod';

export const TypeSchema = z.enum(['DOG', 'CAT', 'OTHER']);
