import { useMutation } from "@tanstack/react-query";

import api from "../../api";
import { ResourceRequest } from "./types";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";

const BASE_URL = "/users/providers/profile/resources";

export const useResourcePost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: ResourceRequest): Promise<any> => {
      return await api.patch({ url: BASE_URL, body });
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
