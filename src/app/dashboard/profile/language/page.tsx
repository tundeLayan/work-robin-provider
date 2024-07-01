"use client";

import React, { useState } from "react";
import Image from "next/image";

import cx from "classnames";

import { Button, RenderIf, Table } from "@/components";
import profile from "@/lib/assets/profile";
import ProfileTitle from "@/components/shared/ProfileTitle";
import { columns } from "@/components/ColumnDefinitions/Language";
import { AddLanguage } from "@/components/shared/profile/modals/AddLanguage";
import { useLanguageRead } from "@/services/queries/language";
import { Pagination } from "@/components/shared/dashboard";
import { defaultMeta } from "@/utils/static";
import useFilters from "@/hooks/useFilter";

const Language = () => {
  const { url } = useFilters("/languages", {});
  const { data, meta, isPending } = useLanguageRead(url.href);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cx("layout__child  h-full")}>
      <AddLanguage open={isOpen} setOpen={setIsOpen} />
      <div className="flex items-center justify-between">
        <ProfileTitle title="Language" />
        <RenderIf condition={(data || []).length > 0}>
          <Button
            label="Add Language"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </RenderIf>
      </div>
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
              No language added
            </p>
            <p className="text-base font-regular text-center pb-6 pt-2 text-neutral-600 ">
              You have not add any language
            </p>
            <div className="flex justify-center">
              <Button
                label="Add Language"
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

export default Language;
