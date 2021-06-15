import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useInputs from "../../hooks/common/useInputs";

import { ILoginForm } from "../../types/auth/auth";

import LoginForm from "../../components/auth/login/LoginForm";
import { useAuth } from "../../hooks/auth/useAuth";

const LoginFormContainer = () => {
  const auth = useAuth();
  const history = useHistory();

  const { data, setData, onChange } = useInputs<ILoginForm>({
    email: "",
    password: "",
  });

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;

    const isSuccess: boolean = await auth.login({ email, password });

    if (!isSuccess) {
      alert("로그인에 실패했습니다.");

      setData({
        ...data,
        password: "",
      });
    }

    history.push("/");
    alert("로그인에 성공했습니다.");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      alert("이미 로그인 하셨습니다.");
      history.push("/");
    }
  }, []);

  return <LoginForm data={data} onChange={onChange} onLogin={onLogin} />;
};

export default LoginFormContainer;
