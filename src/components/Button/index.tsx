import React from "react";
import Image from "next/image";

import cx from "classnames";

import { Button as ShadCNButton } from "@/components/ui/button";
import { Loader } from "@/components";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "neutral"
    | "tertiary"
    | "danger"
    | "success"
    | "file"
    | "outline"
    | "ghost";
  icon?: string;
  iconAfter?: string;
  loading?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = (props: IButton) => {
  const {
    label,
    variant,
    icon,
    iconAfter,
    loading,
    className,

    disabled,
    type = "submit",
    ...rest
  } = props;
  return (
    <>
      <ShadCNButton
        disabled={loading || disabled}
        variant={variant}
        className={cx(
          className,
          {
            "border-neutral-500 bg-neutral-150 cursor-not-allowed": disabled,
          },
          { "cursor-progress opacity-85": loading },
          { "flex gap-4": loading || !!iconAfter || !!icon },
        )}
        type={type}
        {...rest}
      >
        {loading ? <Loader /> : null}
        {icon ? <Image src={icon} alt="" /> : ""}
        {label}
        {iconAfter ? <Image src={iconAfter} alt="" /> : ""}
      </ShadCNButton>
    </>
  );
};

export default Button;
