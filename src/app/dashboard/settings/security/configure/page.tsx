"use client";

import React from "react";

import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";

import { ProfileTitle } from "@/components/shared/profile";
import { ArrowLeft, Download } from "@/components/shared/svgs";
import { useRouter } from "next/navigation";
import { Button, FormInput } from "@/components";
import { Form, FormField } from "@/components/ui/form";
import routes from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { codeSchema } from "@/schema/settings/Configure";
import { z } from "zod";

type IValues = z.infer<typeof codeSchema>;
export default function Page() {
  const router = useRouter();

  const form = useForm<IValues>({
    resolver: zodResolver(codeSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (_values: IValues) => {
    router.push(routes.dashboard.settings.security.complete.path);
  };

  return (
    <div className="layout__child">
      <div className="flex flex-col gap-7">
        <div className="flex">
          <div className="">
            <button
              className="flex gap-3 item-center w-full"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowLeft />
              <p className="app_dashboard_sidebar__back__btn__text">Back</p>
            </button>
          </div>
        </div>

        <div className="app_security_page_indicator flex items-center justify-center gap-3">
          <div className="app_security_page_indicator__item active"></div>
          <div className="app_security_page_indicator__item active"></div>
          <div className="app_security_page_indicator__item"></div>
        </div>

        <ProfileTitle title="Configure" />
      </div>
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <Form {...form}>
          <form
            className=""
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log("error is", err);
            })}
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 app_security__info configure">
                <div className="flex items-start gap-4">
                  <div>
                    <Download />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="app_security__info__text">
                      Download an authentication app from Google Play Store or
                      App Store
                    </p>

                    <p className="app_security__enable">
                      WHY DO I NEED TO DO THIS?
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Download />

                    <p className="app_security__info__text">
                      Then open the authentication and use your phone camera to
                      scan this barcode.
                    </p>
                  </div>

                  <div className="">
                    <QRCode
                      value="2YTTWBBE8999"
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "221px",
                      }}
                      fgColor="#221a33"
                      bgColor="#fff"
                    />
                  </div>

                  <p className="app_security__info__text">
                    Can’t scan this barcode? Manually enter this code into the
                    authentication app
                  </p>

                  <p className="app_security__info__text bold">2YTTWBBE8999</p>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="tertiary"
                      label="Copy to Clipboard"
                      className="p-0 h-[unset]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <Download />
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="app_security__info__text">
                      Once you’ve configured the authentication app, enter the
                      given verification code
                    </p>

                    <div className="">
                      <FormField
                        control={control}
                        name="verificationCode"
                        render={({ field }) => (
                          <FormInput
                            error={errors.verificationCode}
                            placeholder="Verification code"
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-350"></div>

              <div className="">
                <Button label="Next" className=" rounded-xl h-14" />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
