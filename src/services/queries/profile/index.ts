import api from "../../api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "./keys";
import { ProfileRequest, ProfileResponse } from "./types";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";

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
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: ProfileRequest): Promise<any> => {
      return await api.patch({
        url: BASE_URL,
        body,
      });
    },
    onSuccess: async (data: GenericResponse) => {
      successToast(data.message);
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
    },
    onError: (data: GenericResponse) => {
      errorToast(handleErrors(data));
    },
  });
  return {
    mutate,
    isPending,
    isError,
  };
};
