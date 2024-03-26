import { addTaskItemReducer } from "@/features/addTaskItem";
// import { taskWallReducer } from "@/widgets/TaskWall";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
 reducer: {
  addTaskItem: addTaskItemReducer,
  // taskWall: taskWallReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
