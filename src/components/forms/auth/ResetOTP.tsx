"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { otpSchema } from "@/schema/auth/otp";
import { Button, OtpInput } from "@/components";
import authAssets from "@/lib/assets/Auth";

type Totp = z.infer<typeof otpSchema>;

const ResetOTPForm = () => {
  const navigate = useRouter();
  const form = useForm<Totp>({
    resolver: zodResolver(otpSchema),
  });
  const {
    // register,
    handleSubmit,
    // control,
    formState: { errors },
  } = form;

  const onSubmit = (values: Totp) => {
    console.log("values", values);
    setTimeout(() => {
      navigate.push("/reset/confirmation-mail");
    }, 1000);
  };
  return (
    <div className="md:pt-[90px] ">
      <Form {...form}>
        <form
          className="py-5 mt-14 md:mt-5 flex flex-col items-center"
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
          <div className="mb-6 text-center w-10/12 mx-auto">
            <p className="text-secondary-150 mb-3 font-semibold text-[1.75rem] leading-[35px] tracking-[0.0125rem]">
              Reset your password
            </p>
            <h5 className="text-secondary-150 text-lg font-normal leading-[24px]">
              Enter the code sent to your email to reset your password
            </h5>
          </div>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <OtpInput className="my-4" length={6} {...field} />
                </FormControl>
                {!!errors.pin && <FormMessage className="text-xs" />}
              </FormItem>
            )}
          />
          <Button label="Reset Password" className="w-full mt-6" />
        </form>
        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem] mt-[72px]">
          Didn't receive a code?{" "}
          <Link className="text-primary-50 underline" href={"/login"}>
            Resend
          </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default ResetOTPForm;
