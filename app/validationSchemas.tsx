import { z } from "zod";

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is Required")
    .max(255)
    .optional(),
  description: z
    .string()
    .min(1, "Description is Required")
    .max(2000)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "User ID is Required")
    .max(255)
    .optional()
    .nullable(),
});
