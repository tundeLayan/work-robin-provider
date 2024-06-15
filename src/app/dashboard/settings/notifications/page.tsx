"use client";

import React from "react";

import { ProfileTitle } from "@/components/shared/profile";
import { Button, Checkbox } from "@/components";
import { notificationsData } from "@/utils/static";

interface INotificationItem {
  label: string;
}

const NotificationItem = (props: INotificationItem) => {
  const { label } = props;

  return (
    <div className="app_notifications__ctt__item flex justify-between items-center">
      <p className="app_notifications__ctt__item__text">{label}</p>
      <div className="flex items-center justify-between app_notifications__ctt__item__box">
        <div className="app_notifications__ctt__item__box__cell">
          <Checkbox id="email" isChecked />
        </div>

        <div className="app_notifications__ctt__item__box__cell">
          <Checkbox id="notifications" isChecked />
        </div>
      </div>
    </div>
  );
};

const CompanyProfile = () => {
  return (
    <div className="layout__child">
      <ProfileTitle title="Notifications" />
      <div className="pt-8 border-t border-neutral-350 pb-12">
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-between items-center app_notifications__title app_notifications__mx">
            <p className="app_notifications__title__text">
              Work Order Settings
            </p>

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

          {notificationsData.map((item) => (
            <div
              key={item.id}
              className="app_notifications__ctt app_notifications__mx flex flex-col gap-4"
            >
              <p className="app_notifications__ctt__title">{item.title}</p>

              {item.children.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  label={notification.label}
                />
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <p className="app_notifications__ctt__title">General</p>

            <div className="border-t border-neutral-350" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Checkbox id="newsletter" />

              <p className="app_notifications__ctt__item__text">
                Sign me up for all WorkRobin newsletter and
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox id="newsletter" />
              <p className="app_notifications__ctt__item__text">
                Send me marketing messages about new features and tips
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-350" />

          <div className="flex items-center gap-6">
            <Button
              label="Cancel"
              className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
              variant="neutral"
              type="button"
            />
            <Button
              label="Save Changes"
              className=" rounded-xl w-[243px] h-14"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
