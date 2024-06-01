import React from "react";
import Image from "next/image";

import logo from "@/lib/assets/logos";

const Sider = () => {
  return (
    <aside className="hidden xl:block md:flex-1 pt-[22px] pl-[27px] pb-[19px] min-h-screen">
      <div className="bg-cover bg-center bg-[url('/media/images/authBackground.png')] rounded-3xl h-full w-full px-[60px] pt-[52px] pb-[65px]">
        <Image alt="" src={logo.logo} className="w-[154px] h-[37px] mb-16" />
        <div className="flex flex-col h-[670px] justify-between">
          <div className="mb-">
            <h3 className="text-white text-6xl font-semibold leading-[66px] tracking-[0.02em] mb-8">
              Elevate your processes with WorkRobin
            </h3>
            <p className="text-neutral-100 text-lg font-normal leading-[26.1px] w-9/12">
              WorkRobin helps you automate everything from onboarding to payment
              so you can grow your business
            </p>
          </div>

          <div className="bg-tertiary-50 rounded-[20px] p-6">
            <p className="text-neutral-50 text-base font-normal leading-[23.2px]">
              WorkRobin has transformed the way our team approaches design. The
              sheer range of components and the seamless integration of the
              design system into our workflow have been game-changers. It&apos;s
              like having a toolkit filled with magic that accelerates our
              projects without compromising on quality.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-16 w-16 rounded-full bg-black border border-white"></div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-white text-sm font-semibold leading-[15.4px]">
                  Ariana Grande
                </p>
                <p className="text-neutral-700 text-xs font-normal leading-[13.2px]">
                  Plumber 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sider;
