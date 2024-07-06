import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components";
import authAssets from "@/lib/assets/Auth";

const GoogleLoginComponent = () => {
  const GoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
  });
  return (
    <>
      <Button
        className="bg-neutral-750 text-black w-full text-base font-medium border border-secondary-200 mb-4"
        icon={authAssets.GoogleIcon}
        label="Sign up with Google"
        onClick={() => {
          GoogleLogin();
        }}
        type="button"
      />
    </>
  );
};

export default GoogleLoginComponent;
