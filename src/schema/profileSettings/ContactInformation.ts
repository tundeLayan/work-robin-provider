import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const contactSchema = z.object({
  first_name: z.string({
    required_error: ErrorMessages.required("First Name"),
  }),
  last_name: z.string({
    required_error: ErrorMessages.required("Last Name"),
  }),
  ssn: z.string({
    required_error: ErrorMessages.required("SSN/TIN"),
  }),
  countryCode: z.string({
    required_error: ErrorMessages.required("Country Code"),
  }),
  workNumber: z.string({
    required_error: ErrorMessages.required("Work Number"),
  }),
  email: z
    .string({
      required_error: ErrorMessages.required("Email Address"),
    })
    .min(8, {})
    .email({ message: ErrorMessages.invalidEmail }),
  timezone: z.string({
    required_error: ErrorMessages.required("Timezone"),
  }),
  country: z.string({
    required_error: ErrorMessages.required("Country"),
  }),
  address: z.string({
    required_error: ErrorMessages.required("Address"),
  }),
  state: z.string({
    required_error: ErrorMessages.required("State"),
  }),
  zipcode: z.string({
    required_error: ErrorMessages.required("ZipCode"),
  }),
  city: z.string({
    required_error: ErrorMessages.required("City"),
  }),
  privacy: z.boolean().default(false),
});
