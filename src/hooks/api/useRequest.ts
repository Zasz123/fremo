import axios from "axios";

import { useBoolean } from "../common/useBoolean";
import useStatus from "../auth/useStatus";

const baseUrl = process.env.BASE_URL || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

export default function useRequest() {
  const { token } = useStatus();
  const { data: isLoading, setData: setIsLoading } = useBoolean();

  const getHeader = () => {
    return {
      token,
    };
  };

  const getRequest = async (path: string) => {
    setIsLoading(true);
    const result = await axios.get(path, {
      headers: getHeader(),
    });

    setIsLoading(false);
    return result;
  };

  const postRequest = async (path: string, body?: object) => {
    setIsLoading(true);
    const result = await axios.post(
      path,
      {
        ...body,
      },
      {
        headers: getHeader(),
      }
    );

    setIsLoading(false);
    return result;
  };

  const patchRequest = async (path: string, body: object) => {
    setIsLoading(true);
    const result = await axios.patch(
      path,
      {
        ...body,
      },
      {
        headers: getHeader(),
      }
    );

    setIsLoading(false);
    return result;
  };

  const deleteRequest = async (path: string) => {
    setIsLoading(true);
    const result = await axios.delete(path, {
      headers: getHeader(),
    });

    setIsLoading(false);
    return result;
  };

  return {
    isLoading,
    setIsLoading,
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
  };
}
