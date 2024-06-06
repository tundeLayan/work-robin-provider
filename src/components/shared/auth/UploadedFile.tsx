import Image from "next/image";

import authAssets from "@/lib/assets/Auth";
import { bytesToKB } from "@/lib/utils";

interface IUploadedFileProps {
  isResumeUploaded?: File;
  onDeleteFile?: () => void;
}

const UploadedFile = (props: IUploadedFileProps) => {
  const {
    isResumeUploaded,
    onDeleteFile = () => {
      ("");
    },
  } = props;
  return (
    <div className="border-grey-100 flex justify-between py-6 px-[42px] bg-primary-600">
      <div className="flex gap-[15px]">
        <Image
          src={authAssets.PdfIcon}
          alt="icon"
          className="w-[31.5px] h-[31.5px]"
        />
        <span className="flex flex-col gap-1">
          <p className="text-tertiary-150 font-normal text-base leading-[19.36px]">
            {isResumeUploaded?.name || "dummyfile.pdf"}
          </p>
          <p className="font-normal text-xs leading-[14.52px] text-neutral-850">
            {bytesToKB(isResumeUploaded?.size) || "200kb"}
          </p>
        </span>
      </div>
      <Image
        src={authAssets.CloseIcon}
        alt="icon"
        role="button"
        onClick={onDeleteFile}
        className="w-[44px] h-[32px]"
      />
    </div>
  );
};

export default UploadedFile;
