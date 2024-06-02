import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const otpSchema = z.object({
  pin: z
    .string({
      required_error: ErrorMessages.required("OTP"),
    })
    .min(6, { message: ErrorMessages.length(6, "one-time password") }),
});
