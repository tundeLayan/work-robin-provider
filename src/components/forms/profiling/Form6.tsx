import React from "react";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button, UploadedFile } from "@/components";
import { formSchema } from "@/schema/profile/onboardingProfiling";

type TForm = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm>;
  prevPage: () => void;
  onSubmit: () => void;
}

// TODO: Ask, do we have license to store people's card details
const Form6 = (props: IProps) => {
  const {
    form: {
      // control,
      // formState: { errors },
      trigger,
    },
    // prevPage,
    onSubmit,
  } = props;

  const onNextClick = async () => {
    const isValid = await trigger(["yourBio"]);
    if (!isValid) {
      return;
    }
    // check for errors
    onSubmit();
  };

  return (
    <>
      <div className="mb-6">
        <div className="text-center">
          <p className="Profiling-form-title">Submit your profile</p>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-9">
        <div className="flex gap-4">
          <div className="w-[96px] h-[96px] rounded-full border bg-slate-500"></div>
          <div className="flex flex-col">
            <h5 className="text-base font-semibold leading-[20px] text-black">
              Ademola Adeleke
            </h5>
            <p className="text-grey-500 text-xs font-normal leading-[19.2px]">
              Birmingham, United Kingdom
            </p>
            <p className="text-grey-500 text-xs font-normal leading-[19.2px]">
              11:23AM Local Time
            </p>
            <Button
              className="border border-neutral-950 py-[6px] px-3 rounded"
              variant="tertiary"
              label="Edit"
              size="sm"
            />
          </div>
        </div>
        <div className="ssn">
          <SectionTitle actionText="Edit" title="SSN" />
          <p className="text-secondary-150 text-sm font-medium leading-[22.4px]">
            288290021
          </p>
        </div>
        <div className="bio">
          <SectionTitle actionText="Edit" title="My Bio" />
          <p className="text-secondary-150 text-sm font-medium leading-[22.4px]">
            I am a dedicated plumber, providing seamless and countless services
            with high quality standard for my customer utmost satisfaction
          </p>
        </div>

        <div className="skills">
          <SectionTitle actionText="Edit" title="Your Skills" />
        </div>

        <div className="resume">
          <SectionTitle actionText="Replace" title="My Resume" />
          <UploadedFile />
        </div>
      </div>

      <div className="flex gap-10">
        {/* <Button
          disabled={false}
          type="button"
          onClick={prevPage}
          variant="neutral"
          label="Back"
          className="w-full"
        /> */}
        <Button
          disabled={false}
          type="button"
          label="Submit Profile"
          className="w-full"
          onClick={onNextClick}
        />
      </div>
    </>
  );
};

export default Form6;

interface ISectionTitleProps {
  title: string;
  actionText: string;
  actionFn?: () => void;
}
const SectionTitle = (props: ISectionTitleProps) => {
  const { title, actionText, actionFn = () => {} } = props;
  return (
    <div className="flex justify-between mb-2 border-b border-neutral-900">
      <h5 className="text-base font-semibold leading-[25.6px] text-black">
        {title}
      </h5>
      <p
        role="button"
        className="text-primary-50 font-semibold text-xs leading-[19.2px]"
        onClick={actionFn}
      >
        {actionText}
      </p>
    </div>
  );
};
