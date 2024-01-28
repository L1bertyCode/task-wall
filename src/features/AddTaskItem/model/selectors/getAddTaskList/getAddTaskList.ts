import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getAddTaskList = (state: StateSchema) =>
 state.addTaskItem.taskList;
