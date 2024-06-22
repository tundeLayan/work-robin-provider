import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import profile from "@/lib/assets/profile";

const CertificatePopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button">
          <Image src={profile.threeDots} alt="three dots icon" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        asChild
        align="end"
        className="p-0 rounded-[12px] w-[172px]"
      >
        <div className="px-6 py-6 flex flex-col items-start gap-6 ">
          <button className="text-sm font-medium tet-grey-500 w-full text-left">
            View File
          </button>
          <button className="text-sm font-medium tet-grey-500 w-full text-left">
            Update
          </button>

          <button className="text-sm font-medium tet-grey-500 w-full text-left">
            Delete
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CertificatePopover;
