import React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import cx from "classnames";

import { Button, Checkbox, FormInput, FormRadioGroup } from "@/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workingHoursSchema } from "@/schema/profileSettings/WorkingHours";
import { capitalizeFirstLetter } from "@/utils";

type TForm = z.infer<typeof workingHoursSchema>;

const radioOptions = [
  {
    value: "always",
    label: "Always available",
    id: "always",
    description: "Work anytime, with no limits.",
  },
  {
    value: "away",
    label: "Away",
    id: "away",
    description:
      "Take a break from work for a while, for example, for vacation, illness, or maintenance. You can also set a date when you will return.",
  },
  {
    value: "custom",
    label: "Custom Availability",
    id: "custom",
    description:
      "Set specific days and hours for your work. You can do this for each product or service if you have more than one.",
  },
];

const daysOptions = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

const WorkingHours = () => {
  const form = useForm<TForm>({
    resolver: zodResolver(workingHoursSchema),
    defaultValues: {
      workingHours: "always",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = form;

  const selectedOption = watch("workingHours");

  const onSubmit = () => {};

  return (
    <div className="max-w-[600px]">
      <Form {...form}>
        <form
          className="Profiling-form w-full mx-auto pb-5 mt-0 md:mt-5 "
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <FormField
            control={form.control}
            name="workingHours"
            render={({ field }) => (
              <FormRadioGroup
                options={radioOptions}
                defaultValue={field.value}
                onChange={field.onChange}
                className=""
                itemClassName="border-0 py-0 pb-6"
              />
            )}
          />
          {selectedOption === "custom" && (
            <div>
              {daysOptions.map((day, i) => (
                <div key={i} className="flex items-center gap-4 pb-4">
                  <FormField
                    control={form.control}
                    name={`${day}_check`}
                    render={({ field }) => (
                      <FormItem
                        className={cx(
                          "flex flex-row items-center gap-3  w-[136px]",
                          { "pt-5": i === 0 },
                        )}
                      >
                        <FormControl>
                          <Checkbox
                            isChecked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <div className="!mt-0">
                          <FormLabel className="font-medium text-sm text-neutral-1000 ">
                            {capitalizeFirstLetter(day)}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`${day}_from`}
                    render={({ field }) => (
                      <FormInput
                        label={i === 0 ? "From" : ""}
                        error={errors[`${day}_from`]}
                        placeholder="9:00AM"
                        containerClass="flex-1"
                        className="rounded-none"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    control={control}
                    name={`${day}_to`}
                    render={({ field }) => (
                      <FormInput
                        label={i === 0 ? "To" : ""}
                        error={errors[`${day}_to`]}
                        placeholder="9:00AM"
                        containerClass="flex-1"
                        className="rounded-none"
                        {...field}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="px-7 py-4 border border-350 rounded-2xl mb-8">
            <div className="pt-5">
              <h3 className="font-bold text-base pb-2">Pause my account</h3>
              <p className="text-neutral-1000 text-sm font-medium pb-4">
                When you pause your account, you will stop getting notification
                from work offers, and we can’t apply for any work offers.
              </p>
            </div>
            <FormField
              control={form.control}
              name="pause"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-3 pb-6">
                  <FormControl>
                    <Checkbox
                      isChecked={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <div className="!mt-0">
                    <FormLabel className="font-medium text-sm text-neutral-1000 ">
                      Use different settings for my mobile devices
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="h-8 w-[146px] bg-secondary-300 flex items-center justify-center rounded">
              <p className="text-white text-sm font-semibold">
                Pause my account
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <Button
              disabled={false}
              type="button"
              variant="neutral"
              label="Cancel"
              className="w-[108px] rounded-xl h-[54px] border-primary-500"
            />
            <Button
              disabled={false}
              type="submit"
              label="Save Changes"
              className="w-[165px] rounded-xl h-[54px]"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WorkingHours;
