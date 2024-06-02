"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components";
import authAssets from "@/lib/assets/Auth";

const PasswordSuccess = () => {
  const navigate = useRouter();
  return (
    <div className="w-[20%] mx-auto">
      <div className="md:pt-[150px] text-center flex flex-col items-center gap-8">
        <Image
          alt="icon"
          src={authAssets.passwordChangeSuccessfully}
          className="w-[265px] h-[140px]"
        />
        <p className="text-secondary-150 mb-3 font-semibold text-[1.75rem] leading-[35px] tracking-[0.0125rem]">
          Password changed successfully
        </p>
        <Button
          label="Back to Login"
          onClick={() => {
            navigate.push("/login");
          }}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PasswordSuccess;
