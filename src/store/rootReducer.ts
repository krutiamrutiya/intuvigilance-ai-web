import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "@store/reducers/loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
