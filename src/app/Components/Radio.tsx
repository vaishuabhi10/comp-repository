import { VariantProps, cva } from "class-variance-authority";
import React, { InputHTMLAttributes, ReactNode } from "react";
import cn from "../utils/cn";

interface RadioProps 
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariant> {
    label?: ReactNode;
}

const Radio = ({
    label,
    className,
    variant,
    size,
    ...props
  }: RadioProps) => {
    console.log("children", label);
    console.log("cn", cn(radioVariant({ variant, size, className })));
    return (
      <label>
        <input
          type="radio"
          className={cn(radioVariant({ variant, size, className }))}
          {...props}
        />
        {label}
      </label>
    );
  };
  
  const radioVariant = cva("radio", {
    variants: {
      variant: {
        default: "appearance-none rounded-full border-2 border-gray-300 w-6 h-6 checked:bg-blue-500 checked:border-orange",
        custom: "appearance-none rounded-full border-2 border-red-500 w-6 h-6 checked:bg-red-500 checked:border-green",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  });
  
  export default Radio;