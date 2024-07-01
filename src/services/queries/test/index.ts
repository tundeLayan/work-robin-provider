import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { TestType } from "./types";
import keys from "./keys";

/**
 *
 * NOTE: This is an example query file
 */

const BASE_URL = "/test";

export const useRead = () => {
  const { data, isLoading, error } = useQuery<TestType>({
    queryKey: [keys.read],
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const usePost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async () => {
      return await api.post({ url: BASE_URL, body: {} });
    },
    onSuccess: () => {},
    onError: () => {},
  });
  return {
    mutate,
    isPending,
    isError,
  };
};
