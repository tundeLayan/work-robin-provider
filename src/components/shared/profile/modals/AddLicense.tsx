"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormField } from "@/components/ui/form";
import FormSelect from "@/components/FormSelect";
import { FileUploadV1, FormInput, UploadedFile } from "@/components";
import { TaxTypes } from "@/constants";
import { FormDatePicker } from "@/components/FormDate";
import authAssets from "@/lib/assets/Auth";
import {
  TLicense,
  licenseSchema,
} from "@/schema/profileSettings/licenseSchema";
import FileUploadV2 from "@/components/FileUpload/FileUploadV2";
import profile from "@/lib/assets/profile";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddLicense({ open, setOpen }: IProps) {
  const form = useForm<TLicense>({
    resolver: zodResolver(licenseSchema),
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const isFileUploaded = watch("certificate");

  const onSubmit = () => {};
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[501px] overflow-y-auto min-h-[515px] max-h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pb-6 ">
            Add License
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Form {...form}>
            <form
              className=" "
              onSubmit={handleSubmit(onSubmit, (err) => {
                console.log("error is", err);
              })}
            >
              <FormField
                control={control}
                name="state"
                render={({ field }) => (
                  <FormSelect
                    label="State"
                    error={errors.state}
                    placeholder="Select One"
                    containerClass="mb-6 "
                    className=""
                    selectData={TaxTypes}
                    {...field}
                  />
                )}
              />
              <FormField
                control={control}
                name="license"
                render={({ field }) => (
                  <FormSelect
                    label="License"
                    error={errors.license}
                    placeholder="Select One"
                    containerClass="mb-6"
                    className=""
                    selectData={TaxTypes}
                    {...field}
                  />
                )}
              />
              <FormField
                control={control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormInput
                    label="License Number"
                    error={errors.licenseNumber}
                    placeholder="License Number"
                    containerClass="mb-6"
                    {...field}
                  />
                )}
              />
              <FormField
                control={control}
                name="link"
                render={({ field }) => (
                  <FormInput
                    label="License Link"
                    error={errors.link}
                    placeholder="Paste here"
                    containerClass="mb-6"
                    {...field}
                  />
                )}
              />
              <FormField
                control={control}
                name="issueDate"
                render={({ field }) => (
                  <FormDatePicker
                    label="Issue Date"
                    error={errors.issueDate}
                    placeholder="Select One"
                    containerClass="mb-6"
                    {...field}
                  />
                )}
              />
              <FormField
                control={control}
                name="expiryDate"
                render={({ field }) => (
                  <FormDatePicker
                    label="Expiry Date"
                    error={errors.expiryDate}
                    placeholder="Select One"
                    containerClass="mb-6"
                    {...field}
                  />
                )}
              />

              <div className="mt-4 mb-8">
                <div className="pt-1">
                  {isFileUploaded ? (
                    <>
                      <UploadedFile
                        deleteIcon={profile.fileDelete}
                        {...{ isResumeUploaded: isFileUploaded }}
                        onDeleteFile={() => {
                          setValue("certificate", null);
                        }}
                      />
                      <div className="mt-4">
                        <FormField
                          control={control}
                          name="certificate"
                          render={({ field }) => (
                            <FileUploadV2
                              setFile={(e) => {
                                console.log("set file");
                                field.onChange(e);
                              }}
                              buttonText="Upload your certificate"
                              error={errors?.certificate}
                              accept={[
                                "image/png",
                                "image/svg+xml",
                                "image/jpeg",
                                "image/gif",
                              ]}
                            />
                          )}
                        />
                      </div>
                    </>
                  ) : (
                    <FormField
                      control={control}
                      name="certificate"
                      render={({ field }) => (
                        <FileUploadV1
                          containerClass="mb-3"
                          borderColor="#4640DE"
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
                        >
                          <>
                            <Image
                              alt="upload icon"
                              src={authAssets.UploadIcon}
                              className="w-10 h-10"
                            />

                            <div className="flex items-center gap-[6px]">
                              <p className="text-base font-medium text-[#4640DE] leading-[25.6px] font-epilogue">
                                Click or replace
                              </p>
                              <p className="text-base font-medium leading-[25.6px] font-epilogue">
                                to drag and drop
                              </p>
                            </div>
                            <p className="text-base font-medium leading-[25.6px] font-epilogue">
                              SVG, PNG, JPG or GIF (max. 400 x 400px)
                            </p>
                          </>
                        </FileUploadV1>
                      )}
                    />
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <DialogClose>
                  <Button
                    label="Cancel"
                    className="w-[105px] h-[52px] border-primary-500"
                    type="button"
                    variant="neutral"
                  />
                </DialogClose>
                <Button
                  label="Add Certification"
                  className="w-[160px] h-[52px]"
                  type="submit"
                />
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
