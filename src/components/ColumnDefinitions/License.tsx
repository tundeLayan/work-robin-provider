"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { LicensesPlusActionType } from "@/services/queries/licenses/types";

const columnHelper = createColumnHelper<LicensesPlusActionType>();

export const columns = [
  columnHelper.accessor("license", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "License",
  }),
  columnHelper.accessor("licenseNumber", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "License Number",
  }),
  columnHelper.accessor("state", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "State",
  }),
  columnHelper.accessor("issueDate", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Issue Date",
  }),
  columnHelper.accessor("expiryDate", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Expiry Date",
  }),
  columnHelper.accessor("action", {
    cell: (info) => {
      return <div>{info.getValue() || "-"}</div>;
    },
    header: "Action",
  }),
];
