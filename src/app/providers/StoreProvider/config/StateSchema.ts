import { AddTaskItemSchema } from "@/features/addTaskItem";
import { TaskListWallSchema } from "@/widgets/TaskWall";
export interface StateSchema {
 addTaskItem: AddTaskItemSchema;
 taskWall: TaskListWallSchema;
}
