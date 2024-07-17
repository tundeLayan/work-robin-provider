import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import keys from "./keys";
import { GenericResponse } from "@/services/generalTypes";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { LicenceRequest, LicenceResponse, LicensesType } from "./types";

const BASE_URL = "/licenses";

export const useLicenceRead = (url: string) => {
  const hash = [keys.read, url];
  const { data, isLoading, isPending, error } = useQuery<LicenceResponse>({
    queryKey: hash,
    queryFn: async () => await api.get({ url, auth: true }),
  });
  return {
    data: data?.licenses,
    meta: data?.pagination,
    isLoading,
    isPending,
    error,
  };
};

export const useLicenceReadOne = (id: string) => {
  const { data, isLoading, isPending, error } = useQuery<LicensesType>({
    queryKey: [keys.readOne, id],
    queryFn: async () =>
      await api.get({ url: `${BASE_URL}/${id}`, auth: true }),
  });
  return {
    data,
    isLoading,
    isPending,
    error,
  };
};

export const useLicencePost = (close: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: LicenceRequest): Promise<any> => {
      return await api.post({
        url: BASE_URL,
        body,
      });
    },
    onSuccess: async (data: GenericResponse) => {
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
      successToast(data.message);
      close();
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

export const useLicencePatch = (close: () => void, id: string = "") => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: LicenceRequest): Promise<any> => {
      return await api.patch({
        url: `${BASE_URL}/${id}`,
        body,
      });
    },
    onSuccess: async (data: GenericResponse) => {
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
      successToast(data.message);
      close();
    },
    onError: (data: GenericResponse) => {
      errorToast(handleErrors(data));
    },
  });
  return {
    updateMutate: mutate,
    updateIsPending: isPending,
    updateIsError: isError,
  };
};

export const useLicenceDelete = (close: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (id: string): Promise<any> => {
      return await api.delete({
        url: `${BASE_URL}/${id}`,
      });
    },
    onSuccess: async (data: GenericResponse) => {
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
      close();
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
