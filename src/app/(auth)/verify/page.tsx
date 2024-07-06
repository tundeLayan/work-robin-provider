"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { useVerifyHash } from "@/services/queries/auth";

const Verify = () => {
  const hasRun = useRef(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const hash = searchParams.get("hash");

  const { mutate } = useVerifyHash(
    `/profiling?activePage=formStepsPage&email=${email}`,
  );

  useEffect(() => {
    if (!hasRun.current) {
      // Your effect logic here
      mutate({
        url: `/auth/verify-hash`,
        data: {
          email,
          hash,
        },
      });
      hasRun.current = true;
    }
  }, []);

  // console.log({ data });
  return <div className=""></div>;
};

export default Verify;
