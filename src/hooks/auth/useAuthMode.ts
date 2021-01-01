import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { switchAuthType } from "../../modules/auth";
import { AuthType } from "../../types/auth/auth";

export default function useAuthMode() {
  const dispatch = useDispatch();

  return useCallback((type: AuthType) => dispatch(switchAuthType({ type })), [
    dispatch,
  ]);
}
