import React, { ReactNode } from "react";

import { Table } from "@/components";
import { columns } from "@/components/ColumnDefinitions/TaxDocumentation";
import ProfileTitle from "@/components/shared/ProfileTitle";
import { TaxDocumentationType } from "@/services/queries/taxDocumentation/types";

const TaxDocumentation = () => {
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
    </div>
  );
};

export default TaxDocumentation;
