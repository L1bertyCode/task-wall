import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getAddTaskItemText = (state: StateSchema) =>
 state.addTaskItem.text;
