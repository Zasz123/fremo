import { useSelector } from "react-redux";

import { RootType } from "../../modules";

export default function useStatus() {
  const authStatus = useSelector((state: RootType) => state.auth);

  return authStatus;
}
