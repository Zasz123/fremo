import { createReducer } from "typesafe-actions";
import { AuthState } from "./interface";
import { AuthActions } from "./types";
import { USER_LOGIN } from "./actions";

const initialState: AuthState = {
  token: "",
};

const reducer = createReducer<AuthState, AuthActions>(initialState, {
  [USER_LOGIN]: (state, { payload: { token } }) => {
    return {
      ...state,
      token,
    };
  },
});

export default reducer;
