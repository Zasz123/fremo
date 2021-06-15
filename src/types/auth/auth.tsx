export interface IRegisterForm {
  email: string;
  password: string;
  nickName: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export type AuthType = "REGISTER" | "LOGIN";
