"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";

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
import { Button, OtpInput, Checkbox } from "@/components";

type Totp = z.infer<typeof otpSchema>;
const OTPForm = () => {
  // const navigate = useRouter();
  const [alwaysRememberDevice, setAlwaysRememberDevice] = useState(false);
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
  };
  return (
    <div className="md:pt-[200px] ">
      <Form {...form}>
        <form
          className=" w-[81%] mx-auto py-5 mt-14 md:mt-5"
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="mb-6 text-black">
            <h5 className="WR-form-headers">Confirm Identity</h5>
            <p className="text-[18px] font-normal leading-[27px]">
              Open your authenticator on your phone and generate your login code
            </p>
          </div>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <OtpInput
                    className="my-4"
                    length={6}
                    label="Enter code generated"
                    {...field}
                  />
                </FormControl>
                {!!errors.pin && <FormMessage className="text-xs" />}
              </FormItem>
            )}
          />
          <Button label="Verify" className="w-full mt-6" />
          <div className="mt-8 mb-6">
            <Checkbox
              id="remember-device"
              onChange={(e) => {
                setAlwaysRememberDevice(e as boolean);
              }}
              isChecked={alwaysRememberDevice}
            >
              <p className="">Always remember this device</p>
            </Checkbox>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OTPForm;
