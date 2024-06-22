import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const profileRatesSchema = z.object({
  onsite: z.string({
    required_error: ErrorMessages.required("Onsite"),
  }),
  virtual: z.string({
    required_error: ErrorMessages.required("Virtual"),
  }),
  location: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: ErrorMessages.selectOne("Location"),
  }),
  travel: z.string({
    required_error: ErrorMessages.required("Travel"),
  }),
});
