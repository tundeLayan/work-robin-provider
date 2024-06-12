"use client";

import React from "react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import ContactInformationForm from "@/components/forms/profile/ContactInformation";

const ContactInformation = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Contact Information" />
      <div className="border-t border-neutral-350">
        <ContactInformationForm />
      </div>
    </div>
  );
};

export default ContactInformation;
