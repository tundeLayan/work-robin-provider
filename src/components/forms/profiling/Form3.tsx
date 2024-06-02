import React from "react";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import cx from "classnames";

import { Button, FormInput, FormSelect, Checkbox } from "@/components";
import { FormField } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";

type TForm = z.infer<typeof formSchema>;

interface IProps {
  form: UseFormReturn<TForm>;
  nextPage: () => void;
  prevPage: () => void;
  skipPages: () => void;
}

// TODO: Ask, do we have license to store people's card details
const Form3 = (props: IProps) => {
  const {
    form: {
      control,
      formState: { errors },
      trigger,
      setValue,
    },
    nextPage,
    prevPage,
    skipPages,
  } = props;

  const onNextClick = async () => {
    const isValid = await trigger([
      "cardType",
      "cardName",
      "cardNumber",
      "expirationMonth",
      "expirationYear",
      "cvv",
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
          <p className="Profiling-form-title">Add Funds</p>
          <h5 className="Profiling-form-subtitle">Add funds to your wallet</h5>
        </div>
      </div>
      <div className="grid">
        <FormField
          control={control}
          name="cardType"
          render={({ field }) => (
            <FormSelect
              label="Card Type"
              error={errors.cardType}
              placeholder="Select one"
              containerClass="mb-4"
              className="rounded-none"
              selectData={["one", "two", "three"]}
              {...field}
            />
          )}
        />
        <FormField
          control={control}
          name="cardName"
          render={({ field }) => (
            <FormInput
              label="Card Name"
              error={errors.cardName}
              placeholder="Enter name on the card"
              containerClass="mb-4"
              required
              {...field}
            />
          )}
        />
      </div>
      <FormField
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <FormInput
            label="Card Number"
            error={errors.cardNumber}
            placeholder="**** **** **** 3527"
            type="password"
            containerClass="mb-4"
            required
            {...field}
          />
        )}
      />
      <div className="flex gap-10">
        <div className="flex flex-col flex-[3] gap-1">
          <p
            className={cx(
              "text-sm font-medium leading-[1.4rem] text-secondary-100",
              {
                "!text-danger-100":
                  !!errors.expirationMonth || !!errors.expirationYear,
              },
            )}
          >
            Expiration Date <span className="text-danger-50">*</span>
          </p>
          <div className="flex gap-2">
            <FormField
              control={control}
              name="expirationMonth"
              render={({ field }) => (
                <FormSelect
                  error={errors.expirationMonth}
                  placeholder="Month"
                  containerClass="mb-4 flex-1"
                  className="rounded-none"
                  selectData={["one", "two", "three"]}
                  {...field}
                />
              )}
            />
            <FormField
              control={control}
              name="expirationYear"
              render={({ field }) => (
                <FormSelect
                  error={errors.expirationYear}
                  placeholder="Year"
                  containerClass="mb-4 flex-1"
                  className="rounded-none"
                  selectData={["one", "two", "three"]}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="flex-[2]">
          <FormField
            control={control}
            name="cvv"
            render={({ field }) => (
              <FormInput
                label="CVV"
                error={errors.cvv}
                placeholder="Month"
                containerClass="mb-4"
                required
                {...field}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-8 mb-6">
        <Checkbox
          id="card-details"
          onChange={(e) => {
            setValue("saveCardDetails", e as boolean);
          }}
        >
          <p className="">Save card details</p>
        </Checkbox>
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
    </>
  );
};

export default Form3;
