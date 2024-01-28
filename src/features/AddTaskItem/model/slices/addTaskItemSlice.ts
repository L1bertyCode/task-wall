import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { AddTaskItemSchema } from "../types/addTaskItem";
const initialState: AddTaskItemSchema = {
 taskList: [],
 error: undefined,
};
export const addTaskItemSlice = createSlice({
 name: "addTaskItemSlice",
 initialState,
 reducers: {
  setText: (state, action: PayloadAction<string>) => {
   state.taskList?.push(action.payload);
  },
  setError: (state, action: PayloadAction<string>) => {
   state.error = action.payload;
  },
 },
});
export const { reducer: addTaskItemReducer } =
 addTaskItemSlice;
export const { actions: addTaskItemActions } =
 addTaskItemSlice;
