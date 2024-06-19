"use client";

import { ReactNode } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { CertificationType } from "@/services/queries/certifications/types";

type CertificationsColumms = CertificationType & {
  action: ReactNode;
};

const columnHelper = createColumnHelper<CertificationsColumms>();

export const columns = [
  columnHelper.accessor("title", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Title",
  }),
  columnHelper.accessor("industry", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Industry",
  }),
  columnHelper.accessor("link", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Certification Link",
  }),
  columnHelper.accessor("company", {
    cell: (info) => {
      return (
        <div className="font-regular text-[12px]">{info.getValue() || "-"}</div>
      );
    },
    header: "Company",
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
