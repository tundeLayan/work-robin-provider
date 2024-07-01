import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const profileRatesSchema = z.object({
  onsite_hourly_rate: z.coerce.number({
    required_error: ErrorMessages.required("Onsite"),
  }),
  virtual_hourly_rate: z.coerce.number({
    required_error: ErrorMessages.required("Virtual"),
  }),
  location: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: ErrorMessages.selectOne("Location"),
  }),
  max_travel_distance: z.coerce.number({
    required_error: ErrorMessages.required("Travel"),
  }),
});

export type TProfileRatesSchema = z.infer<typeof profileRatesSchema>;
