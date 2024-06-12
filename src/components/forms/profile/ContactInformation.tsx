"use client";

import React, { useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import { CountryCode, isPossiblePhoneNumber } from "libphonenumber-js";
import countryList from "react-select-country-list";

import { ImgUpload } from "@/components/shared/profile";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button, FormInput } from "@/components";
import FormSelect from "../../FormSelect";
import { contactSchema } from "@/schema/profileSettings/ContactInformation";
import { Tax } from "@/constants";
import { Switch } from "@/components/ui/switch";

type TContact = z.infer<typeof contactSchema>;

const ContactInformationForm = () => {
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [_, setFile] = useState<File | null>(null);

  const form = useForm<TContact>({
    resolver: zodResolver(contactSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = form;

  const onSubmit = (values: TContact) => {
    const code = values.countryCode as CountryCode;
    const isValidNumber = isPossiblePhoneNumber(values.workNumber, code);
    if (!isValidNumber)
      setError("workNumber", {
        type: "validate",
        message: "Please input a valid phone number",
      });
  };
  return (
    <div className="">
      <div className="pt-6 pb-8 pr-6 ">
        <h3 className="text-sm font-medium pb-6 ">Change Picture</h3>
        <ImgUpload setFile={setFile} buttonText="Change Picture" />
      </div>
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
              name="firstName"
              render={({ field }) => (
                <FormInput
                  label="First Name"
                  error={errors.firstName}
                  placeholder="First Name"
                  containerClass="mb-4 flex-1"
                  className="rounded-none"
                  {...field}
                />
              )}
            />
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormInput
                  label="Last Name"
                  error={errors.lastName}
                  placeholder="Last Name"
                  containerClass="mb-4 flex-1"
                  className="rounded-none"
                  {...field}
                />
              )}
            />

            <FormField
              control={control}
              name="ssn"
              render={({ field }) => (
                <FormInput
                  label="SSN/TIN"
                  error={errors.ssn}
                  placeholder="john.doe@gmail.com"
                  containerClass="mb-4"
                  className="rounded-none"
                  {...field}
                />
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormInput
                  label="Email Address"
                  error={errors.email}
                  placeholder="john.doe@gmail.com"
                  containerClass="mb-4"
                  className="rounded-none"
                  {...field}
                />
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={control}
                name="countryCode"
                render={({ field }) => (
                  <FormSelect
                    label="Country Code"
                    error={errors.countryCode}
                    placeholder="Select One"
                    containerClass="mb-4 w-[35%]"
                    className="rounded-none"
                    selectData={countryOptions}
                    {...field}
                  />
                )}
              />

              <FormField
                control={control}
                name="workNumber"
                render={({ field }) => (
                  <FormInput
                    label="Work Number"
                    error={errors.workNumber}
                    placeholder="22222333"
                    containerClass="mb-4 w-[65%]"
                    className="rounded-none"
                    {...field}
                  />
                )}
              />
            </div>
            <FormField
              control={control}
              name="timezone"
              render={({ field }) => (
                <FormSelect
                  label="Timezone"
                  error={errors.timezone}
                  placeholder="Select your industry"
                  containerClass="mb-4"
                  className="rounded-none"
                  selectData={Tax}
                  {...field}
                />
              )}
            />

            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <FormSelect
                  label="Country"
                  error={errors.country}
                  placeholder="Select your industry"
                  containerClass="mb-4"
                  className="rounded-none"
                  selectData={Tax}
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
              name="city"
              render={({ field }) => (
                <FormInput
                  error={errors.city}
                  placeholder="Address"
                  containerClass="mb-8"
                  className="rounded-none"
                  {...field}
                />
              )}
            />
          </div>
          <div className="py-8 border-t border-neutral-350 ">
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className=" ">
                  <FormLabel className="font-medium text-sm">
                    Contact Privacy
                  </FormLabel>
                  <div className="space-y-0.5 flex flex-row items-center gap-8">
                    <FormDescription className="text-base">
                      Make contact information visible for buyer
                    </FormDescription>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="pt-8 border-t border-neutral-350 flex items-center gap-6">
            <Button
              label="Cancel"
              className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
              variant="neutral"
              type="button"
            />
            <Button
              label="Update Contact Information"
              className=" rounded-xl w-[243px] h-14"
              type="submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactInformationForm;
