import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//  created a store using redux-toolkit configureStore function and passed the todoReducer to it.

export const store = configureStore({
    reducer: todoReducer
})