"use client";

import React from "react";

import ProfileBio from "@/components/forms/profile/Bio";
import ProfileTitle from "@/components/shared/ProfileTitle";

const Bio = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Become a Service Company" />
      <div className="border-t border-neutral-350 pt-8">
        <ProfileBio />
      </div>
    </div>
  );
};

export default Bio;
