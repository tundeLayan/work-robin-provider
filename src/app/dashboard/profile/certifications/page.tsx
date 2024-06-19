"use client";

import React, { useState } from "react";
import Image from "next/image";

import cx from "classnames";

import { Button, RenderIf, Table } from "@/components";
import profile from "@/lib/assets/profile";
import ProfileTitle from "@/components/shared/ProfileTitle";
import { columns } from "@/components/ColumnDefinitions/Certifications";
import { CertificationPlusActionType } from "@/services/queries/certifications/types";
import { AddCertification } from "@/components/shared/profile/modals/AddCertification";
import CertificatePopover from "@/components/shared/profile/popovers/CertificatePopover";

type TableType = Array<CertificationPlusActionType>;

const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [columnDef, _] = useState<TableType>([
    {
      title: "Security Foundation",
      industry: "Information and Communication",
      link: "https://google.com",
      company: "NIT",
      issueDate: "07/07/2017",
      expiryDate: "07/07/2017",
      action: <CertificatePopover />,
    },
  ]);

  return (
    <div className={cx("layout__child  h-full")}>
      <AddCertification open={isOpen} setOpen={setIsOpen} />
      <div className="flex items-center justify-between">
        <ProfileTitle title="Certifications" />
        <RenderIf condition={columnDef.length > 0}>
          <Button
            label="Add Certification"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </RenderIf>
      </div>
      {columnDef.length > 0 ? (
        <div className="pt-8 border-t border-neutral-350">
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
              No certification added
            </p>
            <p className="text-base font-regular text-center pb-6 pt-2 text-neutral-600 ">
              You have not add any certification here
            </p>
            <div className="flex justify-center">
              <Button
                label="Add certification"
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

export default Certifications;
