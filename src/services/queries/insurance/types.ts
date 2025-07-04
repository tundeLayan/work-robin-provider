import { PaginationType } from "@/services/generalTypes";
import { ReactNode } from "react";

export interface InsuranceType {
  _id: string;
  user_id: string;
  insurance_type: string;
  provider: string;
  coverage_amount: string;
  issue_date: Date;
  expiry_date: Date;
  insurance_url: string;
  insurance_id: string;
  timestamp: number;
  created_at: string;
  updated_at: string;
  approval_status: "Pending";
  __v: number;
}

export interface InsurancePlusActionType extends InsuranceType {
  action: ReactNode;
}

export interface InsuranceResponse {
  insurances: Array<InsuranceType>;
  pagination: PaginationType;
}

export interface InsuranceRequest {
  data: {
    insurance_type: string;
    provider: string;
    policy_number: string;
    coverage_amount: string;
    issue_date: string;
    expiry_date: string;
    insurance_url: string;
  };
}
