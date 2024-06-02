"use client";
import React, { useState } from "react";

import { UseFormReturn, useFieldArray } from "react-hook-form";
import { z } from "zod";

import { Button, FormInput } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";
import authAssets from "@/lib/assets/Auth";
import { RenderIf } from "@/components/shared";

type TForm2 = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm2>;
  nextPage: () => void;
  prevPage: () => void;
  skipPages: () => void;
}

const Form4 = (props: IProps) => {
  const [currentPage, setCurrrentPage] = useState<"form4" | "invitesSent">(
    "form4",
  );
  const {
    form: {
      control,
      formState: { errors },
      trigger,
      getValues,
    },
    nextPage,
    prevPage,
    skipPages,
  } = props;

  const { fields, append /* ,remove */ } = useFieldArray({
    control,
    name: "teamMembersEmails",
  });

  // const isSubmittable = !!isDirty && !!isValid;

  const sendInvites = async () => {
    const isValid = await trigger(["teamMembersEmails"]);
    if (!isValid) {
      return;
    }
    // TODO: Make API call here
    console.log("here");
    setTimeout(() => {
      setCurrrentPage("invitesSent");
    }, 500);
  };
  const onNextClick = async () => {
    // check for errors
    nextPage();
  };

  return (
    <>
      <RenderIf condition={currentPage === "form4"}>
        <div className="mb-6">
          <div className="text-center">
            <p className="Profiling-form-title">Invite Team Members</p>
            <h5 className="Profiling-form-subtitle">
              Just a few info about you...
            </h5>
          </div>
        </div>
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={control}
            name={`teamMembersEmails.${index}.teamMembersEmail` as const}
            render={({ field }) => (
              <FormInput
                error={errors.teamMembersEmails?.[index]?.teamMembersEmail}
                placeholder="Enter Email Address"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
        ))}

        <div className="my-5 flex justify-end">
          <Button
            onClick={() => {
              append({ teamMembersEmail: "" });
            }}
            variant="tertiary"
            icon={authAssets.PlusIcon}
            size="sm"
            label="Add more"
            type="button"
          />
        </div>
        <div className="flex gap-10">
          <Button
            disabled={false}
            type="button"
            onClick={prevPage}
            variant="neutral"
            label="Back"
            className="w-full"
          />
          <Button
            disabled={false}
            type="button"
            onClick={sendInvites}
            label="Send Invites"
            className="w-full"
          />
        </div>
      </RenderIf>
      <RenderIf condition={currentPage === "invitesSent"}>
        <div className="mb-6">
          <div className="text-center mb-6">
            <p className="Profiling-form-title">Invites Sent</p>
            <h5 className="Profiling-form-subtitle">
              Invites has been sent to:
            </h5>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getValues("teamMembersEmails").map((member, idx) => (
              <div
                key={idx}
                className="text-primary-50 text-center text-sm font-normal leading-[22.4px] bg-primary-600 py-1 px-3"
              >
                {member.teamMembersEmail}
              </div>
            ))}
            <div className=""></div>
          </div>
        </div>
        <div className="flex gap-10">
          <Button
            disabled={false}
            type="button"
            onClick={prevPage}
            variant="neutral"
            label="Back"
            className="w-full"
          />
          <Button
            disabled={false}
            type="button"
            onClick={onNextClick}
            label="Continue"
            className="w-full"
          />
        </div>
      </RenderIf>

      <RenderIf condition={currentPage === "form4"}>
        <div className="flex justify-center mt-8">
          <p
            role="button"
            className="text-secondary-100 text-base font-bold leading-6"
            onClick={() => {
              skipPages();
            }}
          >
            Skip for now
          </p>
        </div>
      </RenderIf>
    </>
  );
};

export default Form4;
