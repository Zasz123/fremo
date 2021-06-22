import { AxiosResponse } from "axios";

import { getRequest } from "./api";

export const getMyInfo = async () => {
  const result: AxiosResponse = await getRequest("/user");

  return result;
};
