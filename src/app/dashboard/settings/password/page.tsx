"use client";

import React from "react";

import { ProfileTitle } from "@/components/shared/profile";
import PasswordSettings from "@/components/forms/settings/PasswordSettings";

const CompanyProfile = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Password" />
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <PasswordSettings />
      </div>
    </div>
  );
};

export default CompanyProfile;
