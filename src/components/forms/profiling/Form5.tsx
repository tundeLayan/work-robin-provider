import React from "react";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button, FormInput } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";

type TForm = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm>;
  prevPage: () => void;
  onSubmit: () => void;
}

// TODO: Ask, do we have license to store people's card details
const Form5 = (props: IProps) => {
  const {
    form: {
      control,
      formState: { errors },
      trigger,
    },
    prevPage,
    onSubmit,
  } = props;

  const onNextClick = async () => {
    const isValid = await trigger([
      "personOfContactFirstName",
      "personOfContactLastName",
      "personOfContactEmail",
      "personOfContactPhone",
    ]);
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
          <p className="Profiling-form-title">Your Person of Contact</p>
          <h5 className="Profiling-form-subtitle">
            Just a few info about your person of contact...
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <FormField
          control={control}
          name="personOfContactFirstName"
          render={({ field }) => (
            <FormInput
              label="First Name"
              error={errors.personOfContactFirstName}
              placeholder="First Name"
              containerClass="mb-4"
              {...field}
            />
          )}
        />
        <FormField
          control={control}
          name="personOfContactLastName"
          render={({ field }) => (
            <FormInput
              label="Last Name"
              error={errors.personOfContactLastName}
              placeholder="Last Name"
              containerClass="mb-4"
              required
              {...field}
            />
          )}
        />
      </div>
      <FormField
        control={control}
        name="personOfContactEmail"
        render={({ field }) => (
          <FormInput
            label="Email Address"
            error={errors.personOfContactEmail}
            placeholder="Email Address"
            containerClass="mb-4"
            required
            {...field}
          />
        )}
      />
      <FormField
        control={control}
        name="personOfContactPhone"
        render={({ field }) => (
          <FormInput
            label="Phone Number"
            error={errors.personOfContactPhone}
            placeholder="Phone Number"
            containerClass="mb-4"
            required
            {...field}
          />
        )}
      />

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
          label="Done"
          className="w-full"
          onClick={onNextClick}
        />
      </div>
    </>
  );
};

export default Form5;
