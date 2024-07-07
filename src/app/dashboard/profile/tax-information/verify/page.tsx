"use client";

import profile from "@/lib/assets/profile";
import { useProfileRead } from "@/services/queries/profile";
import { useTaxInformationOtpPost } from "@/services/queries/taxIInformation";
import Image from "next/image";
import React from "react";

const Verify = () => {
  const { data } = useProfileRead();
  const { mutate } = useTaxInformationOtpPost();
  return (
    <div className="layout__child h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[559px] h-[510px] flex items-center justify-center rounded-xl border border-neutral-350 ">
          <div className="w-full px-16">
            <div className="pb-6 flex justify-center">
              <div className="w-12 h-16 ">
                <Image src={profile.lock} alt="Lock icon" />
              </div>
            </div>
            <div className="py-[77px]">
              <div className="pb-6 border-b border-neutral-350">
                <h1 className="text-[28px] font-semibold pb-3 text-center">
                  Verify your Identity
                </h1>
                <h1 className="text-xl font-normal text-center">
                  Choose a method to receive a code
                </h1>
              </div>
              <div>
                <button
                  className="flex items-center gap-2 py-6 border-b border-neutral-350 w-full"
                  onClick={() => {
                    mutate({
                      email: data?.email || "",
                      phone_number: "",
                    });
                  }}
                >
                  <div className="w-5 h-3">
                    <Image src={profile.mail} alt="Mail icon" />
                  </div>
                  <p className="font-medium text-sm">
                    Email: *************@gmail.com
                  </p>
                </button>
                <button
                  className="flex items-center gap-2 py-6 border-b border-neutral-350 w-full"
                  disabled
                >
                  <div className="w-5 h-3">
                    <Image src={profile.phone} alt="Mail icon" />
                  </div>
                  <p className="font-medium text-sm">Text: ********1234</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
