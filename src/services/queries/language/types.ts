import { ReactNode } from "react";

export interface LanguagenType {
  language: string;
  level: string;
}

export interface LanguagenPlusActionType extends LanguagenType {
  action: ReactNode;
}
