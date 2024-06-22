import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

// Todo add refine function to make sure days is only validated when custom is selected. Also check that days time is checked when a day is checked

export const workingHoursSchema = z.object({
  workingHours: z.enum(["always", "away", "custom"], {
    required_error: ErrorMessages.selectOne("working hour"),
  }),
  pause: z.boolean().default(false).optional(),
  monday_check: z.boolean().default(false).optional(),
  monday_from: z.string().optional(),
  monday_to: z.string().optional(),

  tuesday_check: z.boolean().default(false).optional(),
  tuesday_from: z.string().optional(),
  tuesday_to: z.string().optional(),

  wednesday_check: z.boolean().default(false).optional(),
  wednesday_from: z.string().optional(),
  wednesday_to: z.string().optional(),

  thursday_check: z.boolean().default(false).optional(),
  thursday_from: z.string().optional(),
  thursday_to: z.string().optional(),

  friday_check: z.boolean().default(false).optional(),
  friday_from: z.string().optional(),
  friday_to: z.string().optional(),

  saturday_check: z.boolean().default(false).optional(),
  saturday_from: z.string().optional(),
  saturday_to: z.string().optional(),

  sunday_check: z.boolean().default(false).optional(),
  sunday_from: z.string().optional(),
  sunday_to: z.string().optional(),
});
