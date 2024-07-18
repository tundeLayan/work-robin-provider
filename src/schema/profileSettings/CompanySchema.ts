import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const companySchema = z.object({
  service_company_name: z.string({
    required_error: ErrorMessages.required("Name"),
  }),
  service_company_admin_username: z.string({
    required_error: ErrorMessages.required("Username"),
  }),
  service_company_admin_email: z
    .string({
      required_error: ErrorMessages.required("Email Address"),
    })
    .min(8, {})
    .email({ message: ErrorMessages.invalidEmail }),
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
});
