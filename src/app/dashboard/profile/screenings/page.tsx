"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import ScreeningCard from "@/components/shared/profile/cards/ScreeningCard";
import routes from "@/lib/routes";

const screeningData = [
  {
    id: 1,
    name: "Background Check",
    price: "$40.00",
    route: routes.dashboard.profile.screenings.backgroundCheck.path,
  },
  {
    id: 2,
    name: "Drug Test",
    price: "$40.00",
    route: routes.dashboard.profile.screenings.drugTest.path,
  },
  //   {
  //     id: 1,
  //     name: "Check Check",
  //     price: "$40.00",
  //   },
];

const Screenings = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Screenings" />
      <div className="border-t border-neutral-350 pt-8">
        <div className="grid grid-cols-3 gap-6">
          {screeningData.map((screening, i) => (
            <ScreeningCard key={i} screening={screening} />
          ))}
        </div>
        <div className="border border-neutral-650 rounded-xl py-4 px-7 mt-8">
          <h2 className="pt-4 pb-4 font-bold text-base">Screening Process</h2>
          <h3 className="pb-3 font-medium text-sm">Start Screening:</h3>
          <p className="text-grey-600 pb-4 font-medium text-sm">
            Click "Order Now" to begin your selected screening.
          </p>
          <h3 className="pb-3 font-medium text-sm">Finalize Order:</h3>
          <p className="text-grey-600 pb-4 font-medium text-sm">
            Fill out the form and complete payment to finalize your order.
          </p>
          <h3 className="pb-1 font-medium text-sm">Guidance from Partners:</h3>
          <ul className="list-disc list-inside">
            <li className="pb-1 font-medium text-sm">
              Follow Instructions: Ensure successful completion of the screening
              process by adhering to emailed instructions.
            </li>
            <li className="pb-1 font-medium text-sm">
              Receive Notifications: Stay informed about the status of your
              screening results through notifications.
            </li>
            <li className="pb-1 font-medium text-sm">
              Automatic Profile Update: Your profile will be automatically
              updated upon successful completion of screenings.
            </li>
          </ul>
          <p className="text-grey-600 pb-4 pt-3 font-medium text-sm">
            Expect detailed instructions from our trusted screening partners via
            email.
          </p>
          <h3 className="pb-3 font-medium text-sm">Follow Instructions:</h3>
          <p className="text-grey-600 pb-4 font-medium text-sm">
            Ensure successful completion of the screening process by adhering to
            emailed instructions.
          </p>
          <h3 className="pb-3 font-medium text-sm">Receive Notifications:</h3>
          <p className="text-grey-600 pb-4 font-medium text-sm">
            Stay informed about the status of your screening results through
            notifications.
          </p>
          <h3 className="pb-3 font-medium text-sm">
            Automatic Profile Update:
          </h3>
          <p className="text-grey-600 pb-4 font-medium text-sm">
            Your profile will be automatically updated upon successful
            completion of screenings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screenings;
