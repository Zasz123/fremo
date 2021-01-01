import { post, Response } from "superagent";

import { IRegisterForm } from "../../types/auth/register";

export const registerRequest = async (registerData: IRegisterForm) => {
  const result: Response = await post("/").send(registerData);
  return result;
};