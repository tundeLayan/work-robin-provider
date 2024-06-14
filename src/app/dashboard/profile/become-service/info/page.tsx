"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import CompanyInformationForm from "@/components/forms/profile/CompanyInformation";

const Info = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Become a Service Company" />
      <div className="border-t border-neutral-350">
        <div>
          <h1 className="text-base font-medium pt-9 pb-5 ">
            New Company Information
          </h1>
        </div>
        <div>
          <CompanyInformationForm />
        </div>
      </div>
    </div>
  );
};

export default Info;
