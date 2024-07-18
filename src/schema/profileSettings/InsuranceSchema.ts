import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB

export const insuranceSchema = z
  .object({
    insurance_type: z.string({
      required_error: ErrorMessages.required("Insurance Type"),
    }),
    provider: z.string({
      required_error: ErrorMessages.required("Provider"),
    }),
    policy_number: z.string({
      required_error: ErrorMessages.required("Policy Number"),
    }),
    coverage_amount: z.string({
      required_error: ErrorMessages.required("Coverage Amount"),
    }),
    issue_date: z.date({
      required_error: ErrorMessages.required("Issue Date"),
    }),
    expiry_date: z.date({
      required_error: ErrorMessages.required("Expiry Date"),
    }),
    // TODO: change this to accept pdf, docx or doc
    insurance_url: (typeof window === "undefined"
      ? z.any()
      : z.instanceof(File)
    )
      .optional()
      .refine((file) => {
        if (!file) return;
        // console.log("file", file);
        return !file || file?.size <= MAX_UPLOAD_SIZE;
      }, "File size must be less than 3MB")
      .refine((file) => {
        if (!file) return;
        // console.log("file", file);
        return [
          "image/png",
          "image/svg+xml",
          "image/jpeg",
          "image/gif",
        ].includes(file?.type as string);
      }, "File must be a PDF")
      .nullable()
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.issue_date > data.expiry_date) {
      ctx.addIssue({
        path: ["issue_date"],
        code: z.ZodIssueCode.custom,
        message: "Expiry date must be less than the issue date",
      });
    }
  });

export type TInsurance = z.infer<typeof insuranceSchema>;
