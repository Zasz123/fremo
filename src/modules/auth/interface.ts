import { AuthType } from "../../types/user/user";

export interface AuthState {
  token: string | null;
  authMode: AuthType;
  isLoggedIn: boolean;
  info: {
    email: string;
    nickName: string;
  };
}
