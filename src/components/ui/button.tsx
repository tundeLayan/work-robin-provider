import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md 
  text-base font-bold font-medium ring-offset-white transition-colors focus-visible:outline-none 
  focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 
  disabled:pointer-events-none disabled:opacity-50 !disabled:cursor-not-allowed h-fit w-fit hover:opacity-70 leading-6 tracking-[0.0188rem]`,
  {
    variants: {
      variant: {
        primary: "bg-primary-50 text-white",
        neutral: "border border-secondary-100 bg-white",
        secondary: "bg-red-500 text-slate-50 ",
        tertiary: "bg-white text-primary-50 border-0",
        danger: "hover:bg-slate-100 border-danger-250 border text-danger-200 ",
        success: "text-slate-900 underline-offset-4 hover:underline ",
        file: "border border-primary-50 bg-white hover:text-primary-900 text-primary-50 ",
      },
      size: {
        default: "h-[56px] px-6 py-[1.3125rem]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
