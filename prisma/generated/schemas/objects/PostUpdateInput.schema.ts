import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TagOnPostUpdateManyWithoutPostNestedInputObjectSchema } from './TagOnPostUpdateManyWithoutPostNestedInput.schema';
import { OrgUpdateOneRequiredWithoutPostNestedInputObjectSchema } from './OrgUpdateOneRequiredWithoutPostNestedInput.schema';
import { PetUpdateOneRequiredWithoutPostsNestedInputObjectSchema } from './PetUpdateOneRequiredWithoutPostsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    published_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    deleted_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .lazy(() => TagOnPostUpdateManyWithoutPostNestedInputObjectSchema)
      .optional(),
    org: z
      .lazy(() => OrgUpdateOneRequiredWithoutPostNestedInputObjectSchema)
      .optional(),
    pet: z
      .lazy(() => PetUpdateOneRequiredWithoutPostsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PostUpdateInputObjectSchema = Schema;
