import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import keys from "./keys";
import { GenericResponse } from "@/services/generalTypes";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { CertificationRequest, CertificationResponse } from "./types";

const BASE_URL = "/certifications";

export const useCertificationRead = (url: string) => {
  const hash = [keys.read, url];
  const { data, isLoading, isPending, error } = useQuery<CertificationResponse>(
    {
      queryKey: hash,
      queryFn: async () => await api.get({ url, auth: true }),
    },
  );
  return {
    data: data?.certifications,
    meta: data?.pagination,
    isLoading,
    isPending,
    error,
  };
};

export const useCertificationReadOne = (id: string) => {
  const { data, isLoading, isPending, error } = useQuery<any>({
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

export const useCertificationPost = (close: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: CertificationRequest): Promise<any> => {
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

export const useCertificationPatch = (close: () => void, id: string = "") => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: any): Promise<any> => {
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

export const useCertificationDelete = (close: () => void) => {
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
