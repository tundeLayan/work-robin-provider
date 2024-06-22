import { ReactNode } from "react";

export interface LicensesType {
  license: string;
  licenseNumber: string;
  state: string;
  issueDate: string;
  expiryDate: string;
}

export interface LicensesPlusActionType extends LicensesType {
  action: ReactNode;
}
