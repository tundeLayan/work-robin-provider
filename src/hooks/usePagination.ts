import { clamp, getParseFloat } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  totalPages?: number;
}

type HandleNextPage = () => void;
type HandlePrevPage = () => void;
type ChangePerPage = (per: string) => void;

const usePagination = (
  props: IProps,
): [HandleNextPage, HandlePrevPage, ChangePerPage] => {
  const { totalPages = 1 } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = getParseFloat(searchParams.get("skip") || "0");

  const handleNextPage = () => {
    const nextPage = page === 0 ? 1 : page ? page + 1 : 2;
    const params = new URLSearchParams(searchParams);
    params.set("skip", clamp(nextPage, 0, totalPages).toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePrevPage = () => {
    if (!page) return;

    const prevPage = page - 1;

    const params = new URLSearchParams(searchParams);
    params.set("skip", clamp(prevPage, 0, totalPages).toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  const changePerPage = (per: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("skip", (getParseFloat(per) - 1).toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  return [handleNextPage, handlePrevPage, changePerPage];
};

export default usePagination;
