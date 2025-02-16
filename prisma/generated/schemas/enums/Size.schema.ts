import { z } from 'zod';

export const SizeSchema = z.enum(['SMALL', 'MIDDLE', 'BIG', 'GIANT']);
