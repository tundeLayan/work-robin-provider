/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Form, FormField } from "@/components/ui/form";
import { ConfirmIdentityOTPSchema } from "@/schema/auth/Login";
import { Button, FormRadioGroup, Checkbox } from "@/components";
import routes from "@/lib/routes";

type TIdentity = z.infer<typeof ConfirmIdentityOTPSchema>;

const radioOptions = [
  { value: "otp", label: "Use the OTP method", id: "otp" },
  {
    value: "third-party",
    label: "Use a third-party authenticator",
    id: "third-party",
  },
];

const ConfirmIdentityForm = () => {
  const navigate = useRouter();
  const [alwaysRememberDevice, setAlwaysRememberDevice] = useState(false);
  const form = useForm<TIdentity>({
    resolver: zodResolver(ConfirmIdentityOTPSchema),
    defaultValues: {
      identity: "otp",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = form;

  const onSubmit = (values: TIdentity) => {
    if (getValues("identity") === "otp") {
      navigate.push(routes.auth.login.confirmIdentity.otp);
    } else if (getValues("identity") === "third-party") {
      navigate.push(routes.auth.login.confirmIdentity.thirdParty);
    }
  };
  return (
    <div className="md:pt-[200px] ">
      <Form {...form}>
        <form
          className=" w-[70%] mx-auto py-5 mt-14 md:mt-5"
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="mb-6">
            <h5 className="WR-form-headers">Confirm Identity</h5>
            <p className="">
              Enter the code sent to your email to confirm your identity
            </p>
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="identity"
              render={({ field }) => (
                <FormRadioGroup
                  options={radioOptions}
                  defaultValue={field.value}
                  onChange={field.onChange}
                  className=""
                />
              )}
            />
          </div>

          <Button label="Verify" className="w-full" />

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

export default ConfirmIdentityForm;
