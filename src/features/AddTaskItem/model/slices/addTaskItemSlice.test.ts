import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { AddTaskItemSchema } from "../types/addTaskItem";
import {
 addTaskItemActions,
 addTaskItemReducer,
} from "./addTaskItemSlice";
import { error } from "console";

describe("addTaskItemSlice.test", () => {
 test("setText", () => {
  const state: DeepPartial<AddTaskItemSchema> = {
   text: "text",
  };
  expect(
   addTaskItemReducer(
    state,
    addTaskItemActions.setText("new text")
   )
  ).toEqual({
   text: "new text",
  });
 });

 test("setError", () => {
  const state: DeepPartial<AddTaskItemSchema> = {
   error: "error",
  };

  expect(
   addTaskItemReducer(
    state,
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
