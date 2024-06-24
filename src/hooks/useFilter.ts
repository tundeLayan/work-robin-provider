"use client";

import { useState } from "react";

import { baseUrl } from "../constants";
import { isObjectEmpty } from "../utils";
import { useSearchParams } from "next/navigation";

export interface Params {
  pageNumber: string;
  pageSize: number;
  startDate: string;
  endDate: string;
  [x: string]: string | boolean | number;
}

export interface UseFiltersResult {
  url: URL;
  filters: Params;
  setFilters: React.Dispatch<React.SetStateAction<Params>>;
}

const buildApiUrl = (
  path: string,
  filters: Params,
  extraParameters: Record<string, string>,
): URL => {
  const mergedFilters = { ...filters, ...extraParameters };
  const url = new URL(`${baseUrl}${path}`);
  if (!isObjectEmpty(mergedFilters)) {
    Object.entries(mergedFilters)
      .filter(([_, val]) => !!val)
      .forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
  }
  return url;
};

const useFilters = (
  path: string,
  extraParameters: Record<string, string> = {},
): UseFiltersResult => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [filters, setFilters] = useState<Params>({
    pageNumber: params.get("pageNumber") || "1",
    pageSize: 10,
    startDate: "",
    endDate: "",
    ...extraParameters,
  });

  const url = buildApiUrl(path, filters, extraParameters);

  return { url, filters, setFilters };
};

export default useFilters;
