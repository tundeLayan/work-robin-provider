/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import { Form, FormField } from "@/components/ui/form";
import { loginSchema } from "@/schema/auth/Login";
import { Button, FormInput } from "@/components";
import routes from "@/lib/routes";
import { login } from "@/lib/auth";

type TLogin = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: TLogin) => {
    setLoading(true);
    try {
      await login(values);
      // navigate.push(routes.auth.login.confirmIdentity.path);
      navigate.push(routes.dashboard.entry.path);
    } catch (error) {
      // TODO: show toast
    } finally {
      setLoading(false);
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
            <p className="WR-form-sub-headers">LOGIN</p>
            <h5 className="WR-form-headers">Welcome back, Tobilola</h5>
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
                <div className="flex justify-end mb-4">
                  <Link
                    className="text-tertiary-100 text-sm font-medium leading-[1.4rem]"
                    href={routes.auth.resetPassword.forgotPassword.path}
                  >
                    Forgot Password
                  </Link>
                </div>
              </>
            )}
          />

          <Button label="Login" className="w-full" loading={loading} />
        </form>
        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem]">
          Don't have an account?{" "}
          <Link className="text-primary-50" href={routes.auth.signup.path}>
            Sign Up
          </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
