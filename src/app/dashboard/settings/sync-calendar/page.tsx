"use client";

import React from "react";

import { ProfileTitle } from "@/components/shared/profile";
import { CalendarCard } from "@/components/shared/dashboard/settings";
import { Apple, Google } from "@/components/shared/svgs";

const Page = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Sync Calendar" />
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <div className="app_sync_calendar__grid">
          <CalendarCard icon={Google} label="Google" />
          <CalendarCard icon={Apple} label="Apple" />
        </div>
      </div>
    </div>
  );
};

export default Page;
