import { AddTaskItemSchema } from "@/features/addTaskItem";
import { TaskWallSchema } from "@/widgets/TaskWall";
export interface StateSchema {
 addTaskItem: AddTaskItemSchema;
 taskWall: TaskWallSchema;
}
