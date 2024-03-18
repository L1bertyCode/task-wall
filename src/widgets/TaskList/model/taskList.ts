export interface TaskItemSchema {
 id: string;
 title: string;
 isDone: boolean;
}
export interface TaskListSchema {
 id: string;
 title: string;
 taskItemsList: TaskItemSchema[];
 date?: string;
}
