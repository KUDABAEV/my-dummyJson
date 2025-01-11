import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todosSlice } from "../pages/todos-slice";

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
