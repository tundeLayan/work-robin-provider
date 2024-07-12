"use client";

import React, { useEffect, useState } from "react";

import { ProfileTitle } from "@/components/shared/profile";
import { Button, Checkbox } from "@/components";
import {
  paymentsLabelMap,
  remindersLabelMap,
  workOrderLabelMap,
} from "@/utils/static";
import queries from "@/services/queries/notifications";
import { CheckedState } from "@radix-ui/react-checkbox";

interface INotificationItem {
  label: string;
  emailChecked?: boolean;
  notificationsChecked?: boolean;
  handelEmailChange: (e: CheckedState) => void;
  handelNotificationsChange: (e: CheckedState) => void;
}

const NotificationItem = (props: INotificationItem) => {
  const {
    label,
    handelEmailChange,
    handelNotificationsChange,
    emailChecked,
    notificationsChecked,
  } = props;

  return (
    <div className="app_notifications__ctt__item flex justify-between items-center">
      <p className="app_notifications__ctt__item__text">{label}</p>
      <div className="flex items-center justify-between app_notifications__ctt__item__box">
        <div className="app_notifications__ctt__item__box__cell">
          <Checkbox
            id="email"
            isChecked={emailChecked}
            onChange={(e) => {
              handelEmailChange(e);
            }}
          />
        </div>

        <div className="app_notifications__ctt__item__box__cell">
          <Checkbox
            id="notifications"
            isChecked={notificationsChecked}
            onChange={(e) => {
              handelNotificationsChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const CompanyProfile = () => {
  const { data } = queries.read();
  const { mutate, isPending } = queries.patch();

  const [workOrders, setWorkOrders] = useState<any>({});
  const [reminders, setReminders] = useState<any>({});
  const [payments, setPayments] = useState<any>({});
  const [general, setGeneral] = useState({
    newsletter: false,
    marketingMessages: false,
  });

  const handleSubmit = () => {
    const body = {
      data: {
        workOrders,
        reminders,
        payments,
        general,
      },
    };

    mutate({ body, id: data?.settings_id });
  };

  useEffect(() => {
    setWorkOrders(data?.workOrders || {});
    setReminders(data?.reminders || {});
    setPayments(data?.payments || {});
    setGeneral(data?.general);
  }, [data?.workOrders]);

  return (
    <div className="layout__child">
      <ProfileTitle title="Notifications" />
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-between items-center app_notifications__title app_notifications__mx">
            <p className="app_notifications__title__text">Notifications</p>

            <div className="flex items-center justify-between">
              <p className="app_notifications__title__text small app_notifications__ctt__item__box__cell">
                Email
              </p>
              <p className="app_notifications__title__text small app_notifications__ctt__item__box__cell">
                Notifications
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-350" />

          <div className="app_notifications__ctt app_notifications__mx flex flex-col gap-4">
            <p className="app_notifications__ctt__title">Work Orders</p>

            {Object.keys(workOrders as Record<string, any>).map((category) => {
              return (
                <NotificationItem
                  key={category}
                  label={workOrderLabelMap?.[category] || ""}
                  emailChecked={workOrders?.[category]?.email}
                  notificationsChecked={workOrders?.[category]?.push}
                  handelEmailChange={(e) => {
                    setWorkOrders({
                      ...workOrders,
                      [category]: { ...workOrders?.[category], email: e },
                    });
                  }}
                  handelNotificationsChange={(e) => {
                    setWorkOrders({
                      ...workOrders,
                      [category]: { ...workOrders?.[category], push: e },
                    });
                  }}
                />
              );
            })}
          </div>

          <div className="app_notifications__ctt app_notifications__mx flex flex-col gap-4">
            <p className="app_notifications__ctt__title">Reminders</p>

            {Object.keys(reminders as Record<string, any>).map((category) => {
              return (
                <NotificationItem
                  key={category}
                  label={remindersLabelMap?.[category] || ""}
                  emailChecked={reminders?.[category]?.email}
                  notificationsChecked={reminders?.[category]?.push}
                  handelEmailChange={(e) => {
                    setReminders({
                      ...reminders,
                      [category]: { ...reminders?.[category], email: e },
                    });
                  }}
                  handelNotificationsChange={(e) => {
                    setReminders({
                      ...reminders,
                      [category]: { ...reminders?.[category], push: e },
                    });
                  }}
                />
              );
            })}
          </div>

          <div className="app_notifications__ctt app_notifications__mx flex flex-col gap-4">
            <p className="app_notifications__ctt__title">Payments</p>

            {Object.keys(payments as Record<string, any>).map((category) => {
              return (
                <NotificationItem
                  key={category}
                  label={paymentsLabelMap?.[category] || ""}
                  emailChecked={payments?.[category]?.email}
                  notificationsChecked={payments?.[category]?.push}
                  handelEmailChange={(e) => {
                    setPayments({
                      ...payments,
                      [category]: { ...payments?.[category], email: e },
                    });
                  }}
                  handelNotificationsChange={(e) => {
                    setPayments({
                      ...payments,
                      [category]: { ...payments?.[category], push: e },
                    });
                  }}
                />
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <p className="app_notifications__ctt__title">General</p>

            <div className="border-t border-neutral-350" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Checkbox
                id="newsletter"
                isChecked={general?.newsletter}
                onChange={(e) => {
                  setGeneral({ ...general, newsletter: e as boolean });
                }}
              />

              <p className="app_notifications__ctt__item__text">
                <label htmlFor="newsletter" className="cursor-pointer">
                  Sign me up for all WorkRobin newsletter and
                </label>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="marketingMessages"
                isChecked={general?.marketingMessages}
                onChange={(e) => {
                  setGeneral({ ...general, marketingMessages: e as boolean });
                }}
              />
              <p className="app_notifications__ctt__item__text">
                <label htmlFor="marketingMessages" className="cursor-pointer">
                  Send me marketing messages about new features and tips
                </label>
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-350" />

          <div className="flex items-center gap-6">
            {/* <Button
              label="Cancel"
              className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
              variant="neutral"
              type="button"
            /> */}
            <Button
              label="Save Changes"
              className=" rounded-xl w-[243px] h-14"
              type="button"
              onClick={handleSubmit}
              loading={isPending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
