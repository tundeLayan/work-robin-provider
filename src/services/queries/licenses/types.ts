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

export interface LicenceResponse {
  licences: Array<LicensesType>;
  pagination: {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    nextPage: any;
    previousPage: any;
    limit: number;
  };
}

export interface LicenceRequest {
  data: {
    licence_type: string;
    provider: string;
    policy_number: string;
    coverage_amount: string;
    issue_date: string;
    expiry_date: string;
    licence_url: string;
  };
}
