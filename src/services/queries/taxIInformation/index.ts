import api from "../../api";
import { useMutation } from "@tanstack/react-query";
import { errorToast, handleErrors } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";
import {
  TaxInformationOtpRequest,
  TaxInformationOtpVerifyRequest,
  TaxInformationRequest,
} from "./types";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes";

const BASE_URL = "/providers/tax-information";

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

export const useTaxInformationPost = () => {
  const router = useRouter();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: TaxInformationRequest): Promise<any> => {
      return await api.post({
        url: `${BASE_URL}`,
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
