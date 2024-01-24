import { addTaskItemReducer } from "@/features/AddTaskItem";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
 reducer: {
  addTaskItem: addTaskItemReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
