import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const paymentSchema = z
  .object({
    payment_method: z.enum(["Direct Deposit", "PayPal"]),
    routing_number: z
      .string({
        required_error: ErrorMessages.required("Routing Number"),
      })
      .optional(),
    account_type: z
      .string({
        required_error: ErrorMessages.required("Account Type"),
      })
      .optional(),

    account_number: z
      .string({
        required_error: ErrorMessages.required("Account Number"),
      })
      .optional(),
    account_name: z
      .string({
        required_error: ErrorMessages.required("Account Name"),
      })
      .optional(),
    bank_name: z
      .string({
        required_error: ErrorMessages.required("Bank"),
      })
      .optional(),
    email: z
      .string({
        required_error: ErrorMessages.required("Email"),
      })
      .min(8, {})
      .email({ message: ErrorMessages.invalidEmail })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.payment_method === "Direct Deposit") {
      if (data.routing_number === undefined) {
        ctx.addIssue({
          path: ["routingNumber"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Routing Number"),
        });
      }
      if (data.account_type === undefined) {
        ctx.addIssue({
          path: ["acountType"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Type"),
        });
      }
      if (data.account_number === undefined) {
        ctx.addIssue({
          path: ["accountNumber"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Number"),
        });
      }
      if (data.account_name === undefined) {
        ctx.addIssue({
          path: ["accountName"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Name"),
        });
      }
      if (data.bank_name === undefined) {
        ctx.addIssue({
          path: ["bank"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Bank"),
        });
      }
    }
    if (data.payment_method === "PayPal") {
      if (data.email === undefined) {
        ctx.addIssue({
          path: ["email"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Email"),
        });
      }
    }
    return true;
  });

export type TPayment = z.infer<typeof paymentSchema>;
