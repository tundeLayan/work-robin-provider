"use client";

import React from "react";

import { ProfileTitle } from "@/components/shared/profile";
import { Button } from "@/components";
import { LockClosed } from "@/components/shared/svgs";
import Link from "next/link";
import routes from "@/lib/routes";

const CompanyProfile = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Two-Factor Authentication" />
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <div className="flex flex-col gap-8 app_security">
          <div className="flex flex-col gap-4 app_security__info">
            <div className="flex items-center gap-4">
              <LockClosed />

              <p className="app_security__enable">Enable Security</p>
            </div>

            <p className="app_security__info__text">
              Add a layer of protection to your account with both a password and
              a verification code
            </p>

            <p className="app_notifications__ctt__title">How it works</p>

            <div className="border-t border-neutral-350"></div>

            <div className="">
              <ul className="app_security__list">
                <li>Configure a third party authentication with WorkRobin</li>
                <li>
                  We will ask for a login token from the authentication app at
                  intervals
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-350"></div>

          <div className="">
            <Link href={routes.dashboard.settings.security.recoveryCodes.path}>
              <Button label="Get Started" className=" rounded-xl h-14" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
