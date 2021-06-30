import { createAction } from "typesafe-actions";

export const USER_LOGIN = "auth/USER_LOGIN";
export const userLogin = createAction(USER_LOGIN)<{
  token: string;
  email: string;
  nickName: string;
}>();

export const USER_LOGOUT = "auth/USER_LOGOUT";
export const userLogout = createAction(USER_LOGOUT)();
