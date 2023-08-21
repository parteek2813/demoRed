import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

// using the useDispatch , we can talk to the store using the reducer
