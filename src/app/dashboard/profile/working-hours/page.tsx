"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import WorkingHoursForm from "@/components/forms/profile/WorkingHours";

const WorkingHours = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Available Working Hours" />
      <div className="border-t border-neutral-350 pt-8">
        <WorkingHoursForm />
      </div>
    </div>
  );
};

export default WorkingHours;
