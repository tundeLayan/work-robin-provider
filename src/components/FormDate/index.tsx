"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FieldError } from "react-hook-form";

interface IProps {
  value: Date;
  onChange: any;
  label: string;
  error?: FieldError;
  placeholder: string;
  containerClass?: string;
}

export function FormDatePicker(props: IProps) {
  const { value, onChange, label, placeholder, containerClass } = props;
  return (
    <FormItem
      className={cn("flex flex-col", {
        [`${containerClass}`]: !!containerClass,
      })}
    >
      <FormLabel>{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn(
                "w-full pl-5 text-left text-sm text-neutral-250 rounded-[10px] font-normal justify-start",
                { "text-black": value },
              )}
            >
              {value ? format(value, "PPP") : placeholder}
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}
