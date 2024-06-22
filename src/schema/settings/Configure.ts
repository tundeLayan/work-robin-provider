import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const codeSchema = z.object({
  verificationCode: z.string({
    required_error: ErrorMessages.required("Verification code"),
  }),
});
