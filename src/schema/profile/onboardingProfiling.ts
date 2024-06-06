import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

// TODO: Move to a constant file
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png"];

export const formSchema = z.object({
  // form 1 - tax
  tax: z
    .string({
      required_error: ErrorMessages.required("Tax"),
    })
    .min(1, { message: ErrorMessages.length(1, "Tax") }),
  taxType: z
    .string({
      required_error: ErrorMessages.required("Tax type"),
    })
    .min(1, { message: ErrorMessages.length(1, "Tax type") }),
  title: z
    .string({
      required_error: ErrorMessages.required("Tax Title"),
    })
    .min(1, { message: ErrorMessages.length(1, "Tax Title") }),
  firstName: z
    .string({
      required_error: ErrorMessages.required("First Name"),
    })
    .min(1, { message: ErrorMessages.length(1, "First Name") }),
  middleName: z
    .string({
      required_error: ErrorMessages.required("Middle Name"),
    })
    .min(1, { message: ErrorMessages.length(1, "Middle Name") })
    .optional()
    .or(z.literal("")),
  lastName: z
    .string({
      required_error: ErrorMessages.required("Last Name"),
    })
    .min(1, { message: ErrorMessages.length(1, "Last Name") }),
  phone: z
    .string({
      required_error: ErrorMessages.required("Phone Number"),
    })
    .min(1, { message: ErrorMessages.length(11, "phone") }),

  // form 2 - location
  picture: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      if (!file) return;
      return ACCEPTED_FILE_TYPES.includes(file?.type);
    }, "File must be a PNG"),
  street: z
    .string({
      required_error: ErrorMessages.required("street"),
    })
    .min(1, {
      message: ErrorMessages.length(1, "Street"),
    }),

  city: z
    .string({
      required_error: ErrorMessages.required("City"),
    })
    .min(1, { message: ErrorMessages.length(1, "City") }),
  zipCode: z
    .string({
      required_error: ErrorMessages.required("Zip Code"),
    })
    .min(1, { message: ErrorMessages.length(1, "Zip Code") }),
  state: z
    .string({
      required_error: ErrorMessages.required("State"),
    })
    .min(1, { message: ErrorMessages.length(1, "State") }),
  country: z
    .string({
      required_error: ErrorMessages.required("Country"),
    })
    .min(1, { message: ErrorMessages.length(1, "Country") }),

  // form 3 - Resume
  // TODO: change this to accept pdf, docx or doc
  resume: z
    .instanceof(File)
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
      ].includes(file?.type);
    }, "File must be a PDF")
    .nullable(),

  // form 4 - your skills
  yourSkills: z
    .array(
      z.string().min(1, { message: ErrorMessages.required("Your skills") }),
    )
    .min(1, { message: ErrorMessages.required("Your skills") }),

  // form 5 - Bio
  yourBio: z
    .string({
      required_error: ErrorMessages.required("Your Bio"),
    })
    .min(8, { message: ErrorMessages.length(8, "Bio") }),
});
