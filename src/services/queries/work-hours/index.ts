import { useMutation, useQuery } from "@tanstack/react-query";

import api from "../../api";
import { WorkingHoursRequest, WorkingHoursResponse } from "./types";
import keys from "./keys";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";

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
    onSuccess: (data: GenericResponse) => {
      successToast(data.message);
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
