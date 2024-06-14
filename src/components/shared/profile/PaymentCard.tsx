import React from "react";
import Image from "next/image";

import cx from "classnames";

import Button from "@/components/Button";
import profile from "@/lib/assets/profile";
import { TPayment } from "@/schema/profileSettings/PaymentDetails";
import { maskString } from "@/utils";

interface IProps {
  pay: TPayment & { default: boolean };
}

const PaymentCard = ({ pay }: IProps) => {
  return (
    <div className="w-[255px] h-[177px] border border-neutral-350 rounded-xl px-6 py-3 flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="w-6 h-6">
          <Image
            src={
              pay.paymentType === "direct" ? profile.building : profile.paypal
            }
            alt="Payment Icon"
          />
        </div>
        <div>
          <p
            className={cx(
              "font-medium text-xs py-1 px-4 rounded-xl",
              {
                "bg-neutral-800": pay.default,
              },
              {
                "border border-neutral-1050 ": !pay.default,
              },
            )}
          >
            {pay.default ? "DEFAULT" : "SET AS DEFAULT"}{" "}
          </p>
        </div>
      </div>
      <div className="pt-4 pb-3 border-b border-neutral-350">
        <p className="font-medium text-xs">
          {pay.paymentType === "direct"
            ? `RN: ${maskString(
                pay.routingNumber,
                0,
                (pay.routingNumber?.length || 0) - 3,
              )}`
            : `${maskString(pay.email, 2, (pay.email?.length || 0) - 11)}`}
        </p>
        {pay.paymentType === "direct" && (
          <>
            <div className="pt-1">
              <p className="text-grey-500 font-medium text-[10px]">
                {pay.accountName} |{" "}
                {maskString(
                  pay.accountNumber,
                  0,
                  (pay.accountNumber?.length || 0) - 3,
                )}
                | {pay.accountType}
              </p>
            </div>
            <div className="pt-1 flex">
              <p className="font-medium text-xs py-1 px-4 rounded-xl bg-tertiary-200 text-tertiary-250">
                NOT VERIFIED
              </p>
            </div>
          </>
        )}
      </div>
      <div className="gap-2 flex pt-3">
        <Button
          label="Edit"
          variant="neutral"
          className="rounded-2xl h-7 font-bold text-[10px] py-1"
        />
        <Button
          label="Clear"
          variant="danger"
          className="rounded-2xl h-7 font-bold text-[10px] py-1"
        />
      </div>
    </div>
  );
};

export default PaymentCard;
