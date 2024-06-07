"use client";
import React from "react";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button, FormInput } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";

type TForm2 = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm2>;
  nextPage: () => void;
  prevPage: () => void;
  skipPages: () => void;
}

const Form4 = (props: IProps) => {
  const {
    form: {
      control,
      formState: { errors },
      // trigger,
      // getValues,
    },
    nextPage,
    prevPage,
    // skipPages,
  } = props;

  // const isSubmittable = !!isDirty && !!isValid;

  const onNextClick = async () => {
    // check for errors
    // const isValid = await trigger(["yourSkills"]);
    // if (!isValid) {
    //   return;
    // }
    // TODO: Make API call here
    nextPage();
  };
  // console.log("errors", errors);
  return (
    <>
      <div className="mb-6">
        <div className="text-center">
          <p className="Profiling-form-title">What work are you here to do?</p>
          <h5 className="Profiling-form-subtitle">
            Your skills show clients what you can offer
          </h5>
        </div>
      </div>
      <div className="">
        <FormField
          control={control}
          name="yourSkills"
          render={({ field }) => (
            <FormInput
              label="Your skills"
              error={errors.yourSkills?.[0]}
              placeholder="Your Skills"
              containerClass="mb-4"
              required
              {...field}
            />
          )}
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
          onClick={onNextClick}
          label="Now, Pitch yourself"
          className="w-full"
        />
      </div>
    </>
  );
};

export default Form4;
