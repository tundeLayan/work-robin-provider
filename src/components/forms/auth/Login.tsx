/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import Link from "next/link";

import { loginSchema } from "@/schema/auth/Login";
import { Button, FormInput } from "@/components";

type TLogin = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (values: TLogin) => {};
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
            <p className="WR-form-sub-headers">LOGIN</p>
            <h5 className="WR-form-headers">Welcome Admin</h5>
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
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <>
                <FormInput
                  label="Password"
                  error={errors.email}
                  placeholder="Enter your password"
                  type="password"
                  containerClass=""
                  {...field}
                />
              </>
            )}
          />

          <Button label="Login" className="w-full mt-[40px]" />
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
