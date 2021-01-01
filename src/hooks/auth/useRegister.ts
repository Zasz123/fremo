import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../lib/api/register";
import { userLogin } from "../../modules/auth";
import { IRegisterForm } from "../../types/auth/auth";

export function useRegister(form: IRegisterForm) {
  const dispatch = useDispatch();

  return useCallback(async () => {
    const result = await registerRequest(form);

    dispatch(userLogin(result.body));
  }, [dispatch]);
}
