import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

// TODO: Move to a constant file
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
// const ACCEPTED_FILE_TYPES = ["image/"];

export const profileBioSchema = z.object({
  // TODO: change this to accept pdf, docx or doc
  resume_url: (typeof window === "undefined" ? z.any() : z.instanceof(File))
    .optional()
    .refine((file) => {
      if (!file) return;
      return !file || file?.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      if (!file) return;
      return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file?.type as string);
    }, "File must be a PDF")
    .nullable()
    .optional(),
  // resume_url: z.string().optional(),
  bio: z.string({
    required_error: ErrorMessages.required("Bio"),
  }),
});

export type TProfileBio = z.infer<typeof profileBioSchema>;
