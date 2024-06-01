import React from "react";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

interface IProps {
  placeholder: string;
  label: string;
  selectData: string[];
}

const Select = (props: IProps) => {
  const { placeholder, selectData, label } = props;
  return (
    <ShadSelect>
      <SelectGroup>
        <SelectLabel className="pl-0">{label}</SelectLabel>
        <SelectTrigger className="w-full h-[54px] rounded-[10px] ">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectData.map((sel, index) => (
            <SelectItem key={index} value={sel}>
              {sel}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectGroup>
    </ShadSelect>
  );
};

export default Select;
