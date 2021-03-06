import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useInputs } from "../../hooks/common/useInputs";

import { IRegisterForm } from "../../types/user/user";

import RegisterForm from "../../components/auth/register/RegisterForm";
import { useAuth } from "../../hooks/auth/useAuth";

const RegisterFormContainer = () => {
  const auth = useAuth();
  const history = useHistory();

  const { data, setData, onChange } = useInputs<IRegisterForm>({
    email: "",
    password: "",
    nickName: "",
  });

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, nickName } = data;

    const isSuccess = await auth.register({ email, password, nickName });

    if (!isSuccess) {
      alert("회원가입에 실패했습니다.");

      setData({
        ...data,
        password: "",
      });
    }

    history.push("/");
    alert("회원가입에 성공했습니다.");
  };

  return (
    <RegisterForm data={data} onChange={onChange} onRegister={onRegister} />
  );
};

export default RegisterFormContainer;
