"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeft, LockClosed } from "@/components/shared/svgs";
import { Button } from "@/components";
import routes from "@/lib/routes";

export default function Page() {
  const router = useRouter();

  return (
    <div className="layout__child">
      <div className="flex flex-col gap-16">
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
            <div className="app_security_page_indicator__item active"></div>
            <div className="app_security_page_indicator__item active"></div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center gap-7">
            <LockClosed />

            <div>
              <p className="app_security__enable text-center">All Done!</p>

              <p className="app_security__info__text text-center">
                Two-Factor Authentication Enabled
              </p>
            </div>

            <div className="">
              <Link href={routes.dashboard.settings.security.path}>
                <Button label="Go to settings" className=" rounded-xl h-14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
