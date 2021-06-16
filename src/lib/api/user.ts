import { AxiosResponse } from "axios";

import { getRequest } from "../../utils/api";

export const getMyInfo = async () => {
  const result: AxiosResponse = await getRequest("/user");

  return result;
};
