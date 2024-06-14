"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button, Checkbox, FormInput, RenderIf } from "@/components";
import FormSelect from "../../FormSelect";
import { Tax } from "@/constants";
import { taxSchema } from "@/schema/profileSettings/TaxInformation";
import { TaxTypes } from "@/constants/profileSettings";

type TTax = z.infer<typeof taxSchema>;

const TaxInformationForm = () => {
  const form = useForm<TTax>({
    resolver: zodResolver(taxSchema),
    defaultValues: {
      electronic: false,
      taxType: "SSN",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = form;
  console.log(errors);

  const selectedType = watch("taxType");

  const onSubmit = () => {};
  return (
    <div className="mt-8">
      <Form {...form}>
        <form
          className=""
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="max-w-[600px]">
            <FormField
              control={control}
              name="taxType"
              render={({ field }) => (
                <FormSelect
                  label="Select Tax Type"
                  error={errors.taxType}
                  placeholder="Select one"
                  containerClass="mb-4"
                  className=" rounded-none"
                  selectData={TaxTypes}
                  {...field}
                />
              )}
            />
            <RenderIf condition={selectedType === "SSN"}>
              <FormField
                control={control}
                name="ssn"
                render={({ field }) => (
                  <FormInput
                    label="Social Security Number"
                    error={errors.ssn}
                    placeholder="SSN"
                    containerClass="mb-4"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />
            </RenderIf>
            <RenderIf condition={selectedType === "TIN"}>
              <FormField
                control={control}
                name="tin"
                render={({ field }) => (
                  <FormInput
                    label="Full Name associated with TIN"
                    error={errors.tin}
                    placeholder="TIN"
                    containerClass="mb-4"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />
            </RenderIf>

            <FormField
              control={control}
              name="as"
              render={({ field }) => (
                <FormInput
                  label="Doing Business As - optional"
                  error={errors.as}
                  placeholder="SSN"
                  containerClass="mb-4"
                  className="rounded-none"
                  {...field}
                />
              )}
            />

            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormInput
                  label="Address"
                  error={errors.address}
                  placeholder="Enter your address here"
                  containerClass="mb-4"
                  className="rounded-none"
                  {...field}
                />
              )}
            />

            <div className="flex gap-5 ">
              <FormField
                control={control}
                name="suite"
                render={({ field }) => (
                  <FormInput
                    error={errors.suite}
                    placeholder="Suite/Floor"
                    containerClass="mb-4 flex-1"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />

              <FormField
                control={control}
                name="city"
                render={({ field }) => (
                  <FormInput
                    error={errors.city}
                    placeholder="Address"
                    containerClass="mb-8 flex-1"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="flex gap-5 ">
              <FormField
                control={control}
                name="state"
                render={({ field }) => (
                  <FormInput
                    error={errors.state}
                    placeholder="State"
                    containerClass="mb-4 flex-1"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />

              <FormField
                control={control}
                name="zipcode"
                render={({ field }) => (
                  <FormInput
                    error={errors.zipcode}
                    placeholder="Zip code"
                    containerClass="mb-4 flex-1"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />
            </div>

            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <FormSelect
                  error={errors.country}
                  placeholder="Country"
                  containerClass="mb-4"
                  className="rounded-none"
                  selectData={Tax}
                  {...field}
                />
              )}
            />
          </div>
          <div className="pb-4 ">
            <FormField
              control={form.control}
              name="electronic"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                  <FormControl>
                    <Checkbox
                      isChecked={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-neutral-1000 font-medium text-sm">
                      Receive my 1099 electronically
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div>
            <p className="text-neutral-1000 font-normal text-xs pb-1">
              Under penalty of perjury, I certify that:
            </p>
            <p className="text-neutral-1000 font-normal text-xs pb-1">
              1. The number shown on this form is my correct Taxpayer
              Identification Number (or I am waiting for a number to be issued
              to me) and
            </p>
            <p className="text-neutral-1000 font-normal text-xs pb-1">
              2. I am not subject to backup withholding because (a) I am exempt
              from backup withholding or (b) I have not been notified by the
              Internal Service (IRS) that I am subject ro backup
            </p>
            <p className="text-neutral-1000 font-normal text-xs pl-3 pb-1">
              withholding as a result of a failure or interest or dividends, or
              (c) the IRS has notified me that I am no longer subject to backup
              withholding and
            </p>
            <p className="text-neutral-1000 font-normal text-xs pb-1">
              3. I am a U.S. citizen or other U.S. person (identified below)
            </p>
          </div>
          <div className="pb-7">
            <h3 className="font-medium text-xs pt-5 pb-1">
              {" "}
              Certification Instructions
            </h3>
            <p className="text-neutral-1000 font-normal text-xs pb-1 leading-5">
              If you have notified by the IRS that you are currently subject to
              backup withholding because you have failed to report all interests
              and dividends on your tax return, then item 2 above does not
              apply. For real estate transaction, it does not apply. For
              mortgage interest paid, acquisition or abandonment of secured
              property, cancellation of debt, contributions to an individual
              retirement arrangeent (IRA), and generally, payments other than
              interest and dividends are required to sign the certification, but
              you must provide your correct TIN.
            </p>
          </div>
          <div className="pt-8 border-t border-neutral-350 flex items-center gap-6">
            <Button
              label="Cancel"
              className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
              variant="neutral"
              type="button"
            />
            <Button
              label="Update Tax Information"
              // disabled={!!errors.electronic}
              className=" rounded-xl w-[243px] h-14"
              type="submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TaxInformationForm;
