import { ReactNode } from "react";

export interface CertificationType {
  title: string;
  industry: string;
  link: string;
  company: string;
  issueDate: string;
  expiryDate: string;
}

export interface CertificationPlusActionType extends CertificationType {
  action: ReactNode;
}
