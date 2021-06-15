import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ILoginForm, IRegisterForm } from "../../types/auth/auth";
import { userLogin } from "../../modules/auth";
import { loginRequest, registerRequest } from "../../lib/api/auth";

export function useAuth() {
  const dispatch = useDispatch();

  const login = useCallback(
    async (loginData: ILoginForm) => {
      const result = await (await loginRequest(loginData)).data;
      const data = result.data;

      if (!result.success) {
        return false;
      }

      localStorage.setItem("token", data.token);

      dispatch(userLogin(data.token));
      return true;
    },
    [dispatch]
  );

  const register = useCallback(
    async (registerData: IRegisterForm) => {
      const result = await (await registerRequest(registerData)).data;
      const data = result.data;

      if (!result.success) {
        return false;
      }

      localStorage.setItem("token", data.token);

      dispatch(userLogin(data.token));
      return true;
    },
    [dispatch]
  );

  return {
    login,
    register,
  };
}
