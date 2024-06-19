"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import ProfileTitle from "@/components/shared/ProfileTitle";
import routes from "@/lib/routes";
import { matchRoute } from "@/utils";
import Link from "next/link";
import LicenseOptionsPopover from "@/components/shared/profile/popovers/LicenseOptionsPopover";

interface IProps {
  children: React.ReactNode;
}

const subNavData = [
  {
    id: 1,
    name: "Insurance",
    route: routes.dashboard.profile.insurance.path,
  },
  {
    id: 2,
    name: "Licences",
    route: routes.dashboard.profile.insurance.licenses.path,
  },
];

export default function Layout(props: IProps) {
  const { children } = props;
  const pathName = usePathname();

  return (
    <main className="app_dashboard_layout ">
      <div className="layout__child w-full">
        <div className="flex items-center justify-between">
          <ProfileTitle title="Insurance and Licenses" />
          <LicenseOptionsPopover />
        </div>
        <div>
          <ul className="flex items-center">
            {subNavData.map((sub, i) => {
              const active = matchRoute(pathName, sub.route);
              return (
                <Link href={sub.route} key={i}>
                  <div className="w-[120px]">
                    <li className=" text-center py-4 font-semibold text-sm text-grey-900">
                      {sub.name}
                    </li>
                    {active && (
                      <motion.div
                        layoutId="insurance_sub_links"
                        className="w-full h-1 bg-primary-50"
                      ></motion.div>
                    )}
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="border-t border-neutral-350 pt-8">{children}</div>
      </div>
    </main>
  );
}
