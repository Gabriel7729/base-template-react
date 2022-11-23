import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../../features/counter/countesSlice";

export const Store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
