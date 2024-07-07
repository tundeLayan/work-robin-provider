import React, { ReactNode } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
