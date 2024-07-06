import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const signupSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Email"),
    })
    .min(1, {})
    .email({ message: ErrorMessages.invalidEmail }),
});

export const signupSchema2 = z.object({
  firstName: z
    .string({ required_error: ErrorMessages.required("First Name") })
    .min(1, { message: ErrorMessages.required("First Name") }),
  lastName: z
    .string({ required_error: ErrorMessages.required("Last Name") })
    .min(1, { message: ErrorMessages.required("Last name") }),
  password: z
    .string({ required_error: ErrorMessages.required("Password") })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/^\S*$/, { message: "Password must not contain spaces" }),
});
