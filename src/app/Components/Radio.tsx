import { VariantProps, cva } from "class-variance-authority";
import React, { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react";
import cn from "../utils/cn";

interface RadioProps 
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariant> {
    label?: ReactNode;
    value?: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void; 
    className?: string; 
    variant?: "type1" | "type2" | "type4" | "type3" | "type5" | "type6" | "type7";
}

const Radio = ({
    label,
    value,
    checked,
    onChange,
    className,
    variant,
    ...props
  }: RadioProps) => {
    console.log("children", label);
    console.log("cn", cn(radioVariant({ variant, className })));

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      onChange(event);
      console.log("radio button clicked");
    };

    return (
      <label className={cn(radioVariant({ variant, className }), isChecked && ( variant === 'type6' || variant === 'type7' ) && 'font-bold')}>
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        {label}
      </label>
    );
  };
  
  const radioVariant = cva("radio", {
    variants: {
      variant: {
        type1: "bg-darkred text-white rounded accent-darkred",
        type2: "bg-darkorange text-white rounded pr-14 pl-16 py-2 accent-darkorange",
        type3: "accent-darkred text-grey1 py-4 pl-10 pr-56",
        type4: "accent-black text-black",
        type5: "accent-darkred text-darkred m-4",
        type6: "accent-green text-black",
        type7: "accent-darkred text-black",
      },
    },
    defaultVariants: {
      variant: "type4",
    },
  });
  
  export default Radio;