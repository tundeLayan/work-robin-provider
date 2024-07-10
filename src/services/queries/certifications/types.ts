import { PaginationType } from "@/services/generalTypes";
import { ReactNode } from "react";

export interface CertificationType {
  title: string;
  industry: string;
  verification_link: string;
  organization: string;
  issue_date: string;
  expiry_date: string;
  certificate_id: string;
}

export interface CertificationPlusActionType extends CertificationType {
  action: ReactNode;
}

export interface CertificationResponse {
  certifications: Array<CertificationType>;
  pagination: PaginationType;
}

export interface CertificationRequest {
  data: {
    industry: string;
    organization: string;
    title: string;
    verification_link: string;
    issue_date: string;
    expiry_date: string;
    certificate_url: string;
  };
}
