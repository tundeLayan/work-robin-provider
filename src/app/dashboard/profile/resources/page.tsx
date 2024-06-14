"use client";

import React, { useState } from "react";

import { X } from "lucide-react";

import ProfileTitle from "@/components/shared/ProfileTitle";
import Command from "@/components/Command";
import { Button } from "@/components";

const data = [
  {
    name: "Skills",
    options: [
      {
        value: "plumbing",
        label: "Plumbing",
      },
      {
        value: "driving",
        label: "Driving",
      },
      {
        value: "sleeping",
        label: "Sleeping",
      },
    ],
  },
  {
    name: "Equipments",
    options: [
      {
        value: "plumbing",
        label: "Plumbing",
      },
      {
        value: "driving",
        label: "Driving",
      },
      {
        value: "sleeping",
        label: "Sleeping",
      },
    ],
  },
  {
    name: "Tools",
    options: [
      {
        value: "plumbing",
        label: "Plumbing",
      },
      {
        value: "driving",
        label: "Driving",
      },
      {
        value: "sleeping",
        label: "Sleeping",
      },
    ],
  },
];

interface ResourceState {
  skills: string[];
  equipments: string[];
  tools: string[];
}

const Resources = () => {
  const [resources, setResources] = useState<ResourceState>({
    skills: [],
    equipments: [],
    tools: [],
  });
  const removeResource = (name: string, resource: string) => {
    setResources((prev) => ({
      ...prev,
      [name]: prev[name as keyof typeof prev].filter((el) => el !== resource),
    }));
  };
  const addResource = (name: string, resource: string) => {
    if (!resources[name as keyof typeof resources].includes(resource)) {
      setResources((prev) => ({
        ...prev,
        [name]: [...prev[name as keyof typeof prev], resource],
      }));
    }
  };
  return (
    <div className="layout__child">
      <ProfileTitle title="Resources" />
      <div className="pt-8 border-t border-neutral-350">
        {data.map((group, i) => (
          <div key={i} className="pb-4">
            <h3 className="font-medium text-sm pb-1">{group.name}</h3>
            <div className="border rounded-lg border-primary-50 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {resources[
                  group.name.toLowerCase() as keyof typeof resources
                ].map((resource, i) => (
                  <div
                    key={i}
                    className="bg-primary-600 px-3 py-1 flex items-center gap-2"
                  >
                    <p className="text-sm text-primary-50">{resource}</p>
                    <button
                      onClick={() => {
                        removeResource(group.name.toLowerCase(), resource);
                      }}
                    >
                      <X className="h-4 w-4 text-primary-50 font-medium" />
                    </button>
                  </div>
                ))}
              </div>
              <Command
                placeholder="Start typing to search for skills"
                commandData={group.options}
                onSelect={(value: string) => {
                  addResource(group.name.toLowerCase(), value);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 mt-4 border-t border-neutral-350 flex items-center gap-6">
        <Button
          label="Cancel"
          className=" rounded-xl w-[108px] h-14 text-primary-50 border-primary-500"
          variant="neutral"
          type="button"
        />
        <Button
          label="Save Changes"
          className=" rounded-xl w-[165px] h-14"
          type="submit"
        />
      </div>
    </div>
  );
};

export default Resources;
