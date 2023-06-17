import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";
// коментарии
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
});