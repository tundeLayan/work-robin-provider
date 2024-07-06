import React from "react";

import { Button } from "@/components";
import authAssets from "@/lib/assets/Auth";
// import AppleLogin from "react-apple-login";

const AppleAuthComponent = () => {
  return (
    <Button
      className="text-black border-black w-full"
      variant="neutral"
      icon={authAssets.AppleIcon}
      label="Sign up with Apple"
      type="button"
    />
  );
};

export default AppleAuthComponent;
