import { PaginationType } from "@/services/generalTypes";
import { ReactNode } from "react";

export type PaymentMethodEnum = "Direct Deposit" | "PayPal";

export interface PaymentType {
  _id: string;
  user_id: string;
  email: string;
  payment_method: PaymentMethodEnum;
  routing_number: string;
  account_type: string;
  account_number: string;
  account_name: string;
  bank_name: string;
  payment_methods_id: string;
  timestamp: number;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface LicensesPlusActionType extends PaymentType {
  action: ReactNode;
}

export interface PaymentResponse {
  paymentMethods: Array<PaymentType>;
  pagination: PaginationType;
}

export interface PaymentRequest {
  email?: string;
  routing_number?: string;
  account_type?: string;
  account_number?: string;
  account_name?: string;
  bank_name?: string;
  payment_method: string;
}
