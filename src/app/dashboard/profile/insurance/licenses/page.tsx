"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Button, Table } from "@/components";
import profile from "@/lib/assets/profile";
import { AddInsurance } from "@/components/shared/profile/modals/AddInsurance";
import InsurancePopover from "@/components/shared/profile/popovers/InsurancePopover";
import { LicensesPlusActionType } from "@/services/queries/licenses/types";
import { columns } from "@/components/ColumnDefinitions/License";

type TableType = Array<LicensesPlusActionType>;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columnDef, _] = useState<TableType>([
    {
      license: "Security Foundation",
      licenseNumber: "Information and Communication",
      state: "NIT",
      issueDate: "07/07/2017",
      expiryDate: "07/07/2017",
      action: <InsurancePopover />,
    },
  ]);
  return (
    <div>
      <AddInsurance open={isOpen} setOpen={setIsOpen} />
      {columnDef.length > 0 ? (
        <div className="pt-8 ">
          <Table data={columnDef} columns={columns} loading={false} />
        </div>
      ) : (
        <div className=" flex items-center justify-center mt-20 ">
          <div className="w-[398px] h-[336px]  bg-white rounded-md pt-6 border border-neutral-1100 px-6 ">
            <div className="flex justify-center">
              <Image
                src={profile.spendingEmpty}
                alt="Empty spending limit image"
                className="w-[174px] h-[137px] object-cover "
              />
            </div>
            <p className="text-base font-semibold text-center pt-6 ">
              No license added
            </p>
            <p className="text-base font-regular text-center pb-6 pt-2 text-neutral-600 ">
              You have not added any license here
            </p>
            <div className="flex justify-center">
              <Button
                label="Add license"
                className="w-full"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
