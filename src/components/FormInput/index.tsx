"use client";
import React, { useState } from "react";
import Image from "next/image";

import cx from "classnames";
import { type FieldError } from "react-hook-form";

import { Input as ShadInput } from "../ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import authAssets from "@/lib/assets/Auth";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  error?: FieldError;
  subText?: string;
}

/**
 *
 * NOTE: Must be used in a Form(shadcn form)
 */

const Input = ({
  label,
  containerClass,
  error,
  id,
  required,
  type = "text",
  subText,
  ...rest
}: InputProps) => {
  const [isPasswordField, setIsPasswordField] = useState(type === "password");
  return (
    <FormItem
      className={cx(
        "space-y-0",
        { "flex flex-col gap-1": !!label },
        { [`${containerClass}`]: !!containerClass },
      )}
    >
      {label ? (
        <FormLabel
          className={cx(
            "text-sm font-medium leading-[1.4rem] text-secondary-100",
            {
              "text-danger-100": !!error,
            },
          )}
          htmlFor={id}
        >
          {label} {required && <span className="text-danger-50">*</span>}
        </FormLabel>
      ) : null}
      <FormControl className="">
        <div className="relative">
          <ShadInput
            className="!mt-0 border border-neutral-400 focus:ring-transparent focus-visible:ring-transparent"
            id={id}
            // ref={ref}
            type={
              isPasswordField ? "password" : type === "password" ? "text" : type
            }
            {...rest}
          />

          {/* TODO: change to eye Icon */}
          {type === "password" && (
            <Image
              className="absolute w-5 h-5 right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
              width={10}
              height={10}
              src={authAssets.eye}
              alt=""
              onClick={() => {
                setIsPasswordField((prev) => !prev);
              }}
            />
          )}
        </div>
      </FormControl>
      {!!error && <FormMessage className="text-xs" />}
      {subText && (
        <p className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
          {subText}
        </p>
      )}
    </FormItem>
  );
};

export default Input;
