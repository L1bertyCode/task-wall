export interface TaskItemSchema {
 id: string;
 title: string;
 isDone: boolean;
}
export type TaskListSchema = Record<string, TaskItemSchema>;

export type FilterType = "all" | "active" | "completed";
