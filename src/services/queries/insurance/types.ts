import { ReactNode } from "react";

export interface InsuranceType {
  type: string;
  policyNumber: string;
  provider: string;
  amount: string;
  issueDate: string;
  expiryDate: string;
}

export interface InsurancePlusActionType extends InsuranceType {
  action: ReactNode;
}
