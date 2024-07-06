import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import api from "../../api";
import routes from "@/lib/routes";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";

export const useInitializeProviderSignup = () => {
  const navigate = useRouter();
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({
      url,
      data,
    }: {
      url: string;
      data: any;
    }): Promise<any> => {
      return await api.post({ url, body: { data }, auth: false });
    },
    onSuccess: (res: GenericResponse, variables) => {
      console.log({ res });
      successToast(res?.data?.message as string);
      navigate.push(
        `${routes.auth.profiling.path}?email=${variables?.data?.email}`,
      );
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};

export const useCompleteProviderSignup = () => {
  const navigate = useRouter();
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({
      url,
      data,
    }: {
      url: string;
      data: any;
    }): Promise<any> => {
      return await api.post({ url, body: { data: { ...data } }, auth: false });
    },
    onSuccess: (res: GenericResponse) => {
      false && console.log({ res });
      successToast(res?.message);
      navigate.push(routes.auth.login.path);
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};

export const useResetPassword = () => {
  const navigate = useRouter();
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({
      url,
      data,
    }: {
      url: string;
      data: any;
    }): Promise<any> => {
      return await api.post({ url, body: { ...data }, auth: false });
    },
    onSuccess: (res: GenericResponse, variables) => {
      console.log({ res });
      successToast(res?.message);
      navigate.push(
        `${routes.auth.resetPassword.confirmationEmail.path}?email=${variables?.data?.email}`,
      );
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};

export const useResendResetEmail = () => {
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({
      url,
      data,
    }: {
      url: string;
      data: any;
    }): Promise<any> => {
      return await api.post({ url, body: { ...data }, auth: false });
    },
    onSuccess: (res: GenericResponse) => {
      console.log({ res });
      successToast(res?.message);
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};

export const useCreatePassword = () => {
  const navigate = useRouter();
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({
      url,
      data,
    }: {
      url: string;
      data: any;
    }): Promise<any> => {
      return await api.post({ url, body: { ...data } });
    },
    onSuccess: (res: GenericResponse) => {
      false && console.log({ res });
      successToast(res?.message);
      navigate.push(routes.auth.resetPassword.passwordSuccess.path);
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};

export const useVerifyHash = (urlToRedirect: string) => {
  const navigate = useRouter();
  const { mutate, isPending, isError, ...rest } = useMutation({
    mutationFn: async ({ url, data }: any): Promise<any> => {
      return await api.post({ url, body: { ...data }, auth: false });
    },
    onSuccess: (res: GenericResponse) => {
      const userId = res?.data?.data?.user_id;
      console.log({ res });
      successToast(res?.message);
      navigate.push(`${urlToRedirect}&userid=${userId}`);
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    mutate,
    isPending,
    isError,
    rest,
  };
};
