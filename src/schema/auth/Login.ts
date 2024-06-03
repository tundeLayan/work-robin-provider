import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Email"),
    })
    .min(8, {})
    .email({ message: ErrorMessages.invalidEmail }),
  password: z.string({
    required_error: ErrorMessages.required("Password"),
  }),
});

export const ConfirmIdentityOTPSchema = z.object({
  identity: z.enum(["otp", "third-party"], {
    required_error: ErrorMessages.required("Identity"),
  }),
});
