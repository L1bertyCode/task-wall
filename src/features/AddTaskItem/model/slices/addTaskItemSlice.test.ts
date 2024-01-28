import { AddTaskItemSchema } from "../types/addTaskItem";
import {
 addTaskItemActions,
 addTaskItemReducer,
} from "./addTaskItemSlice";
import { error } from "console";

describe("addTaskItemSlice.test", () => {
 test("setText", () => {
  const state: DeepPartial<AddTaskItemSchema> = {
   taskList: ["text1", "text2"],
  };
  expect(
   addTaskItemReducer(
    state as AddTaskItemSchema,
    addTaskItemActions.setText("new text")
   )
  ).toEqual({
   taskList: ["text1", "text2", "new text"],
  });
 });

 test("setError", () => {
  const state: DeepPartial<AddTaskItemSchema> = {
   error: "error",
  };

  expect(
   addTaskItemReducer(
    state as AddTaskItemSchema,
    addTaskItemActions.setError("")
   )
  ).toEqual({
   error: "",
  });
 });

 test("should work with empty state", () => {
  const state = {};

  expect(state).toEqual({
   text: undefined,
   error: undefined,
  });
 });
});
