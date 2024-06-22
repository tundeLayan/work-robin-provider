"use client";

import React, { useState } from "react";

import cx from "classnames";

import { Table } from "@/components";
import ProfileTitle from "@/components/shared/ProfileTitle";
import { BackgroundCheckType } from "@/services/queries/backgroundCheck/types";
import { columns } from "@/components/ColumnDefinitions/BackgroundCheck";
import BackButton from "@/components/shared/dashboard/back-button";

type TableType = Array<BackgroundCheckType>;

const BackgroundCheck = () => {
  const [columnDef, _] = useState<TableType>([
    {
      author: "Gabriel Rachel",
      dateOrdered: "Saturday 23, 2024 | 11:22PM",
      amount: "$25.00",
      status: "pending",
    },
  ]);

  return (
    <div className={cx("layout__child  h-full")}>
      <div className="pb-7">
        <BackButton />
      </div>
      <ProfileTitle title="Drug Test" />
      <div className="pt-8 border-t border-neutral-350">
        <Table data={columnDef} columns={columns} loading={false} />
      </div>
    </div>
  );
};

export default BackgroundCheck;
