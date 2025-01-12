import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";




export const store = configureStore({
  reducer: {

  },
});

export type TRootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
