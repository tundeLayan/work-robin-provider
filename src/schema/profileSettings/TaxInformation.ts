import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const taxSchema = z
  .object({
    taxType: z.enum(["SSN", "TIN"]),
    ssn: z
      .string({
        required_error: ErrorMessages.required("SSN"),
      })
      .optional(),
    tin: z
      .string({
        required_error: ErrorMessages.required("TIN"),
      })
      .optional(),
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
    electronic: z.boolean().refine((val) => val, {
      message: "You must agree to receive 1099 electronically",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.taxType === "SSN") {
      if (data.ssn === undefined) {
        ctx.addIssue({
          path: ["ssn"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("SSN"),
        });
      }
    }
    if (data.taxType === "TIN") {
      if (data.tin === undefined) {
        ctx.addIssue({
          path: ["tin"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("TIN"),
        });
      }
    }
  });
