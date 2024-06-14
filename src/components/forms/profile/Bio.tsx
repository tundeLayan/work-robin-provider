import React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, FileUploadV1, FormTextarea, UploadedFile } from "@/components";
import authAssets from "@/lib/assets/Auth";
import { Form, FormField } from "@/components/ui/form";
import { profileBioSchema } from "@/schema/profileSettings/ProfileBio";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import profile from "@/lib/assets/profile";
import FileUploadV2 from "@/components/FileUpload/FileUploadV2";

type TForm = z.infer<typeof profileBioSchema>;

const ProfileBio = () => {
  const form = useForm<TForm>({
    resolver: zodResolver(profileBioSchema),
  });

  const {
    handleSubmit,
    control,
    watch,

    setValue,
    formState: { errors },
  } = form;

  console.log("errors", errors);

  const isResumeUploaded = watch("resume")!;

  const onSubmit = () => {};

  return (
    <div className="max-w-[560px]">
      <Form {...form}>
        <form
          className="Profiling-form w-full mx-auto pb-5 mt-0 md:mt-5 "
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("error is", err);
          })}
        >
          <FormField
            control={control}
            name="bio"
            render={({ field }) => (
              <FormTextarea
                label="Company Bio"
                error={errors.bio}
                placeholder="Enter your bio here"
                containerClass=""
                className=""
                {...field}
              />
            )}
          />
          <div className="mt-4 mb-8">
            <Label className="font-medium text-sm">My resume</Label>
            <div className="pt-1">
              {isResumeUploaded ? (
                <>
                  <UploadedFile
                    deleteIcon={profile.fileDelete}
                    {...{ isResumeUploaded }}
                    onDeleteFile={() => {
                      setValue("resume", null);
                    }}
                  />
                  <div className="mt-4">
                    <FormField
                      control={control}
                      name="resume"
                      render={({ field }) => (
                        <FileUploadV2
                          setFile={(e) => {
                            console.log("set file");
                            field.onChange(e);
                          }}
                          buttonText="Upload your resume"
                          error={errors?.resume}
                          accept={[
                            "application/pdf",
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          ]}
                        />
                      )}
                    />
                  </div>
                </>
              ) : (
                <>
                  <FormField
                    control={control}
                    name="resume"
                    render={({ field }) => (
                      <FileUploadV1
                        containerClass="mb-3"
                        uploadIcon={authAssets.UploadIcon}
                        setFile={(e) => {
                          field.onChange(e);
                        }}
                        accept={{
                          "application/pdf": [".pdf"],
                          "application/msword": [".doc"],
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                            [".docx"],
                        }}
                        // error={errors.resume}
                      />
                    )}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-10">
            <Button
              disabled={false}
              type="button"
              variant="neutral"
              label="Cancel"
              className="w-[108px] rounded-xl h-[54px]"
            />
            <Button
              disabled={false}
              type="submit"
              label="Save Changes"
              className="w-[165px] rounded-xl h-[54px]"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileBio;
