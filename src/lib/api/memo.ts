import { AxiosResponse } from "axios";
import { getRequest, postRequest } from "./api";

export const getRandomMemoRequest = async () => {
  const result: AxiosResponse = await getRequest("/memo");

  return result;
};
