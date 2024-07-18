import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import { GenericResponse } from "@/services/generalTypes";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { RequestServiceRequest } from "./types";

const BASE_URL = "/users/providers/register-service-company";

export const useRequestServicePost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: RequestServiceRequest): Promise<any> => {
      return await api.post({
        url: BASE_URL,
        body,
      });
    },
    onSuccess: async (data: GenericResponse) => {
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
