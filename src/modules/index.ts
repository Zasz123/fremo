import { combineReducers } from "redux";

import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export type RootType = ReturnType<typeof rootReducer>;
