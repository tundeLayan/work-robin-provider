import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const resetSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Email"),
    })
    .min(1, {})
    .email({ message: ErrorMessages.invalidEmail }),
});
