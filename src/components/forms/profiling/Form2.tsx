import React from "react";
import Image from "next/image";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button, FormInput, FormSelect } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";
import authAssets from "@/lib/assets/Auth";

type TForm2 = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm2>;
  nextPage: () => void;
  prevPage: () => void;
}

const Form2 = (props: IProps) => {
  const {
    form: {
      control,
      formState: { errors },
      trigger,
    },
    nextPage,
    prevPage,
  } = props;

  const onNextClick = async () => {
    const isValid = await trigger([
      "tax",
      "ein",
      "taxType",
      "taxAddress",
      "taxSuite",
      "taxCity",
      "taxState",
      "taxZipcode",
      "taxCountry",
    ]);
    if (!isValid) {
      return;
    }
    // check for errors
    nextPage();
  };

  return (
    <>
      <div className="mb-6">
        <div className="text-center">
          <p className="Profiling-form-title">Tax Information</p>
          <h5 className="Profiling-form-subtitle">
            Just a few info about you...
          </h5>
        </div>
      </div>
      <div className="grid">
        <FormField
          control={control}
          name="tax"
          render={({ field }) => (
            <FormSelect
              label="Tax"
              error={errors.address}
              placeholder="Select one"
              containerClass="mb-4"
              className="rounded-none"
              selectData={["one", "two", "three"]}
              {...field}
            />
          )}
        />
        <div className="relative">
          <FormField
            control={control}
            name="ein"
            render={({ field }) => (
              <FormInput
                label="Employer Identification Number (EIN)"
                error={errors.ein}
                placeholder="EIN"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
          {true && (
            <Image
              alt="icon"
              src={authAssets.SmallCheckMark}
              className="w-[19.5px] h-[19.5px] right-[-26px] top-[50%] translate-y-[-50%] absolute"
            />
          )}
        </div>
      </div>
      <FormField
        control={control}
        name="taxType"
        render={({ field }) => (
          <FormSelect
            label="Tax Type"
            error={errors.taxType}
            placeholder="Select one"
            containerClass="mb-4"
            className="rounded-none"
            selectData={["one", "two", "three"]}
            {...field}
          />
        )}
      />
      <div className="">
        <p className="">Address</p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          <FormField
            control={control}
            name="taxAddress"
            render={({ field }) => (
              <FormInput
                error={errors.taxAddress}
                placeholder="Address"
                containerClass="mb-4 col-span-2"
                required
                {...field}
              />
            )}
          />
          <FormField
            control={control}
            name="taxSuite"
            render={({ field }) => (
              <FormInput
                error={errors.taxSuite}
                placeholder="Suite/Floor"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
          <FormField
            control={control}
            name="taxCity"
            render={({ field }) => (
              <FormInput
                error={errors.taxCity}
                placeholder="City"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
          <FormField
            control={control}
            name="taxState"
            render={({ field }) => (
              <FormInput
                error={errors.taxState}
                placeholder="State"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
          <FormField
            control={control}
            name="taxZipcode"
            render={({ field }) => (
              <FormInput
                error={errors.taxZipcode}
                placeholder="Zip code"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
          <FormField
            control={control}
            name="taxCountry"
            render={({ field }) => (
              <FormSelect
                error={errors.taxCountry}
                placeholder="Country"
                containerClass="mb-4 col-span-2"
                className="rounded-none"
                selectData={["one", "two", "three"]}
                {...field}
              />
            )}
          />
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
    </>
  );
};

export default Form2;
