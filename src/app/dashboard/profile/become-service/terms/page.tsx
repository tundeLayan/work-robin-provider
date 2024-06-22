"use client";

import React, { useState } from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import { Button, Checkbox } from "@/components";
import routes from "@/lib/routes";
import { useRouter } from "next/navigation";

const Terms = () => {
  const router = useRouter();
  const [agreeToTermsAndCondition, setAgreeToTermsAndConditions] =
    useState(false);
  return (
    <div className="layout__child">
      <ProfileTitle title="Become a Service Company" />
      <div className="border-t border-neutral-350">
        <div>
          <h1 className="text-base font-medium pt-9 pb-5 ">
            Terms & Conditions
          </h1>
          <ul className="pt-3 pb-1 text-neutral-300 font-medium text-sm list-disc list-outside">
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
          <div className="mt-4 mb-0">
            <Checkbox
              id="card-details"
              isChecked={agreeToTermsAndCondition}
              onChange={(e) => {
                setAgreeToTermsAndConditions(e as boolean);
              }}
            >
              <p className="text-grey-800 text-sm">
                I agree to the Provider’s Terms & Conditions
              </p>
            </Checkbox>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-neutral-350 flex items-center gap-6">
          <Button
            label="Cancel"
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
            title="Agree to terms and conditions"
          />
        </div>
      </div>
    </div>
  );
};

export default Terms;
