import { createReducer } from "typesafe-actions";
import { AuthState } from "./interface";
import { AuthActions } from "./types";
import { USER_LOGIN, SWITCH_AUTH_TYPE } from "./actions";

const initialState: AuthState = {
  token: "",
  authMode: "REGISTER",
};

const reducer = createReducer<AuthState, AuthActions>(initialState, {
  [USER_LOGIN]: (state, { payload: { token } }) => {
    return {
      ...state,
      token,
    };
  },
  [SWITCH_AUTH_TYPE]: (state, { payload: { type } }) => {
    return {
      ...state,
      authMode: type,
    };
  },
});

export default reducer;
