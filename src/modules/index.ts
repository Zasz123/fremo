import { combineReducers } from "redux";

import auth from "./auth";
import memo from "./memo";

const rootReducer = combineReducers({
  auth,
  memo,
});

export default rootReducer;

export type RootType = ReturnType<typeof rootReducer>;
