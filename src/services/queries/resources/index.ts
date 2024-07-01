import api from "../../api";
import { useMutation } from "@tanstack/react-query";
import { ResourceRequest } from "./types";

const BASE_URL = "/users/providers/profile/resources";

export const useResourcePost = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (body: ResourceRequest): Promise<any> => {
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
