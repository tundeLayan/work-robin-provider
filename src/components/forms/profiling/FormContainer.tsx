"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import cx from "classnames";

import { Form } from "@/components/ui/form";
import { formSchema } from "@/schema/profile/onboardingProfiling";
import {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
} from "@/components/forms/profiling";
import { RenderIf } from "@/components/shared";

type TForm = z.infer<typeof formSchema>;

const steps = 5;
const ProfilingForm = () => {
  const [currentStep, setCurrentStep] = useState(4);

  const form = useForm<TForm>({
    // resolver: zodResolver(formSchemaMapping[currentStep]),
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamMembersEmails: [{ teamMembersEmail: "" }],
    },
  });

  const isCurrentStepBarDone = (step: number) => {
    return step <= currentStep;
  };

  const { handleSubmit, getValues } = form;

  const onSubmit = (values: TForm) => {
    console.log("values", values);
  };

  const nextPage = () => {
    if (currentStep < steps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // handle last page, probably trigger handle submit
    }
  };

  const prevPage = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      // can't go back
    }
  };

  const skipPages = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className={`grid grid-cols-5 gap-1 w-4/12 mx-auto`}>
        {new Array(steps).fill(0).map((step, idx) => (
          <div
            key={step}
            className={cx(`border-neutral-350 border-[4px]`, {
              "border-primary-50": isCurrentStepBarDone(idx + 1),
            })}
          ></div>
        ))}
      </div>
      <div className={cx(" w-4/12 mx-auto")}>
        <Form {...form}>
          <form
            className="Profiling-form w-full mx-auto py-5 mt-14 md:mt-5 "
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log("error is", err);
            })}
          >
            {/* Form1 */}
            <RenderIf condition={currentStep === 1}>
              <Form1 {...{ form, nextPage }} />
            </RenderIf>
            {/* Form2 */}
            <RenderIf condition={currentStep === 2}>
              <Form2 {...{ form, nextPage, prevPage }} />
            </RenderIf>
            <RenderIf condition={currentStep === 3}>
              <Form3 {...{ form, nextPage, prevPage, skipPages }} />
            </RenderIf>
            <RenderIf condition={currentStep === 4}>
              <Form4 {...{ form, nextPage, prevPage, skipPages }} />
            </RenderIf>
            <RenderIf condition={currentStep === 5}>
              <Form5
                {...{ form, prevPage }}
                onSubmit={() => {
                  onSubmit(getValues());
                }}
              />
            </RenderIf>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ProfilingForm;
