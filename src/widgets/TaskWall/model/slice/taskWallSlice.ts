import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 taskWall: [
  { id: 1, title: "What to learn" },
  { id: 2, title: "Songs" },
  { id: 3, title: "Books" },
 ],
};
export const taskWallSlice = createSlice({
 name: "taskWall",
 initialState,
 reducers: {},
});
export const {
 actions: taskWallActions,
 reducer: taskWallReducer,
} = taskWallSlice;
