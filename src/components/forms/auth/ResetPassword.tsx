/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Form, FormField } from "@/components/ui/form";

import { resetSchema } from "@/schema/auth/Reset";
import { Button, FormInput } from "@/components";
import authAssets from "@/lib/assets/Auth";

type TResetPassword = z.infer<typeof resetSchema>;
const ResetPasswordForm = () => {
  const navigate = useRouter();
  const form = useForm<TResetPassword>({
    resolver: zodResolver(resetSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (values: TResetPassword) => {
    navigate.push("/reset-password/otp");
  };
  return (
    <div className="md:pt-[90px] ">
      <Form {...form}>
        <form
          className="py-5 mt-14 md:mt-5"
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="mb-16">
            <Image
              src={authAssets.Padlock}
              alt=""
              className="w-[49.41px] h-[64px] mx-auto"
            />
          </div>
          <div className="mb-6 text-center w-9/12 mx-auto">
            <p className="text-secondary-150 mb-3 font-semibold text-[1.75rem] leading-[35px] tracking-[0.0125rem]">
              Reset your password
            </p>
            <h5 className="text-secondary-150 text-lg font-normal leading-[24px]">
              Enter your email address and we'll send you password reset
              instructions.
            </h5>
          </div>
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormInput
                label="Email Address"
                error={errors.email}
                placeholder="example@company.com"
                containerClass="mb-4"
                {...field}
              />
            )}
          />

          <Button label="Send Email" className="w-full" />
        </form>
        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem] mt-[72px]">
          Didn't receive a code?{" "}
          <Link className="text-primary-50 underline" href={"/signup"}>
            Resend
          </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
