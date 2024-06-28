import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "./keys";
import { TProfileBio } from "@/schema/profileSettings/ProfileBio";

const BASE_URL = "/users/providers/profile/bio-and-resume";

export const useRead = () => {
  const { data, isLoading, error } = useQuery({
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
    mutationFn: async (body: TProfileBio): Promise<any> => {
      return await api.post({ url: BASE_URL, body });
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
