import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "./keys";
import { ProfileRequest, ProfileResponse } from "./types";

const BASE_URL = "/users/providers/profile";

export const useProfileRead = () => {
  const { data, isLoading, error } = useQuery<ProfileResponse>({
    queryKey: [keys.read],
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useProfilePost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: ProfileRequest): Promise<any> => {
      return await api.patch({
        url: BASE_URL,
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
