import React from "react";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button, FormInput, FormSelect } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";

type TForm1 = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm1>;
  nextPage: () => void;
}

const Form1 = (props: IProps) => {
  const {
    form: {
      control,
      formState: { errors },
      trigger,
    },
    nextPage,
  } = props;

  const onNextClick = async () => {
    const isValid = await trigger([
      "address",
      "industry",
      "numberOfEmployees",
      "phone",
      "website",
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
          <p className="Profiling-form-title">
            Welcome <span className="font-semibold">Adeleke!</span>{" "}
          </p>
          <h5 className="Profiling-form-subtitle">
            We'd love to know a bit more about you...
          </h5>
        </div>
      </div>
      <div className="grid">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormInput
              label="Address"
              error={errors.address}
              placeholder="Enter your address"
              containerClass="mb-4"
              required
              {...field}
            />
          )}
        />
        <FormField
          control={control}
          name="industry"
          render={({ field }) => (
            <FormSelect
              label="Industry"
              error={errors.industry}
              placeholder="Select Industry"
              containerClass="mb-4"
              className="rounded-none"
              selectData={["one", "two", "three"]}
              {...field}
            />
          )}
        />
      </div>
      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormInput
            label="Website"
            error={errors.website}
            placeholder="https://www.janedoe.com"
            containerClass="mb-4"
            required
            {...field}
          />
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormInput
            label="Phone Number"
            error={errors.phone}
            placeholder="01-22222333"
            containerClass="mb-4"
            required
            {...field}
          />
        )}
      />
      <FormField
        control={control}
        name="numberOfEmployees"
        render={({ field }) => (
          <FormInput
            label="Number of Employees"
            error={errors.numberOfEmployees}
            placeholder="Select Number of employees"
            containerClass="mb-4"
            type="number"
            required
            {...field}
          />
        )}
      />

      <Button
        disabled={false}
        type="button"
        onClick={onNextClick}
        label="Continue"
        className="w-full"
      />
    </>
  );
};

export default Form1;
