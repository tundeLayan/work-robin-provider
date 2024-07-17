import { PaginationType } from "@/services/generalTypes";
import { ReactNode } from "react";

export interface LicensesType {
  _id: string;
  user_id: string;
  license_number: string;
  state: string;
  issue_date: Date;
  expiry_date: Date;
  license_url: string;
  license_id: string;
  timestamp: number;
  created_at: string;
  updated_at: string;
  approval_status: "Pending";
  __v: number;
}

export interface LicensesPlusActionType extends LicensesType {
  action: ReactNode;
}

export interface LicenceResponse {
  licenses: Array<LicensesType>;
  pagination: PaginationType;
}

export interface LicenceRequest {
  data: {
    license_number: string;
    state: string;
    license_title: string;
    issue_date: string;
    license_link?: string;
    expiry_date: string;
    license_url: string;
  };
}
