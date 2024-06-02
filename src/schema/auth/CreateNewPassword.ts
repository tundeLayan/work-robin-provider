import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const createNewPasswordSchema = z
  .object({
    password: z
      .string({ required_error: ErrorMessages.required("Password") })
      .min(8, { message: ErrorMessages.length(8, "Password") })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/^\S*$/, { message: "Password must not contain spaces" }),
    confirmPassword: z.string({
      required_error: ErrorMessages.required("Password"),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
