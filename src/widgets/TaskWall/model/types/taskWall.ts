import { FilterType } from "@/widgets/TaskList/model/taskList";

export interface TaskWallSchema {
 id: string;
 title: string;
 filter: FilterType;
}
