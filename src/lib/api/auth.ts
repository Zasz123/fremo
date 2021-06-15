import { AxiosResponse } from "axios";

import { IRegisterForm, ILoginForm } from "../../types/auth/auth";
import { postRequest } from "../../utils/api";

export const registerRequest = async (registerData: IRegisterForm) => {
  const result: AxiosResponse = await postRequest("/user", registerData);

  return result;
};

export const loginRequest = async (loginData: ILoginForm) => {
  const result: AxiosResponse = await postRequest("/user/login", loginData);

  return result;
};
