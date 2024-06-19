import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const passwordSettingsSchema = z.object({
  oldPassword: z.string({
    required_error: ErrorMessages.required("Password"),
  }),

  password: z.string({
    required_error: ErrorMessages.required("Password"),
  }),

  confirmPassword: z.string({
    required_error: ErrorMessages.required("Password"),
  }),
});
