export interface IRegisterForm {
  accountId: string;
  password: string;
  name: string;
  email: string;
}

export interface ILoginForm {
  accountId: string;
  password: string;
}

export type AuthType = "REGISTER" | "LOGIN";
