"use client";

import { ReactNode } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { LanguageType } from "@/services/queries/language/types";
import { capitalizeFirstLetter } from "@/utils";
import LanguagePopover from "../shared/profile/popovers/LanguagePopover";

type LanguageColumms = LanguageType & {
  action: ReactNode;
};

const columnHelper = createColumnHelper<LanguageColumms>();

export const columns = [
  columnHelper.accessor("language", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">
          {capitalizeFirstLetter(info.getValue()) || "-"}
        </div>
      );
    },
    header: "Language",
  }),
  columnHelper.accessor("proficiency", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">
          {capitalizeFirstLetter(info.getValue()) || "-"}
        </div>
      );
    },
    header: "Level",
  }),

  columnHelper.accessor("action", {
    cell: (info) => {
      return (
        <div>
          <LanguagePopover id={info.row.original.language_id} />
        </div>
      );
    },
    header: "Action",
  }),
];
