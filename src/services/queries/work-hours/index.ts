import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { WorkingHoursRequest, WorkingHoursResponse } from "./types";
import keys from "./keys";

const BASE_URL = "/users/providers/working-hours";

export const useWorkingHoursRead = () => {
  const { data, isLoading, error } = useQuery<WorkingHoursResponse>({
    queryKey: [keys.read],
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isLoading,
    error,
  };
};

export const useWorkingHoursPost = (workId: string = "") => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: WorkingHoursRequest): Promise<any> => {
      return await api.patch({ url: `${BASE_URL}/${workId}`, body });
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
