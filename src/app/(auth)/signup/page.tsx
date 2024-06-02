"use client";

import React, { Suspense } from "react";

import { SignUpForm } from "@/components/forms";

const Signup = () => {
  return (
    <div>
      <Suspense>
        <SignUpForm />
      </Suspense>
    </div>
  );
};

export default Signup;
