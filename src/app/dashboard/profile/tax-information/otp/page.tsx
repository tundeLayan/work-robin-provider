"use client";

import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, OtpInput } from "@/components";
import profile from "@/lib/assets/profile";
import { useProfileRead } from "@/services/queries/profile";
import { useTaxInformationOtpVerifyPost } from "@/services/queries/taxIInformation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { verifyOtpSchema } from "@/schema/profileSettings/verifyOtp";
import { errorToast } from "@/services/helper";

type Totp = z.infer<typeof verifyOtpSchema>;
const Otp = () => {
  const { data } = useProfileRead();
  const { mutate, isPending } = useTaxInformationOtpVerifyPost();
  const form = useForm<Totp>({
    resolver: zodResolver(verifyOtpSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (values: Totp) => {
    if (!data?.email) {
      errorToast("Opps Something went wrong!");
      return;
    }
    mutate({
      email: data?.email,
      code: values.code,
    });
  };
  return (
    <div className="layout__child h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[559px] h-[530px] flex items-center justify-center rounded-xl border border-neutral-350 ">
          <div className="w-full px-16">
            <div className="pb-6 flex justify-center">
              <div className="w-12 h-16 ">
                <Image src={profile.lock} alt="Lock icon" />
              </div>
            </div>

            <Form {...form}>
              <form
                className=""
                onSubmit={handleSubmit(onSubmit, (err) => {
                  console.log("error is", err);
                })}
              >
                <div className="py-[70px]">
                  <div className="pb-6 ">
                    <h1 className="text-[28px] font-semibold pb-3 text-center">
                      Information Protected
                    </h1>
                    <h1 className="text-lg font-normal text-center">
                      Enter the code sent to your email to have access
                    </h1>
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <OtpInput
                              className="my-4 gap-[23px]"
                              length={6}
                              label="Enter OTP"
                              {...field}
                            />
                          </FormControl>
                          {!!errors.code && <FormMessage className="text-xs" />}
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="pt-8">
                    <Button
                      label="Grant Access"
                      className="w-full"
                      type="submit"
                      loading={isPending}
                    />
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
