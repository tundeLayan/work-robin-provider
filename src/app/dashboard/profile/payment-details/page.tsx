"use client";

import React, { useState } from "react";
import Image from "next/image";

import ProfileTitle from "@/components/shared/ProfileTitle";
import { AddPayment } from "@/components/shared/profile/modals/AddPayment";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import profile from "@/lib/assets/profile";
import { TPayment } from "@/schema/profileSettings/PaymentDetails";
import PaymentCard from "@/components/shared/profile/PaymentCard";

const PaymentDetails = () => {
  const [paymentState, setPaymentState] = useState<
    Array<TPayment & { default: boolean }>
  >([
    {
      paymentType: "direct",
      routingNumber: "132235145",
      accountName: "Raji Oladeji",
      accountType: "Current",
      accountNumber: "132235145",
      bank: "Wema Bank",
      default: true,
    },
    {
      paymentType: "paypal",
      email: "rajioladeji2@gmail.com",
      default: false,
    },
  ]);
  return (
    <div className="layout__child">
      <ProfileTitle title="Payment Details" />
      <div className="pt-8 border-t border-neutral-350">
        <div className="">
          <div className="flex flex-wrap gap-4">
            {paymentState.map((pay, i) => (
              <PaymentCard key={i} pay={pay} />
            ))}
            <AddPayment set={setPaymentState}>
              <div className="flex flex-col gap-3 items-center justify-center w-[255px] h-[177px] border-dashed border border-neutral-350 rounded-xl ">
                <div className="w-6 h-6">
                  <Image src={profile.plusCircle} alt="Plus circle icon" />
                </div>
                <p>Add new</p>
              </div>
            </AddPayment>
          </div>

          <div className="mt-8 py-4 px-7 border border-neutral-350 rounded-xl">
            <div className="flex items-start gap-3 ">
              <Label htmlFor="enable-sendrobin" className="max-w-[415px]">
                <h3 className="font-bold text-base">Enable SendRobin</h3>
                <p className="text-xs pt-3 text-grey-600 leading-5">
                  SendRobin is a fast payment platform used by WorkRobin. You
                  will pay a 3% fee to take out money with this service. This
                  fee pays for the transaction and keeps the service running
                </p>
              </Label>
              <Switch id="enable-sendrobin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
