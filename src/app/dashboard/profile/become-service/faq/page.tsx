"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes";
import DotProcess from "@/components/shared/profile/dotProcess";

const Faq = () => {
  const router = useRouter();
  return (
    <div className="layout__child">
      <div className="flex items-center justify-between">
        <ProfileTitle title="Become a Service Company" />
        <DotProcess total={3} step={3} />
      </div>
      <div className="border-t border-neutral-350">
        <div>
          <h1 className="text-base font-medium pt-9 pb-5 ">
            Requirements & FAQs
          </h1>
          <ul className="pt-3 pb-1 text-grey-600 font-medium text-sm list-disc list-outside">
            <li>
              Follow Instructions: Ensure successful completion of the screening
              process by adhering to emailed instructions.
            </li>
            <li>
              Receive Notifications: Stay informed about the status of your
              screening results through notifications.
            </li>
            <li>
              Automatic Profile Update: Your profile will be automatically
              updated upon successful completion of screenings.
            </li>
          </ul>
          <p>
            Expect detailed instructions from our trusted screening partners via
            email.
          </p>
        </div>
        <div className="pt-8 mt-8 border-t border-neutral-350 flex items-center gap-6">
          <Button
            label="Back"
            onClick={() => {
              router.push(routes.dashboard.profile.becomeService.terms.path);
            }}
            className=" rounded-xl w-[108px] h-14  border-primary-500"
            variant="neutral"
            type="button"
          />
          <Button
            onClick={() => {
              router.push(routes.dashboard.profile.becomeService.info.path);
            }}
            label="Next"
            className=" rounded-xl w-[91px] h-14"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
