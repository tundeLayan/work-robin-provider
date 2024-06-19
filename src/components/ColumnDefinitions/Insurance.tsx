"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { InsurancePlusActionType } from "@/services/queries/insurance/types";

const columnHelper = createColumnHelper<InsurancePlusActionType>();

export const columns = [
  columnHelper.accessor("type", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Type",
  }),
  columnHelper.accessor("policyNumber", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Policy Number",
  }),
  columnHelper.accessor("provider", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Provider",
  }),
  columnHelper.accessor("amount", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Amount",
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
