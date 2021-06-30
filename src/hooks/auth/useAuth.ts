import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { ILoginForm, IRegisterForm } from "../../types/user/user";
import { userLogin, userLogout } from "../../modules/auth";
import useRequest from "../../hooks/api/useRequest";

export function useAuth() {
  const dispatch = useDispatch();

  const { isLoading, postRequest, getRequest } = useRequest();

  const login = useCallback(
    async (loginData: ILoginForm) => {
      const result = await (await postRequest("/user/login", loginData)).data;

      if (!result.success) {
        return false;
      }

      const data = result.data;
      const user = data.user;

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
      const result = await (await postRequest("/user", registerData)).data;

      if (!result.success) {
        return false;
      }

      const data = result.data;
      const user = data.user;

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
      const result = await (await getRequest("/user")).data;

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

  const silentRefresh = useCallback(async () => {
    const result = await (await postRequest("/user/silent-refresh")).data;

    if (!result.success) {
      return false;
    }

    const user = result.data.user;
    const token = result.data.token;

    dispatch(userLogin({ token, email: user.email, nickName: user.nickName }));
    return true;
  }, []);

  const logout = useCallback(async () => {
    const result = await (await getRequest("/user/logout")).data;

    if (!result.success) {
      return false;
    }

    dispatch(userLogout());
    return true;
  }, []);

  return {
    login,
    loginWithToken,
    register,
    silentRefresh,
    logout,
    isLoading,
  };
}
