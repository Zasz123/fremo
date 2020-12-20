import { useState } from "react";

export default function useInputs<T>(initValue: T) {
  const [data, setData] = useState<T>(initValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
