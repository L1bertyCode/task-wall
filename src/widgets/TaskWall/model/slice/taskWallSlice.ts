import { createSlice } from "@reduxjs/toolkit";
import { TaskWallSchema } from "../types/taskWall";
const initialState: TaskWallSchema = {
 taskWall: [
  {
   date: "01.01.2024",
   id: 1,
   title: "What to learn",
   taskItemsList: [
    { id: 1, title: "HTML&CSS", isDone: false },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "ReactJS", isDone: false },
   ],
  },
  {
   id: 2,
   title: "Songs",
   taskItemsList: [
    { id: 1, title: "Feature", isDone: false },
    { id: 2, title: "Sun", isDone: false },
    { id: 3, title: "Never", isDone: false },
   ],
  },
  {
   id: 3,
   title: "Books",
   taskItemsList: [
    { id: 1, title: "Ice", isDone: false },
    { id: 2, title: "Rain", isDone: false },
    { id: 3, title: "Dark", isDone: false },
   ],
  },
 ],
};
export const taskWallSlice = createSlice({
 name: "taskWall",
 initialState,
 reducers: {
  removerTaskList(state, action) {
   state.taskWall = state.taskWall.filter(
    (taskList) => action.payload !== taskList.id
   );
  },
 },
});
export const {
 actions: taskWallActions,
 reducer: taskWallReducer,
} = taskWallSlice;
