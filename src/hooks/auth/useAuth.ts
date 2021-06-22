import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ILoginForm, IRegisterForm } from "../../types/user/user";
import { userLogin } from "../../modules/auth";
import { loginRequest, registerRequest } from "../../lib/api/auth";
import { getMyInfo } from "../../lib/api/user";

export function useAuth() {
  const dispatch = useDispatch();

  const login = useCallback(
    async (loginData: ILoginForm) => {
      const result = await (await loginRequest(loginData)).data;

      if (!result.success) {
        return false;
      }

      const data = result.data;
      const user = data.user;

      localStorage.setItem("token", data.token);

      dispatch(
        userLogin({
          token: data.token,
          email: user.email,
          nickName: user.nickName,
        })
      );
      return true;
    },
    [dispatch]
  );

  const register = useCallback(
    async (registerData: IRegisterForm) => {
      const result = await (await registerRequest(registerData)).data;

      if (!result.success) {
        return false;
      }

      const data = result.data;
      const user = data.user;

      localStorage.setItem("token", data.token);

      dispatch(
        userLogin({
          token: data.token,
          email: user.email,
          nickName: user.nickName,
        })
      );
      return true;
    },
    [dispatch]
  );

  const loginWithToken = useCallback(
    async (token: string) => {
      const result = await (await getMyInfo()).data;

      if (!result.success) {
        return false;
      }

      const user = result.data;

      dispatch(
        userLogin({ token, email: user.email, nickName: user.nickName })
      );
    },
    [dispatch]
  );

  return {
    login,
    loginWithToken,
    register,
  };
}
