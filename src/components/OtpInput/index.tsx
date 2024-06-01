import React from "react";

import { ControllerRenderProps } from "react-hook-form";
import cx from "classnames";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface IProps {
  length: number;
  className: string;
  field?: ControllerRenderProps<Record<string, any>, any>;
}

const OtpInput = (props: IProps) => {
  const { length, className, ...rest } = props;
  return (
    <InputOTP
      maxLength={length}
      containerClassName={cx("gap-[32px]", { [`${className}`]: className })}
      {...rest}
    >
      {Array.from({ length }).map((_, index) => (
        <InputOTPGroup key={index}>
          <InputOTPSlot index={index} className={cx("w-[54px] h-[54px]")} />
        </InputOTPGroup>
      ))}
    </InputOTP>
  );
};

export default OtpInput;
