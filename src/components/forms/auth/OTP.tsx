"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
import Link from "next/link";

import { otpSchema } from "@/schema/auth/otp";
import { Button, OtpInput } from "@/components";
import { COMPANY_DATA } from "@/constants/companyData";

type Totp = z.infer<typeof otpSchema>;
const OTPForm = () => {
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
      navigate.push("/signup?active=signup2");
    }, 1000);
  };
  return (
    <div className="md:pt-[200px] ">
      <Form {...form}>
        <form
          className=" w-[75%] mx-auto py-5 mt-14 md:mt-5"
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="mb-6 text-black">
            <p className="WR-form-sub-headers">GET STARTED</p>
            <h5 className="WR-form-headers">Welcome to {COMPANY_DATA.name}</h5>
            <p className="text-[18px] font-normal leading-[27px]">
              We've sent an OTP to adeleketobiloba@gmail.com. If it's not in
              your inbox, check your spam/junk folder.
            </p>
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
          <Button label="Create Account" className="w-full mt-6" />
        </form>
        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem]">
          Already have an account?{" "}
          <Link className="text-primary-50" href={"/login"}>
            Login Here
          </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default OTPForm;
