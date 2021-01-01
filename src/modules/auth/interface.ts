import { AuthType } from "../../types/auth/auth";

export interface AuthState {
  token: string;
  authMode: AuthType;
}
