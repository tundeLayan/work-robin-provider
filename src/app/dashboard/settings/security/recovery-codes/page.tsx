"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ProfileTitle } from "@/components/shared/profile";
import { ArrowLeft, Download } from "@/components/shared/svgs";
import { Button } from "@/components";
import routes from "@/lib/routes";

export default function Page() {
  const router = useRouter();

  return (
    <div className="layout__child">
      <div className="flex flex-col gap-7">
        <div className="flex">
          <div className="">
            <button
              className="flex gap-3 item-center w-full"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowLeft />
              <p className="app_dashboard_sidebar__back__btn__text">Back</p>
            </button>
          </div>
        </div>

        <div className="app_security_page_indicator flex items-center justify-center gap-3">
          <div className="app_security_page_indicator__item active"></div>
          <div className="app_security_page_indicator__item"></div>
          <div className="app_security_page_indicator__item"></div>
        </div>

        <ProfileTitle title="Recovery Codes" />
      </div>
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 app_security__info">
            <div className="flex items-center gap-4">
              <Download />

              <p className="app_security__enable">Save Recovery Codes </p>
            </div>

            <p className="app_security__info__text">
              Save these one-time use recovery codes to use when your
              authentication app isn’t available. You will not see them once you
              finish configuration.
            </p>

            <div className="flex flex-col gap-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <p className="app_security__info__text">
                      {index + 1}. 32374299
                    </p>
                    <p className="app_security__info__text">
                      {index + 1}. 32374299
                    </p>
                  </div>
                ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="tertiary"
                label="Download Code"
                className="p-0 h-[unset]"
              />

              <Button
                variant="tertiary"
                label="Copy to Clipboard"
                className="p-0 h-[unset]"
              />
            </div>
          </div>

          <div className="border-t border-neutral-350"></div>

          <div className="">
            <Link href={routes.dashboard.settings.security.configure.path}>
              <Button label="Next" className=" rounded-xl h-14" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
