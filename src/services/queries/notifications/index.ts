import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../../api";
import keys from "./keys";
import { NotificationResponse } from "./types";
import { errorToast, handleErrors, successToast } from "@/services/helper";
import { GenericResponse } from "@/services/generalTypes";

/**
 *
 * NOTE: This is an example query file
 */

const BASE_URL = "/notification-settings";

export const read = () => {
  const response = useQuery({
    queryKey: [keys.read],
    queryFn: async () => await api.get({ url: BASE_URL }),
  });

  return {
    ...response,
    data: (response?.data || null) as NotificationResponse,
  };
};

const defaultOptions = {
  onSuccess: () => {},
};

interface IPatch {
  body: any;
  id: string;
}

const patch = (options = defaultOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess } = options;
  const { mutate, ...response } = useMutation({
    mutationFn: api.patch,
    mutationKey: [keys.patch],
    onSuccess: async () => {
      successToast("Settings saved successfully");
      await queryClient.invalidateQueries({ queryKey: [keys.read] });
      onSuccess();
    },
    onError: (err: GenericResponse) => {
      errorToast(handleErrors(err));
    },
  });
  return {
    ...response,
    mutate: (_body: IPatch) => {
      const { body, id } = _body;
      mutate({ url: `${BASE_URL}/${id}`, body });
    },
  };
};

const queries = { read, patch };

export default queries;
