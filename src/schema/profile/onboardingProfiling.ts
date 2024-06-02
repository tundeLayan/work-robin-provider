import { z } from "zod";

import { ErrorMessages } from "@/constants/errors";

export const form1Schema = z.object({
  address: z
    .string({
      required_error: ErrorMessages.required("Address"),
    })
    .min(8, { message: ErrorMessages.length(8, "Address") }),
  industry: z
    .string({
      required_error: ErrorMessages.required("Number of Employees"),
    })
    .min(8, { message: ErrorMessages.length(8, "Industry") }),
  website: z
    .string({
      required_error: ErrorMessages.required("Number of Employees"),
    })
    .url({ message: ErrorMessages.invalidURL })
    .min(8, { message: ErrorMessages.length(8, "Website") }),
  phone: z
    .string({
      required_error: ErrorMessages.required("Number of Employees"),
    })
    .min(8, { message: ErrorMessages.length(11, "phone") }),
  numberOfEmployees: z
    .string({
      required_error: ErrorMessages.required("Number of Employees"),
    })
    .min(1),
});

export const formSchema = z.object({
  address: z
    .string({
      required_error: ErrorMessages.required("Address"),
    })
    .min(8, { message: ErrorMessages.length(8, "Address") }),
  industry: z
    .string({
      required_error: ErrorMessages.required("Industry"),
    })
    .min(1, { message: ErrorMessages.length(8, "Industry") }),
  website: z
    .string({
      required_error: ErrorMessages.required("Website"),
    })
    .url({ message: ErrorMessages.invalidURL })
    .min(1, { message: ErrorMessages.length(8, "Website") }),
  phone: z
    .string({
      required_error: ErrorMessages.required("Phone Number"),
    })
    .min(1, { message: ErrorMessages.length(11, "phone") }),
  numberOfEmployees: z
    .string({
      required_error: ErrorMessages.required("Number of Employees"),
    })
    .min(1),

  // form 2 - TAX
  tax: z
    .string({
      required_error: ErrorMessages.required("Tax"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax") }),
  ein: z
    .string({
      required_error: ErrorMessages.required(
        "Employer Identification Number (EIN)",
      ),
    })
    .min(1, {
      message: ErrorMessages.length(8, "Employer Identification Number (EIN)"),
    }),
  taxType: z
    .string({
      required_error: ErrorMessages.required("Tax type"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax type") }),
  taxAddress: z
    .string({
      required_error: ErrorMessages.required("Tax Address"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax Address") }),
  taxSuite: z
    .string({
      required_error: ErrorMessages.required("Tax Suite"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax Suite") }),
  taxCity: z
    .string({
      required_error: ErrorMessages.required("Tax City"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax City") }),
  taxState: z
    .string({
      required_error: ErrorMessages.required("Tax State"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax State") }),
  taxZipcode: z
    .string({
      required_error: ErrorMessages.required("Tax Zip Code"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax Zip Code") }),
  taxCountry: z
    .string({
      required_error: ErrorMessages.required("Tax Country"),
    })
    .min(1, { message: ErrorMessages.length(8, "Tax Country") }),

  // form 3 - Card
  cardType: z
    .string({
      required_error: ErrorMessages.required("Card Type"),
    })
    .min(1, { message: ErrorMessages.length(1, "Card Type") }),
  cardName: z
    .string({
      required_error: ErrorMessages.required("Card Name"),
    })
    .min(8, { message: ErrorMessages.length(1, "Card Name") }),
  cardNumber: z
    .string({
      required_error: ErrorMessages.required("Card Number"),
    })
    .min(8, { message: ErrorMessages.length(8, "Card Number") }),
  expirationMonth: z
    .string({
      required_error: ErrorMessages.required("Expiration Month"),
    })
    .min(1, { message: ErrorMessages.length(1, "Expiration Month") }),
  expirationYear: z
    .string({
      required_error: ErrorMessages.required("Expiration Year"),
    })
    .min(1, { message: ErrorMessages.length(1, "Expiration Year") }),
  cvv: z
    .string({
      required_error: ErrorMessages.required("cvv"),
    })
    .min(3, { message: ErrorMessages.length(3, "cvv") }),
  saveCardDetails: z.boolean(),

  // form 4 - Invite
  teamMembersEmails: z.array(
    z.object({
      teamMembersEmail: z
        .string()
        .email({ message: ErrorMessages.invalidEmail }),
    }),
  ),

  // form 5 - person of contact
  personOfContactFirstName: z
    .string({
      required_error: ErrorMessages.required("First Name"),
    })
    .min(8, { message: ErrorMessages.required("First Name") }),
  personOfContactLastName: z
    .string({
      required_error: ErrorMessages.required("Last Name"),
    })
    .min(8, { message: ErrorMessages.required("Last Name") }),
  personOfContactEmail: z
    .string({
      required_error: ErrorMessages.required("First Name"),
    })
    .email({ message: ErrorMessages.invalidEmail })
    .min(8, { message: ErrorMessages.required("First Name") }),
  personOfContactPhone: z
    .string({
      required_error: ErrorMessages.required("Phone"),
    })
    .min(8, { message: ErrorMessages.required("Phone") }),
});
