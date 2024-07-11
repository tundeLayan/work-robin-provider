import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import keys from "./keys";
import { GenericResponse } from "@/services/generalTypes";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { PaymentRequest, PaymentResponse, PaymentType } from "./types";

const BASE_URL = "/payment-methods";

export const usePaymentRead = () => {
  const hash = [keys.read];
  const { data, isLoading, isPending, error } = useQuery<PaymentResponse>({
    queryKey: hash,
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data: data?.paymentMethods,
    meta: data?.pagination,
    isLoading,
    isPending,
    error,
  };
};

export const usePaymentReadOne = (id: string) => {
  const { data, isLoading, isPending, error } = useQuery<PaymentType>({
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

export const usePaymentPost = (close: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: PaymentRequest): Promise<any> => {
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

export const usePaymentPatch = (close: () => void, id: string = "") => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: PaymentRequest): Promise<any> => {
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

export const usePaymentDelete = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (id: string): Promise<any> => {
      return await api.delete({
        url: `${BASE_URL}/${id}`,
      });
    },
    onSuccess: async (data: GenericResponse) => {
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
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
