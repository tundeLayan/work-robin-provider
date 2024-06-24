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
  const page = searchParams.get("pageNumber");

  const handleNextPage = () => {
    const nextPage = page ? getParseFloat(page) + 1 : 2;
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", clamp(nextPage, 1, totalPages).toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePrevPage = () => {
    if (!page) return;

    const prevPage = getParseFloat(page) - 1;

    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", clamp(prevPage, 1, totalPages).toString());

    router.replace(`${pathname}?${params.toString()}`);
  };

  const changePerPage = (per: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", per);

    router.replace(`${pathname}?${params.toString()}`);
  };

  return [handleNextPage, handlePrevPage, changePerPage];
};

export default usePagination;
