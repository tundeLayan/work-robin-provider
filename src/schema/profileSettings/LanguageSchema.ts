import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const languageSchema = z.object({
  language: z.string({
    required_error: ErrorMessages.required("Language"),
  }),
  proficiency: z.string({
    required_error: ErrorMessages.required("Level"),
  }),
});

export type TLanguage = z.infer<typeof languageSchema>;
