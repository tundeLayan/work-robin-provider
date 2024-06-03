/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import cx from "classnames";

import { Form, FormField } from "@/components/ui/form";

import { createNewPasswordSchema } from "@/schema/auth/CreateNewPassword";
import { Button, FormInput } from "@/components";
import authAssets from "@/lib/assets/Auth";
import { RenderIf } from "@/components/shared";

type TCreatePassword = z.infer<typeof createNewPasswordSchema>;

const CreateNewPassword = () => {
  const navigate = useRouter();
  const [passwordValidations, setPasswordValidations] = useState({
    hasAtleast8Characters: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowerCase: false,
  });
  const { hasAtleast8Characters, hasLowerCase, hasNumber, hasUppercase } =
    passwordValidations;
  const form = useForm<TCreatePassword>({
    resolver: zodResolver(createNewPasswordSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = form;

  const reset = () => {
    setPasswordValidations({
      hasAtleast8Characters: false,
      hasNumber: false,
      hasUppercase: false,
      hasLowerCase: false,
    });
  };

  // REFACTOR: TODO: Make this reusable, Move to utils file
  const validatePasswordInput = () => {
    const password = watch("password");

    if (password?.length === 0) {
      reset();
      return;
    }
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const hasAtleast8Characters = password?.length >= 8;
    // lowercase
    // because the lowercase regex validates for empty string, we have to make sure string is not empty
    if (lowercaseRegex.test(password) && password?.length > 0) {
      setPasswordValidations((prev) => ({ ...prev, hasLowerCase: true }));
    } else {
      setPasswordValidations((prev) => ({ ...prev, hasLowerCase: false }));
    }
    // uppercase
    if (uppercaseRegex.test(password)) {
      setPasswordValidations((prev) => ({ ...prev, hasUppercase: true }));
    } else {
      setPasswordValidations((prev) => ({ ...prev, hasUppercase: false }));
    }

    // number
    if (numberRegex.test(password)) {
      setPasswordValidations((prev) => ({ ...prev, hasNumber: true }));
    } else {
      setPasswordValidations((prev) => ({ ...prev, hasNumber: false }));
    }

    // length
    if (hasAtleast8Characters) {
      setPasswordValidations((prev) => ({
        ...prev,
        hasAtleast8Characters: true,
      }));
    } else {
      setPasswordValidations((prev) => ({
        ...prev,
        hasAtleast8Characters: false,
      }));
    }
  };

  useEffect(() => {
    validatePasswordInput();
  }, [watch("password")]);

  const onSubmit = (values: TCreatePassword) => {
    navigate.push("/reset-password/password-success");
  };

  const renderIcon = (isValid: boolean) => {
    return isValid ? (
      <Image
        src={authAssets.SmallCheckMark}
        className="w-[13.33px] h-[13.33px]"
        alt=""
      />
    ) : (
      <Image
        src={authAssets.SmallCancelMark}
        className="w-[13.33px] h-[13.33px]"
        alt=""
      />
    );
  };

  // TODO: follow the design
  return (
    <div className="md:pt-[70px] ">
      <Form {...form}>
        <form
          className="py-5 mt-2 md:mt-5"
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <div className="mb-5">
            <Image
              src={authAssets.Padlock}
              alt=""
              className="w-[49.41px] h-[64px] mx-auto"
            />
          </div>
          <div className="mb-6 text-center w-9/12 mx-auto">
            <p className="text-secondary-150 mb-3 font-semibold text-[1.75rem] leading-[35px] tracking-[0.0125rem]">
              Create a new password
            </p>
            <h5 className="text-secondary-150 text-lg font-normal leading-[24px]">
              Set your new password with minimum 8 characters with a combination
              of letters and numbers
            </h5>
          </div>
          <div className="mb-5">
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormInput
                  label="New Password"
                  // error={errors.password}
                  type="password"
                  placeholder="Enter your password"
                  containerClass="mb-4"
                  {...field}
                />
              )}
            />
            <RenderIf
              condition={Object.values(passwordValidations).some((val) => !val)}
            >
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 font-manrope">
                <p
                  className={cx(
                    `text-sm font-normal leading-[22.4px] text-danger-150 flex gap-2 items-center`,
                    {
                      "text-green-2": hasAtleast8Characters,
                    },
                  )}
                >
                  {renderIcon(hasAtleast8Characters)}8 Characters
                </p>
                <p
                  className={cx(
                    `text-sm font-normal leading-[22.4px] text-danger-150 flex gap-2 items-center`,
                    {
                      "text-green-2": hasNumber,
                    },
                  )}
                >
                  {renderIcon(hasNumber)}
                  Number(0-9)
                </p>
                <p
                  className={cx(
                    `text-sm font-normal leading-[22.4px] text-danger-150 flex gap-2 items-center`,
                    {
                      "text-green-2": hasUppercase,
                    },
                  )}
                >
                  {renderIcon(hasUppercase)}
                  Uppercase letter (A-Z)
                </p>
                <p
                  className={cx(
                    `text-sm font-normal leading-[22.4px] text-danger-150 flex gap-2 items-center`,
                    {
                      "text-green-2": hasLowerCase,
                    },
                  )}
                >
                  {renderIcon(hasLowerCase)}
                  Lowercase letter (a-z)
                </p>
              </div>
            </RenderIf>
          </div>
          <FormField
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <FormInput
                label="Confirm New Password"
                error={errors.confirmPassword}
                type="password"
                placeholder="Re-type your new password"
                containerClass="mb-4"
                {...field}
              />
            )}
          />

          <Button label="Continue" className="w-full" />
        </form>
        <p className="text-center text-neutral-250 text-sm font-medium leading-[1.4rem] mt-[72px]">
          Didn't receive the mail?{" "}
          <Link className="text-primary-50 underline" href={"/signup"}>
            Resend
          </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default CreateNewPassword;
