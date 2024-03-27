import { FilterType } from "@/widgets/TaskList/model/taskList";

export interface TaskListWallSchema {
 id: string;
 title: string;
 filter: FilterType;
}
export interface TaskListDataSchema {
 id: string;
 title: string;
 isDone: boolean;
}
