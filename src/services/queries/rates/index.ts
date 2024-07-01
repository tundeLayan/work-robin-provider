import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "./keys";
import { RatesRequest, RatesResponse } from "./types";

const BASE_URL = "/users/providers/rates-and-location";

export const useRatesRead = () => {
  const { data, isLoading, error } = useQuery<RatesResponse>({
    queryKey: [keys.read],
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useRatesPost = (rateId: string = "") => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: RatesRequest): Promise<any> => {
      return await api.patch({
        url: `${BASE_URL}/${rateId}`,
        body,
      });
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
