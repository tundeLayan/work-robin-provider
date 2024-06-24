"use client";

import React, { ReactNode, Suspense } from "react";

import { Table } from "@/components";
import { columns } from "@/components/ColumnDefinitions/TaxDocumentation";
import ProfileTitle from "@/components/shared/ProfileTitle";
import { TaxDocumentationType } from "@/services/queries/taxDocumentation/types";
import { defaultMeta } from "@/utils/static";
import { Pagination } from "@/components/shared/dashboard";
// import useFilters from "@/hooks/useFilter";

const TaxDocumentation = () => {
  // const { url } = useFilters("/users/buyers");
  // console.log(url);

  const columnDef: Array<TaxDocumentationType & { action: ReactNode }> = [
    {
      documentType: "W9 NEC Report",
      creator: "Omolola Wawu",
      dateCreated: "August 12, 2023",
      taxStatus: "Issued",
      status: "Active",
      type: "Electronic",
      action: (
        <div className="font-semibold text-[12px] cursor-pointer text-primary-50 ">
          Download
        </div>
      ),
    },
  ];

  return (
    <div className="layout__child">
      <ProfileTitle title="Tax Documentation" />
      <div className="pt-8 border-t border-neutral-350">
        <Table data={columnDef} columns={columns} loading={false} />
      </div>
      <div>
        <Suspense>
          <Pagination meta={defaultMeta} isLoading={false} isError={false} />
        </Suspense>
      </div>
    </div>
  );
};

export default TaxDocumentation;
