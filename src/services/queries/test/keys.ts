import { getQueryKeys } from "../../helper";

const namespace = "test";

export default {
  ...getQueryKeys(namespace),
};
