import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const companySchema = z.object({
  name: z.string({
    required_error: ErrorMessages.required("Name"),
  }),
  username: z.string({
    required_error: ErrorMessages.required("Username"),
  }),
  email: z
    .string({
      required_error: ErrorMessages.required("Email Address"),
    })
    .min(8, {})
    .email({ message: ErrorMessages.invalidEmail }),
  password: z.string({
    required_error: ErrorMessages.required("Password"),
  }),
});
