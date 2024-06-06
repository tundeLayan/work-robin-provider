"use client";

import React, { useState } from "react";

import cx from "classnames";

import { StepsContainer } from "@/components/forms/profiling";
import { EmailWithIcon, RenderIf } from "@/components/shared";
import { Button } from "@/components";

const ProfilingForm = () => {
  const [currentPage, setCurrentPage] = useState<
    "welcomePage" | "formStepsPage"
  >("welcomePage");

  return (
    <>
      <RenderIf condition={currentPage === "welcomePage"}>
        <div className={cx(" w-4/12 mx-auto text-center")}>
          <EmailWithIcon userEmail="emmanuel@heunets.com" />
          <div className="text-center">
            <p className="Profiling-form-title mt-6 mb-6">
              Hey Emmanuel, Welcome to WorkRobin
            </p>
            <h5 className="Profiling-form-subtitle mb-9">
              Getting ready for your next offer? Let’s get your profile up to
              date. It only takes 5-6 minutes and you can edit it late. We’ll
              save as you go.
            </h5>
          </div>
          <Button
            label="Get Started"
            className="w-full"
            onClick={() => {
              setCurrentPage("formStepsPage");
            }}
          />
        </div>
      </RenderIf>
      <RenderIf condition={currentPage === "formStepsPage"}>
        <StepsContainer />
      </RenderIf>
    </>
  );
};

export default ProfilingForm;
