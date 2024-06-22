"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import FormSelect from "@/components/FormSelect";
import { Checkbox, FormInput, RenderIf } from "@/components";
import { backgroundSchemaSchema } from "@/schema/profileSettings/BackgroundSchema";
import CardPreview from "../CardPreview";
import Image from "next/image";
import profile from "@/lib/assets/profile";
import { montheData, yearData } from "@/constants/profileSettings";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type TBackground = z.infer<typeof backgroundSchemaSchema>;

export function BackgroundOrder({ open, setOpen }: IProps) {
  const [step, setStep] = useState(1);
  const form = useForm<TBackground>({
    resolver: zodResolver(backgroundSchemaSchema),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = form;

  const onSubmit = () => {
    setStep(2);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen((prev) => !prev);
        setStep(1);
      }}
    >
      <RenderIf condition={step === 1}>
        <DialogContent className="sm:max-w-[501px] overflow-y-auto min-h-[515px] max-h-[95vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pb-6 ">
              Order for Background Check
            </DialogTitle>
            <DialogDescription className="text-base font-medium pb-6 ">
              Please confirm the following details from your profile are
              accurate. If you need to update any of the pre-populated
              information below, please update your{" "}
              <span className="text-primary-50">user profile</span> information.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Form {...form}>
              <form
                className=" "
                onSubmit={handleSubmit(onSubmit, (err) => {
                  console.log("error is", err);
                })}
              >
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <FormInput
                      label="First Name"
                      error={errors.firstName}
                      placeholder="First Name"
                      containerClass="mb-5"
                      className="rounded-none h-11"
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
                      containerClass="mb-5"
                      className="rounded-none h-11"
                      {...field}
                    />
                  )}
                />
                <div className="flex flex-row gap-5">
                  <FormField
                    control={control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormInput
                        label="Zip Code"
                        error={errors.zipCode}
                        placeholder="Zip Code"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <FormInput
                        required
                        label="Phone Number"
                        error={errors.phone}
                        placeholder="Phone Number"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="mb-5">
                  <FormField
                    control={form.control}
                    name="verify"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3  ">
                        <FormControl>
                          <Checkbox
                            isChecked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <div className="!my-0 leading-none">
                          <FormLabel className="text-neutral-1000 font-medium text-sm">
                            This is my legal first, last name and my current zip
                            code
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mb-5">
                  <p className="text-neutral-1000 text-sm font-medium">
                    If this is not your legal first and last name, please
                    <span className="text-primary-50">contact support</span>
                    for assistance. Zip code can be edited in{" "}
                    <span className="text-primary-50">your profile</span>
                  </p>
                </div>

                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormInput
                      label="Email Address"
                      error={errors.email}
                      placeholder="Email Address"
                      containerClass="mb-6 flex-1"
                      className="rounded-none h-11"
                      {...field}
                    />
                  )}
                />
                <div className="mb-5 pb-2 border-b border-b-neutral-900">
                  <h1 className="text-base font-medium">Card Details</h1>
                </div>
                <FormField
                  control={control}
                  name="cardName"
                  render={({ field }) => (
                    <FormInput
                      label="Card Name"
                      error={errors.cardName}
                      placeholder="Enter name on the card"
                      containerClass="mb-5 flex-1"
                      className="rounded-none h-11"
                      {...field}
                    />
                  )}
                />
                <FormField
                  control={control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormInput
                      label="Card Number"
                      error={errors.cardNumber}
                      placeholder="Enter card number"
                      containerClass="mb-5 flex-1"
                      className="rounded-none h-11"
                      {...field}
                    />
                  )}
                />

                <div className="flex gap-5 items-center">
                  <div className="flex flex-1 gap-1 items-center">
                    <FormField
                      control={control}
                      name="expiryMonth"
                      render={({ field }) => (
                        <FormSelect
                          required
                          label="Expiration Date"
                          error={errors.expiryMonth}
                          placeholder="Month"
                          containerClass="mb-4 flex-1"
                          className="rounded-none h-11"
                          selectData={montheData}
                          {...field}
                        />
                      )}
                    />
                    <FormField
                      control={control}
                      name="expiryYear"
                      render={({ field }) => (
                        <div className="flex flex-col gap-1 flex-1">
                          <p className="text-transparent">fff</p>
                          <FormSelect
                            label=""
                            error={errors.expiryYear}
                            placeholder="Year"
                            containerClass="mb-4"
                            className="rounded-none h-11"
                            selectData={yearData}
                            {...field}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <FormField
                    control={control}
                    name="cvv"
                    render={({ field }) => (
                      <FormInput
                        required
                        label="CVV"
                        error={errors.cvv}
                        placeholder="***"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11 mt-1"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="mb-5 pb-2 border-b border-b-neutral-900">
                  <h1 className="text-base font-medium">Billing Information</h1>
                </div>

                <FormField
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <FormInput
                      label="Address"
                      error={errors.address}
                      placeholder="Address"
                      containerClass="mb-5 flex-1"
                      className="rounded-none h-11"
                      {...field}
                    />
                  )}
                />

                <div className="flex gap-5">
                  <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <FormInput
                        required
                        label="City"
                        error={errors.city}
                        placeholder="City"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <FormInput
                        required
                        label="State"
                        error={errors.state}
                        placeholder="State"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="flex gap-5">
                  <FormField
                    control={control}
                    name="country"
                    render={({ field }) => (
                      <FormInput
                        required
                        label="Country"
                        error={errors.country}
                        placeholder="Country"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={control}
                    name="billingZipCode"
                    render={({ field }) => (
                      <FormInput
                        label="Zip Code"
                        error={errors.billingZipCode}
                        placeholder="Zip Code"
                        containerClass="mb-5 flex-1"
                        className="rounded-none h-11"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="mt-6 flex justify-between">
                  <DialogClose>
                    <Button
                      label="Cancel"
                      className="w-[105px] h-[52px] border-primary-500"
                      type="button"
                      variant="neutral"
                    />
                  </DialogClose>
                  <Button
                    label="Confirm and Order Background Check"
                    className="w-[312px] h-[52px]"
                    type="submit"
                  />
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </RenderIf>
      <RenderIf condition={step === 2}>
        <DialogContent className="sm:max-w-[501px] overflow-y-auto min-h-[515px] max-h-[95vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pb-6 ">
              Summary
            </DialogTitle>
          </DialogHeader>
          <div>
            <div className="mb-8">
              <h3 className="text-primary-650 font-bold mb-5 text-base">
                Order Type
              </h3>
              <p className="text-primary-650 font-medium text-base">
                Background Check
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-primary-650 font-bold mb-5 text-base">
                Information
              </h3>
              <p className="text-primary-650  mb-4 font-medium text-base">
                Name: {getValues().lastName} {getValues().firstName}
              </p>
              <p className="text-primary-650  mb-4 font-medium text-base">
                Email: {getValues().email}
              </p>
              <p className="text-primary-650  mb-4 font-medium text-base">
                Zip Code: {getValues().zipCode}
              </p>
              <p className="text-primary-650  font-medium text-base">
                Phone Number: {getValues().phone}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-primary-650 font-bold mb-2 text-base">
                Card Information
              </h3>
              <CardPreview
                cardNo={getValues().cardNumber}
                back={() => {
                  setStep(1);
                }}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-primary-650 font-bold mb-5 text-base">
                Billing Information
              </h3>
              <p className="text-primary-650  mb-4 font-medium text-base">
                {getValues().address}
              </p>
              <p className="text-primary-650  mb-4 font-medium text-base">
                {getValues().city}
              </p>
              <p className="text-primary-650  mb-4 font-medium text-base">
                {getValues().country}
              </p>
            </div>
            <div className="mt-6 flex justify-between">
              <DialogClose>
                <Button
                  label="Cancel"
                  className="w-[105px] h-[52px] border-primary-500"
                  type="button"
                  variant="neutral"
                />
              </DialogClose>
              <Button
                onClick={() => {
                  setStep(3);
                }}
                label="Proceed to Pay"
                className="w-[145px] h-[52px]"
                type="button"
              />
            </div>
          </div>
        </DialogContent>
      </RenderIf>
      <RenderIf condition={step === 3}>
        <DialogContent className="sm:max-w-[501px] overflow-y-auto min-h-[515px] max-h-[95vh] ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pb-6 ">
              Order for Background Check
            </DialogTitle>
            <div className="flex items-center justify-center flex-col h-full">
              <div className="w-[104px] h-[82px]">
                <Image src={profile.message} alt="message svg" />
              </div>
              <p className="font-medium text-xl pt-6 pb-2">Paid Successful</p>
              <p className="font-normal text-base text-neutral-600 text-center pb-6 px-3">
                You have paid successfully for the order of the background check
              </p>
              <DialogClose>
                <Button
                  label="Return"
                  className="w-[85px] h-[52px]"
                  type="button"
                />
              </DialogClose>
            </div>
          </DialogHeader>
        </DialogContent>
      </RenderIf>
    </Dialog>
  );
}
