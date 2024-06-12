import TaxInformationForm from "@/components/forms/profile/TaxInformation";
import ProfileTitle from "@/components/shared/ProfileTitle";
import React from "react";

const TaxInformation = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Tax Information" />
      <div className="border-t border-neutral-350">
        <TaxInformationForm />
      </div>
    </div>
  );
};

export default TaxInformation;
