import api from "../../api";
import { useMutation } from "@tanstack/react-query";
import { UpdateBioRequest } from "./types";

const BASE_URL = "/users/providers/profile/bio-and-resume";

export const useBioPost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: UpdateBioRequest): Promise<any> => {
      return await api.patch({ url: BASE_URL, body });
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
