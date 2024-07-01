"use client";

import Button from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import FormSelect from "@/components/FormSelect";
import { FormInput, FormRadioGroup } from "@/components";
import { useForm } from "react-hook-form";
import {
  TPayment,
  paymentSchema,
} from "@/schema/profileSettings/PaymentDetails";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Image from "next/image";
import profile from "@/lib/assets/profile";
import { AccountType } from "@/constants/profileSettings";

interface IProps {
  children: ReactNode;
  set: Dispatch<SetStateAction<Array<TPayment & { default: boolean }>>>;
}

const radioOptions = [
  { value: "direct", label: "Direct Deposit", id: "direct" },
  {
    value: "paypal",
    label: "PayPal",
    id: "paypal",
  },
];

export function AddPayment({ children, set }: IProps) {
  const [isForm, setIsForm] = useState(true);
  const form = useForm<TPayment>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentType: "direct",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = form;
  const paymentType = watch("paymentType");

  const onSubmit = (values: TPayment) => {
    set((prev) => [...prev, { ...values, default: false }]);
    setIsForm(false);
  };
  return (
    <Dialog
      onOpenChange={() => {
        setIsForm(true);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[501px]" closeClassName="hidden">
        {isForm ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold pb-6 ">
                Add Payment
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 overflow-y-auto min-h-[515px] max-h-[90vh]">
              <Form {...form}>
                <form
                  className="flex flex-col justify-between "
                  onSubmit={handleSubmit(onSubmit, (err) => {
                    console.log("error is", err);
                  })}
                >
                  <div>
                    <FormField
                      control={form.control}
                      name="paymentType"
                      render={({ field }) => (
                        <FormRadioGroup
                          options={radioOptions}
                          value={field.value}
                          onChange={field.onChange}
                          className="flex gap-4"
                          itemClassName="border-0 py-0 pb-6"
                        />
                      )}
                    />
                    {paymentType === "direct" && (
                      <>
                        <FormField
                          control={control}
                          name="routingNumber"
                          render={({ field }) => (
                            <FormInput
                              label="Routing Number"
                              error={errors.routingNumber}
                              placeholder="Enter the routing number"
                              containerClass="mb-6"
                              {...field}
                            />
                          )}
                        />
                        <FormField
                          control={control}
                          name="accountType"
                          render={({ field }) => (
                            <FormSelect
                              label="Account Type"
                              error={errors.accountType}
                              placeholder="Select one"
                              containerClass="mb-6"
                              className="rounded-[10px]"
                              selectData={AccountType}
                              {...field}
                              value={field.value || ""}
                            />
                          )}
                        />

                        <FormField
                          control={control}
                          name="accountNumber"
                          render={({ field }) => (
                            <FormInput
                              label="Account Number"
                              error={errors.accountNumber}
                              placeholder="Enter the routing number"
                              containerClass="mb-6"
                              {...field}
                            />
                          )}
                        />

                        <FormField
                          control={control}
                          name="accountName"
                          render={({ field }) => (
                            <FormInput
                              label="Account Name"
                              error={errors.accountName}
                              placeholder="Enter the name"
                              containerClass="mb-6"
                              {...field}
                            />
                          )}
                        />

                        <FormField
                          control={control}
                          name="bank"
                          render={({ field }) => (
                            <FormInput
                              label="Bank"
                              error={errors.bank}
                              placeholder="Bank will be populated after inserting acct. number"
                              containerClass="mb-6"
                              {...field}
                            />
                          )}
                        />
                      </>
                    )}

                    {paymentType === "paypal" && (
                      <>
                        <FormField
                          control={control}
                          name="email"
                          render={({ field }) => (
                            <FormInput
                              label="Email Address"
                              error={errors.email}
                              placeholder="Email Address"
                              containerClass="mb-6"
                              {...field}
                            />
                          )}
                        />
                      </>
                    )}
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
                      label="Submit Payment Information"
                      className="w-[227px] h-[52px]"
                      type="submit"
                    />
                  </div>
                </form>
              </Form>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-[256px]">
            <div className="w-[104px] h-[82px] ">
              <Image src={profile.message} alt="Message svg" />
            </div>
            <h3 className="font-medium text-xl text-neutral-600 pt-6 pb-2">
              Bank Details Verification
            </h3>
            <p className="text-base text-center">
              A certain amount will be sent to the account. To confirm, enter
              the amount upon confirmation
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
