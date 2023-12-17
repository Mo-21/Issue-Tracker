import { z } from "zod";
import { RegistrationFormType } from "./registration/page";

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

  status: z.string().min(1, "Status is Required").max(255).optional(),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Name is Required").max(255),
  email: z.string().email("Invalid email").min(1, "Email is Required"),
  password: z
    .string()
    .min(1, "Password is Required")
    .min(8, "Password must be at least 8 characters long")
    .refine((value) => /\d/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[^a-zA-Z\d]/.test(value), {
      message: "Password must contain at least one special character",
    }),
  passwordConfirmation: z.string().min(1, "Password Confirmation is Required"),
});

export const validatePasswords = (data: RegistrationFormType) => {
  try {
    registerSchema.parse(data);
    if (data.password !== data.passwordConfirmation) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
};
