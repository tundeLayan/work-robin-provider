import React from "react";

import { CreateNewPasswordForm } from "@/components/forms";

// NOTE: the link sent to the email should bring user to this page
const CreateNewPassword = () => {
  return (
    <div className="w-[95%] md:w-[28%] mx-auto">
      <CreateNewPasswordForm />
    </div>
  );
};

export default CreateNewPassword;
