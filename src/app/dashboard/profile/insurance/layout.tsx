"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import routes from "@/lib/routes";
import LicenseOptionsPopover from "@/components/shared/profile/popovers/LicenseOptionsPopover";
import { SharedNavigation } from "@/components/shared/dashboard/shared-navigation";

interface IProps {
  children: React.ReactNode;
}

const subNavData = [
  {
    id: 1,
    label: "Insurance",
    route: routes.dashboard.profile.insurance.path,
  },
  {
    id: 2,
    label: "Licences",
    route: routes.dashboard.profile.insurance.licenses.path,
  },
];

export default function Layout(props: IProps) {
  const { children } = props;

  return (
    <main className="app_dashboard_layout ">
      <div className="layout__child w-full">
        <div className="flex items-center justify-between">
          <ProfileTitle title="Insurance and Licenses" />
          <LicenseOptionsPopover />
        </div>
        <SharedNavigation data={subNavData} layoutId="insurance_sub_links" />
        <div className="border-t border-neutral-350 pt-8">{children}</div>
      </div>
    </main>
  );
}
