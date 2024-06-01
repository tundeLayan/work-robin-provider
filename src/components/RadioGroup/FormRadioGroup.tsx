import React from "react";
import {
  RadioGroup as ShadCnRadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

// NOTE: Must be used within a form i.e. React hook form and shadcn form
interface IProps {
  options: { value: string; label: string; id: string }[];
  defaultValue: string;
  onChange: (val: string) => void;
  className?: string;
}

const FormRadioGroup = (props: IProps) => {
  const { options, defaultValue, onChange, className = "" } = props;
  return (
    <FormItem>
      <FormControl>
        <ShadCnRadioGroup
          onValueChange={onChange}
          defaultValue={defaultValue}
          className={className}
        >
          {options.map(({ value, label, id }) => (
            <FormItem className="" key={id}>
              <FormControl>
                <RadioGroupItem value={value} />
              </FormControl>
              <FormLabel className="text-neutral-600 text-xs font-normal leading-[19.2px]">
                {label}
              </FormLabel>
            </FormItem>
          ))}
        </ShadCnRadioGroup>
      </FormControl>
    </FormItem>
  );
};

export default FormRadioGroup;
