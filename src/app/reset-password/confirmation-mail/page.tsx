"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import authAssets from "@/lib/assets/Auth";

const ConfirmationMail = () => {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");
  return (
    <div className="w-[95%] md:w-[30%] mx-auto">
      <div className="md:pt-[150px] ">
        <div className="mb-5">
          <Image
            src={authAssets.Email}
            alt=""
            className="w-[49.41px] h-[64px] mx-auto"
          />
        </div>
        <div className="mb-16 text-center mx-auto">
          <p className="text-secondary-150 mb-3 font-semibold text-[1.75rem] leading-[35px] tracking-[0.0125rem]">
            Email sent
          </p>
          <h5 className="text-secondary-150 text-lg font-normal leading-[24px]">
            We've sent a link to create a new password to {userEmail}. If it's
            not in your inbox, check your spam/junk folder.
          </h5>
        </div>

        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem] md:mt-[300px]">
          Don't have an account?{" "}
          <Link className="text-primary-50 underline" href={"/signup"}>
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

const ConfirmMailWrapper = () => {
  return (
    <Suspense>
      <ConfirmationMail />
    </Suspense>
  );
};

export default ConfirmMailWrapper;
