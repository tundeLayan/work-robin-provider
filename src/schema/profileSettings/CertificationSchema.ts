import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB

export const certificationSchema = z.object({
  industry: z.string({
    required_error: ErrorMessages.required("Industry"),
  }),
  organization: z.string({
    required_error: ErrorMessages.required("Organization"),
  }),
  title: z.string({
    required_error: ErrorMessages.required("Certification Title"),
  }),
  verification_link: z.string({
    required_error: ErrorMessages.required("Certification Link"),
  }),
  issue_date: z.date({
    required_error: ErrorMessages.required("Issue Date"),
  }),
  expiry_date: z.date({
    required_error: ErrorMessages.required("Expiry Date"),
  }),
  // TODO: change this to accept pdf, docx or doc
  certificate_url: (typeof window === "undefined"
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
      return ["image/png", "image/svg+xml", "image/jpeg", "image/gif"].includes(
        file?.type as string,
      );
    }, "File must be an Image")
    .nullable()
    .optional(),
});

export type TCertificate = z.infer<typeof certificationSchema>;
