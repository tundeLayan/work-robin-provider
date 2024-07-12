import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const verifyOtpSchema = z.object({
  code: z
    .string({
      required_error: ErrorMessages.required("OTP"),
    })
    .min(6, { message: ErrorMessages.length(6, "one-time password") }),
});
