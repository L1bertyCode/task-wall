export interface TaskItemSchema {
 id: number;
 title: string;
 isDone: boolean;
}
export interface TaskListSchema {
 id: number;
 title: string;
 taskItemsList: TaskItemSchema[];
 date?: string;
}
