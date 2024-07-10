import { PaginationType } from "@/services/generalTypes";
import { ReactNode } from "react";

export interface LanguageType {
  _id: string;
  language_id: string;
  language: string;
  proficiency: string;
}

export interface LanguagePlusActionType extends LanguageType {
  action: ReactNode;
}

export interface LanguageResponse {
  languages: Array<LanguageType>;
  pagination: PaginationType;
}

export interface LanguageRequest {
  data: {
    language: string;
    proficiency: string;
  };
}
