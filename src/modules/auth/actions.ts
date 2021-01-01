import { createAction } from "typesafe-actions";

import { AuthType } from "../../types/auth/auth";

export const USER_LOGIN = "auth/USER_LOGIN";
export const userLogin = createAction(USER_LOGIN)<{ token: string }>();

export const SWITCH_AUTH_TYPE = "auth/SWITCH_AUTH_TYPE";
export const switchAuthType = createAction(SWITCH_AUTH_TYPE)<{
  type: AuthType;
}>();
