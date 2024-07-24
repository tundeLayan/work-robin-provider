import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB

export const licenseSchema = z
  .object({
    license_title: z.string({
      required_error: ErrorMessages.required("License"),
    }),
    license_number: z.string({
      required_error: ErrorMessages.required("LicenseNumber"),
    }),
    state: z.string({
      required_error: ErrorMessages.required("State"),
    }),
    license_link: z
      .string({
        required_error: ErrorMessages.required("License"),
      })
      .optional(),
    license_url: z.string({
      required_error: ErrorMessages.required("License Url"),
    }),
    issue_date: z.date({
      required_error: ErrorMessages.required("Issue Date"),
    }),
    expiry_date: z.date({
      required_error: ErrorMessages.required("Expiry Date"),
    }),
    // TODO: change this to accept pdf, docx or doc
    certificate: (typeof window === "undefined" ? z.any() : z.instanceof(File))
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
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file?.type as string);
      }, "File must be a PDF")
      .nullable()
      .optional(),
  })
  .superRefine((data, ctx) => {
    const today = new Date();
    if (data.issue_date >= today) {
      ctx.addIssue({
        path: ["issue_date"],
        code: z.ZodIssueCode.custom,
        message: "Issue date must be before today",
      });
    }
    if (data.issue_date >= data.expiry_date) {
      ctx.addIssue({
        path: ["issue_date"],
        code: z.ZodIssueCode.custom,
        message: "Expiry date must be less than the issue date",
      });
    }
  });

export type TLicense = z.infer<typeof licenseSchema>;
