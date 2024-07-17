import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const taxSchema = z
  .object({
    // tax_type: z.string({
    //   required_error: ErrorMessages.required("Tax Type"),
    // }),
    tax_id_type: z.enum(["SSN", "TIN"]),
    // ssn: z
    //   .string({
    //     required_error: ErrorMessages.required("SSN"),
    //   })
    //   .optional(),
    // tin: z
    //   .string({
    //     required_error: ErrorMessages.required("TIN"),
    //   })
    //   .optional(),
    full_name: z.string({
      required_error: ErrorMessages.required("Full Name"),
    }),
    business_tax_id_number: z
      .string({
        required_error: ErrorMessages.required("Business Tax Id"),
      })
      .optional(),
    tax_id_number: z
      .string({
        required_error: ErrorMessages.required("Business Tax Id"),
      })
      .optional(),
    street_address: z.string({
      required_error: ErrorMessages.required("Street Address"),
    }),
    house_number: z.string({
      required_error: ErrorMessages.required("Suite/Floor"),
    }),
    city: z.string({
      required_error: ErrorMessages.required("City"),
    }),
    state: z.string({
      required_error: ErrorMessages.required("State"),
    }),
    zip_code: z.string({
      required_error: ErrorMessages.required("ZipCode"),
    }),
    country: z.string({
      required_error: ErrorMessages.required("Country"),
    }),
    receive_1099_electronically: z.boolean(),
    certify: z.boolean().refine((val) => val, {
      message: "You must agree to the terms",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.tax_id_type === "SSN") {
      if (data.tax_id_number === undefined) {
        ctx.addIssue({
          path: ["tax_id_number"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("SSN"),
        });
      }
      if (data.tax_id_number?.length !== 9) {
        ctx.addIssue({
          path: ["tax_id_number"],
          code: z.ZodIssueCode.custom,
          message: "SSN must be 9 digits",
        });
      }
    }
    if (data.tax_id_type === "TIN") {
      if (data.full_name === undefined) {
        ctx.addIssue({
          path: ["full_name"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("TIN"),
        });
      }
    }
  });
