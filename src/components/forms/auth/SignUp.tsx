"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import cx from "classnames";

import { Form, FormField } from "@/components/ui/form";
import { signupSchema, signupSchema2 } from "@/schema/auth/Signup";
import { Button, Checkbox, FormInput } from "@/components";
import authAssets from "@/lib/assets/Auth";
import { COMPANY_DATA } from "@/constants/companyData";

type TSignup = z.infer<typeof signupSchema>;
type TSignup2 = z.infer<typeof signupSchema2>;
type IPage = "signup" | "signup2";

const schemaMapping: Record<string, any> = {
  signup: signupSchema,
  signup2: signupSchema2,
};

const SignUpForm = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");
  const [agreeToTermsAndCondition, setAgreeToTermsAndConditions] =
    useState(false);
  const [pageShowing, setPageShowing] = useState<IPage>(
    (searchParams.get("active") as IPage) || "signup",
  );
  const form = useForm<TSignup & TSignup2>({
    resolver: zodResolver(schemaMapping[pageShowing] ?? null),
  });
  console.log("agreeToTermsAndCondition", agreeToTermsAndCondition);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = form;

  useEffect(() => {
    if (searchParams.get("active")) {
      if (["signup", "signup2"].includes(searchParams.get("active") as IPage)) {
        setPageShowing(searchParams.get("active") as IPage);
      } else {
        return notFound();
      }
    } else {
      navigate.push("/signup?active=signup");
    }
  }, [searchParams.get("active")]);

  useEffect(() => {
    if (!userEmail && pageShowing === "signup2") return notFound();
  }, [pageShowing, userEmail]);

  const onSubmit = (values: TSignup) => {
    console.log("values", values);
    setTimeout(() => {
      navigate.push(`/signup?active=signup2&email=${values.email}`);
    }, 1000);
  };

  return (
    <div
      className={cx("md:pt-[200px]", {
        "md:pt-[90px]": pageShowing === "signup2",
      })}
    >
      {pageShowing === "signup" && (
        <Form {...form}>
          <form
            className=" w-[70%] mx-auto py-5 mt-14 md:mt-5"
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log("error is", err);
            })}
          >
            <div className="mb-6 text-center">
              <p className="WR-form-sub-headers">GET STARTED</p>
              <h5 className="WR-form-headers mb-6">
                Welcome to {COMPANY_DATA.name}
              </h5>
              <Button
                className="bg-neutral-750 text-black w-full text-base font-medium border border-secondary-200 mb-4"
                icon={authAssets.GoogleIcon}
                label="Sign up with Google"
              />
              <Button
                className="text-black border-black w-full"
                variant="neutral"
                icon={authAssets.AppleIcon}
                label="Sign up with Apple"
              />
            </div>
            <div className="flex gap-4 items-center mb-[18px]">
              <hr className="flex-1" />
              <p className="text-black text-sm font-medium leading-[22.4px]">
                Or register with
              </p>
              <hr className="flex-1" />
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
                  required
                  {...field}
                />
              )}
            />

            <Button disabled={!isValid} label="Continue" className="w-full" />
          </form>
          <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem]">
            Already have an account?{" "}
            <Link className="text-primary-50" href={"/login"}>
              Login Here
            </Link>{" "}
          </p>
        </Form>
      )}
      {pageShowing === "signup2" && (
        <Form {...form}>
          <form
            className=" w-[70%] mx-auto py-5 mt-14 md:mt-5"
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log("error is", err);
            })}
          >
            <div className="mb-6 text-center">
              <p className="WR-form-sub-headers">GET STARTED</p>
              <h5 className="WR-form-headers">
                Complete your free account setup
              </h5>
              <span className="bg-neutral-800 rounded-2xl px-[10px] py-1 flex items-center gap-1 text-neutral-600 w-fit mx-auto text-sm font-medium leading-5 mt-[28px] mb-5">
                {userEmail}
                <Image
                  className="w-2 h-[10.5px]"
                  alt="icon"
                  src={authAssets.UserIcon}
                />
              </span>
            </div>
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormInput
                  label="First Name"
                  error={errors.firstName}
                  placeholder="Enter your first name"
                  containerClass="mb-4"
                  required
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
                  placeholder="Enter your last name"
                  containerClass="mb-4"
                  required
                  {...field}
                />
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormInput
                  label="Password"
                  error={errors.password}
                  placeholder="Enter your password"
                  containerClass="mb-4"
                  type="password"
                  required
                  {...field}
                />
              )}
            />
            <div className="mt-8 mb-6">
              <Checkbox
                id="card-details"
                isChecked={agreeToTermsAndCondition}
                onChange={(e) => {
                  setAgreeToTermsAndConditions(e as boolean);
                }}
              >
                <p className="text-primary-50 text-xs">
                  By creating an account means you agree to the{" "}
                  <Link className="text-secondary-150" href="/">
                    Terms & Conditions
                  </Link>{" "}
                  and our{" "}
                  <Link className="text-secondary-150" href="/">
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
              </Checkbox>
            </div>

            <Button
              disabled={!agreeToTermsAndCondition}
              label="Continue"
              className="w-full"
            />
          </form>
          <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem]">
            Already have an account?{" "}
            <Link className="text-primary-50" href={"/login"}>
              Login Here
            </Link>{" "}
          </p>
        </Form>
      )}
    </div>
  );
};

export default SignUpForm;
