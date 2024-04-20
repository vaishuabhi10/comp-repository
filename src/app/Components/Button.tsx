import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  children: ReactNode;
}

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  console.log("children", children);
  console.log("cn", cn(buttonVariant({ variant, size, className })));
  return (
    <button
      className={cn(buttonVariant({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariant = cva("button", {
  variants: {
    variant: {
      primary:
        "border-2 rounded-md px-4 py-1.5 text-neutral-50 bg-buttonRed hover:bg-red-800",
      primaryType1:
        "border-2 border-buttonRed outline-none rounded-md px-4 py-1.5 bg-neutral-50 hover:bg-red-800",
      secondary:
        "border rounded-md px-4 py-1.5 text-neutral-50 bg-green hover:bg-green-800",
      ternery:
        "border rounded-md px-4 py-1.5 text-neutral-50 bg-red hover:bg-green-800",
      danger:
        "border border-red-800 rounded-md px-3 py-2 text-red-800 bg-white-700 hover:bg-white-800",
      icon: "border border-red-800 rounded-full px-5 py-1.5 text-red-800 bg-pink text-neutral-50 hover:bg-white-800",
      icon2:
        "border border-red-800 rounded-full px-5 py-1.5 text-red-800 bg-white-700 hover:bg-white-800",
    },
    size: {
      sm: "text-sm ",
      md: "text-base ",
      lg: "text-xl font-medium ",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
export default Button;
