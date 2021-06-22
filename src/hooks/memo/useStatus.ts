import { useSelector } from "react-redux";

import { RootType } from "../../modules";

export default function useStatus() {
  const memoStatus = useSelector((state: RootType) => state.memo);

  return memoStatus;
}
