import { z } from "zod";

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is Required").max(255).optional(),
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

export const registerSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is Required"),
  password: z
    .string()
    .min(1, "Password is Required")
    .min(8, "Password must be at least 8 characters long")
    .includes(String(/[0-9]/), {
      message: "Password must contain at least one number",
    })
    .includes(String(/[a-z]/), {
      message: "Password must contain at least one lowercase letter",
    })
    .includes(String(/[A-Z]/), {
      message: "Password must contain at least one uppercase letter",
    })
    .includes(String(/[^a-zA-Z\d]/), {
      message: "Password must contain at least one special character",
    }),
});
