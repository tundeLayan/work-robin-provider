import api from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";
import {
  TaxInformationOtpRequest,
  TaxInformationOtpVerifyRequest,
  TaxInformationRequest,
  TaxInformationResponse,
} from "./types";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes";
import keys from "./keys";

const BASE_URL = "/users/providers/tax-information";

export const useTaxInformationOtpPost = () => {
  const router = useRouter();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: TaxInformationOtpRequest): Promise<any> => {
      return await api.post({
        url: "/otps/tax-information-update",
        body,
      });
    },
    onSuccess: () => {
      router.push(routes.dashboard.profile.taxInformation.otp.path);
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

export const useTaxInformationOtpVerifyPost = () => {
  const router = useRouter();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: TaxInformationOtpVerifyRequest): Promise<any> => {
      return await api.post({
        url: "/auth/verify-otp",
        body,
      });
    },
    onSuccess: () => {
      router.push(routes.dashboard.profile.taxInformation.path);
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

export const useTaxInformationPost = (id: string = "") => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: TaxInformationRequest): Promise<any> => {
      return await api.patch({
        url: `${BASE_URL}/${id}`,
        body,
      });
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
export const useTaxInformationRead = () => {
  const hash = [keys.read];
  const { data, isPending, error } = useQuery<TaxInformationResponse>({
    queryKey: hash,
    queryFn: async () => await api.get({ url: BASE_URL, auth: true }),
  });
  return {
    data,
    isPending,
    error,
  };
};
