import { useState } from "react";

function useInput(initValue?: string) {
  const [data, setData] = useState<string>(initValue || "");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData(e.target.value);
  };

  return {
    data,
    setData,
    onChange,
  };
}

function useInputs<T>(initValue: T) {
  const [data, setData] = useState<T>(initValue);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return {
    data,
    setData,
    onChange,
  };
}

export { useInput, useInputs };
