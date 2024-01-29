import { addTaskItemReducer } from "@/features/addTaskItem";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
 reducer: {
  addTaskItem: addTaskItemReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
