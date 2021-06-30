import { createReducer } from "typesafe-actions";
import { AuthState } from "./interface";
import { AuthActions } from "./types";
import { USER_LOGIN, USER_LOGOUT } from "./actions";

const initialState: AuthState = {
  token: null,
  authMode: "REGISTER",
  isLoggedIn: false,
  info: {
    email: "",
    nickName: "",
  },
};

const reducer = createReducer<AuthState, AuthActions>(initialState, {
  [USER_LOGIN]: (state, { payload: { token, email, nickName } }) => {
    return {
      ...state,
      isLoggedIn: true,
      info: {
        email,
        nickName,
      },
      token,
    };
  },
  [USER_LOGOUT]: (state, _) => {
    return {
      ...state,
      token: null,
      isLoggedIn: false,
      authMode: "LOGIN",
      info: {
        email: "",
        nickName: "",
      },
    };
  },
});

export default reducer;
