"use client";

import { useEffect, useState } from "react";

import { baseUrl } from "../constants";
import { getParseFloat, isObjectEmpty } from "../utils";
import { useSearchParams } from "next/navigation";

export interface Params {
  skip: string;
  limit: number;
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
  const skipPage = getParseFloat(params.get("skip") || "0");
  const [filters, setFilters] = useState<Params>({
    skip: skipPage.toString(),
    limit: 20,
    startDate: "",
    endDate: "",
    ...extraParameters,
  });

  useEffect(() => {
    setFilters((prev) => ({ ...prev, skip: skipPage.toString() }));
  }, [skipPage]);

  const url = buildApiUrl(path, filters, extraParameters);

  return { url, filters, setFilters };
};

export default useFilters;
