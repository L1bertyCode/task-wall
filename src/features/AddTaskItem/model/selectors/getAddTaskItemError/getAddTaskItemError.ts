import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getAddTaskItemError = (state: StateSchema) =>
 state.addTaskItem.error;
