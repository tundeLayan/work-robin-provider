"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Button, Table } from "@/components";
import profile from "@/lib/assets/profile";
import { columns } from "@/components/ColumnDefinitions/License";
import { useLicenceRead } from "@/services/queries/licenses";
import useFilters from "@/hooks/useFilter";
import { AddLicense } from "@/components/shared/profile/modals/AddLicense";
import { Pagination } from "@/components/shared/dashboard";
import { defaultMeta } from "@/utils/static";

const Home = () => {
  const { url } = useFilters("/licenses", {});
  const { data, meta, isPending } = useLicenceRead(url.href);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AddLicense open={isOpen} setOpen={setIsOpen} />
      {isPending || (data && data?.length > 0) ? (
        <div>
          <div className="pt-8 border-t border-neutral-350">
            <Table data={data || []} columns={columns} loading={isPending} />
          </div>
          <div>
            <Pagination meta={meta || defaultMeta} />
          </div>
        </div>
      ) : null}
      {!isPending && data && data?.length === 0 ? (
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
                label="Add License"
                className="w-full"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
