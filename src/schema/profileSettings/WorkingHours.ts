import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

// Todo add refine function to make sure days is only validated when custom is selected. Also check that days time is checked when a day is checked

export const workingHoursSchema = z
  .object({
    status: z.enum(["always available", "away", "custom"], {
      required_error: ErrorMessages.selectOne("working hour"),
    }),
    pause: z.boolean().default(false).optional(),
    monday: z.boolean().default(false).optional(),
    monday_from: z.string().optional(),
    monday_to: z.string().optional(),

    tuesday: z.boolean().default(false).optional(),
    tuesday_from: z.string().optional(),
    tuesday_to: z.string().optional(),

    wednesday: z.boolean().default(false).optional(),
    wednesday_from: z.string().optional(),
    wednesday_to: z.string().optional(),

    thursday: z.boolean().default(false).optional(),
    thursday_from: z.string().optional(),
    thursday_to: z.string().optional(),

    friday: z.boolean().default(false).optional(),
    friday_from: z.string().optional(),
    friday_to: z.string().optional(),

    saturday: z.boolean().default(false).optional(),
    saturday_from: z.string().optional(),
    saturday_to: z.string().optional(),

    sunday: z.boolean().default(false).optional(),
    sunday_from: z.string().optional(),
    sunday_to: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.status === "custom") {
      if (data.monday) {
        if (!data.monday_from) {
          ctx.addIssue({
            path: ["monday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Monday Start Time"),
          });
        }
        if (!data.monday_to) {
          ctx.addIssue({
            path: ["monday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Monday End Time"),
          });
        }
      }
      if (data.tuesday) {
        if (!data.tuesday_from) {
          ctx.addIssue({
            path: ["tuesday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Tuesday Start Time"),
          });
        }
        if (!data.tuesday_to) {
          ctx.addIssue({
            path: ["tuesday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Tuesday End Time"),
          });
        }
      }
      if (data.wednesday) {
        if (!data.wednesday_from) {
          ctx.addIssue({
            path: ["wednesday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Wednesday Start Time"),
          });
        }
        if (!data.wednesday_to) {
          ctx.addIssue({
            path: ["wednesday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Wednesday End Time"),
          });
        }
      }
      if (data.thursday) {
        if (!data.thursday_from) {
          ctx.addIssue({
            path: ["thursday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Thursday Start Time"),
          });
        }
        if (!data.thursday_to) {
          ctx.addIssue({
            path: ["thursday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Thursday End Time"),
          });
        }
      }
      if (data.friday) {
        if (!data.friday_from) {
          ctx.addIssue({
            path: ["friday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Friday Start Time"),
          });
        }
        if (!data.friday_to) {
          ctx.addIssue({
            path: ["friday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Friday End Time"),
          });
        }
      }
      if (data.saturday) {
        if (!data.saturday_from) {
          ctx.addIssue({
            path: ["saturday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Saturday Start Time"),
          });
        }
        if (!data.saturday_to) {
          ctx.addIssue({
            path: ["saturday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Saturday End Time"),
          });
        }
      }
      if (data.sunday) {
        if (!data.sunday_from) {
          ctx.addIssue({
            path: ["sunday_from"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Sunday Start Time"),
          });
        }
        if (!data.sunday_to) {
          ctx.addIssue({
            path: ["sunday_to"],
            code: z.ZodIssueCode.custom,
            message: ErrorMessages.required("Sunday End Time"),
          });
        }
      }
    }
  });
