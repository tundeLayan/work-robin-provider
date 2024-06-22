import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const backgroundSchemaSchema = z.object({
  firstName: z.string({
    required_error: ErrorMessages.required("First Name"),
  }),
  lastName: z.string({
    required_error: ErrorMessages.required("Last Name"),
  }),
  zipCode: z.string({
    required_error: ErrorMessages.required("Zip Code"),
  }),
  phone: z.string({
    required_error: ErrorMessages.required("Phone Number"),
  }),
  verify: z.boolean().default(false),
  email: z
    .string({
      required_error: ErrorMessages.required("Email Address"),
    })
    .min(8, {})
    .email({ message: ErrorMessages.invalidEmail }),
  cardName: z.string({
    required_error: ErrorMessages.required("Card Name"),
  }),
  cardNumber: z
    .string({
      required_error: ErrorMessages.required("Card Number"),
    })
    .length(16),
  expiryMonth: z.string({
    required_error: ErrorMessages.required("Month"),
  }),
  expiryYear: z.string({
    required_error: ErrorMessages.required("Year"),
  }),
  cvv: z.string({
    required_error: ErrorMessages.required("Cvv"),
  }),
  address: z.string({
    required_error: ErrorMessages.required("Address"),
  }),
  city: z.string({
    required_error: ErrorMessages.required("City"),
  }),
  state: z.string({
    required_error: ErrorMessages.required("State"),
  }),
  country: z.string({
    required_error: ErrorMessages.required("Country"),
  }),
  billingZipCode: z.string({
    required_error: ErrorMessages.required("Zip Code"),
  }),
});
