"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Button, Table } from "@/components";
import profile from "@/lib/assets/profile";
import { columns } from "@/components/ColumnDefinitions/Insurance";
import { AddInsurance } from "@/components/shared/profile/modals/AddInsurance";
import { useInsuranceRead } from "@/services/queries/insurance";
import useFilters from "@/hooks/useFilter";
import { Pagination } from "@/components/shared/dashboard";
import { defaultMeta } from "@/utils/static";

const Home = () => {
  const { url } = useFilters("/insurances", {});
  const { data, meta, isPending } = useInsuranceRead(url.href);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AddInsurance open={isOpen} setOpen={setIsOpen} />
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
              No insurance added
            </p>
            <p className="text-base font-regular text-center pb-6 pt-2 text-neutral-600 ">
              You have not added any insurance here
            </p>
            <div className="flex justify-center">
              <Button
                label="Add insurance"
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
