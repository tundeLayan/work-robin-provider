"use client";

import { ReactNode } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { LanguagenType } from "@/services/queries/language/types";

type LanguageColumms = LanguagenType & {
  action: ReactNode;
};

const columnHelper = createColumnHelper<LanguageColumms>();

export const columns = [
  columnHelper.accessor("language", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Language",
  }),
  columnHelper.accessor("level", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Level",
  }),

  columnHelper.accessor("action", {
    cell: (info) => {
      return <div>{info.getValue() || "-"}</div>;
    },
    header: "Action",
  }),
];
