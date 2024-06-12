import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const taxSchema = z.object({
  taxType: z
    .string({
      required_error: ErrorMessages.required("Tax type"),
    })
    .min(1, { message: ErrorMessages.length(1, "Tax type") }),
  ssn: z.string({
    required_error: ErrorMessages.required("TIN"),
  }),
  tinName: z.string({
    required_error: ErrorMessages.required("TIN Name"),
  }),
  as: z.string(),

  address: z.string({
    required_error: ErrorMessages.required("Address"),
  }),
  suite: z.string({
    required_error: ErrorMessages.required("Suite/Floor"),
  }),
  city: z.string({
    required_error: ErrorMessages.required("City"),
  }),
  state: z.string({
    required_error: ErrorMessages.required("State"),
  }),
  zipcode: z.string({
    required_error: ErrorMessages.required("ZipCode"),
  }),
  country: z.string({
    required_error: ErrorMessages.required("Country"),
  }),
  electronic: z.boolean().default(false).optional(),
});
