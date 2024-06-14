import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const paymentSchema = z
  .object({
    paymentType: z.enum(["direct", "paypal"]),
    routingNumber: z
      .string({
        required_error: ErrorMessages.required("Routing Number"),
      })
      .optional(),
    accountType: z
      .string({
        required_error: ErrorMessages.required("Account Type"),
      })
      .optional(),

    accountNumber: z
      .string({
        required_error: ErrorMessages.required("Account Number"),
      })
      .optional(),
    accountName: z
      .string({
        required_error: ErrorMessages.required("Account Name"),
      })
      .optional(),
    bank: z
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
    if (data.paymentType === "direct") {
      if (data.routingNumber === undefined) {
        ctx.addIssue({
          path: ["routingNumber"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Routing Number"),
        });
      }
      if (data.accountType === undefined) {
        ctx.addIssue({
          path: ["acountType"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Type"),
        });
      }
      if (data.accountNumber === undefined) {
        ctx.addIssue({
          path: ["accountNumber"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Number"),
        });
      }
      if (data.accountName === undefined) {
        ctx.addIssue({
          path: ["accountName"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Account Name"),
        });
      }
      if (data.bank === undefined) {
        ctx.addIssue({
          path: ["bank"],
          code: z.ZodIssueCode.custom,
          message: ErrorMessages.required("Bank"),
        });
      }
    }
    if (data.paymentType === "paypal") {
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
