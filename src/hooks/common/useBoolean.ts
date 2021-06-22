import { useState } from "react";

function useBoolean(initialValue?: boolean) {
  const [data, setData] = useState<boolean>(initialValue || false);

  return {
    data,
    setData,
  };
}

export { useBoolean };
