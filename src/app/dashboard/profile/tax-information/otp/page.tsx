import { Button, OtpInput } from "@/components";
import profile from "@/lib/assets/profile";
import Image from "next/image";
import React from "react";

const Otp = () => {
  return (
    <div className="layout__child h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[559px] h-[530px] flex items-center justify-center rounded-xl border border-neutral-350 ">
          <div className="w-full px-16">
            <div className="pb-6 flex justify-center">
              <div className="w-12 h-16 ">
                <Image src={profile.lock} alt="Lock icon" />
              </div>
            </div>
            <div className="py-[77px]">
              <div className="pb-6 ">
                <h1 className="text-[28px] font-semibold pb-3 text-center">
                  Information Protected
                </h1>
                <h1 className="text-lg font-normal text-center">
                  Enter the code sent to your email to have access
                </h1>
              </div>
              <div>
                <OtpInput
                  className="my-4 gap-[23px]"
                  length={6}
                  label="Enter OTP"
                />
              </div>
              <div className="pt-8">
                <Button label="Grant Access" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
