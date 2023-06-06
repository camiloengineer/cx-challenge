import { createContext } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./user";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
});

const middleware = [thunkMiddleware];

export const toolkitStore = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof toolkitStore.dispatch;

export const StoreContext = createContext(toolkitStore);
