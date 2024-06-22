"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import ProfileRates from "@/components/forms/profile/Rates";

const Rates = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Rates & Location" />
      <div className="border-t border-neutral-350 pt-8">
        <ProfileRates />
      </div>
    </div>
  );
};

export default Rates;
