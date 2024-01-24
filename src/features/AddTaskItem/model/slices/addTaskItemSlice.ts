import {
 PayloadAction,
 createSlice,
} from "@reduxjs/toolkit";
import { AddTaskItemSchema } from "../types/addTaskItem";
const initialState: AddTaskItemSchema = {
 text: undefined,
};
export const addTaskItemSlice = createSlice({
 name: "addTaskItemSlice",
 initialState,
 reducers: {
  setText: (state, action: PayloadAction<string>) => {
   state.text = action.payload;
  },
 },
});
export const { reducer: addTaskItemReducer } =
 addTaskItemSlice;
export const { actions: addTaskItemActions } =
 addTaskItemSlice;
