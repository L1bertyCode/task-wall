import { Card } from "@/shared/ui/Card/Card";
import {
 TaskItemSchema,
 FilterType,
} from "../../model/taskList";
import s from "./TaskList.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { TaskItem } from "../TaskItem/TaskItem";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
interface TaskListProps {
 taskList: TaskItemSchema[];
 title: string;
 filter: FilterType;
 taskListId: string;
 addTask: (title: string, taskListId: string) => void;
 removeTask: (taskListId: string, taskId: string) => void;
 changeTaskListFilter: (
  taskListId: string,
  filter: FilterType
 ) => void;
 changeTaskStatus: (
  taskListId: string,
  taskItemId: string,
  isDone: boolean
 ) => void;
 removeTaskList: (taskListId: string) => void;
}
export const TaskList = ({
 taskList,
 title,
 taskListId,
 filter,
 changeTaskListFilter,
 changeTaskStatus,
 addTask,
 removeTask,
 removeTaskList,
}: TaskListProps) => {
 const [value, setValue] = useState("");
 const [error, setError] = useState<string | boolean>(
  false
 );

 const dispatch = useAppDispatch();

 let taskForTodoList;
 switch (filter) {
  case "active":
   taskForTodoList = taskList.filter(
    (task) => task.isDone === false
   );
   break;
  case "completed":
   taskForTodoList = taskList.filter(
    (task) => task.isDone === true
   );
   break;
  default:
   taskForTodoList = taskList;
   break;
 }
 return (
  <Card className={s.taskList}>
   <div className={s.header}>
    <h3>{title}</h3>
    <Button
     onClick={() => {
      removeTaskList(taskListId);
     }}
    >
     x
    </Button>
   </div>
   <div className={s.inputWrapper}>
    <Input
     error={error}
     value={value}
     setValue={setValue}
     setErrorFalse={() => setError(false)}
     onChange={(value: string) => setValue(value)}
     onKeyDown={() => {
      addTask?.(taskListId, value);
      setValue("");
     }}
    />
    <Button
     onClick={() => {
      if (value.trim() === "") {
       setError(true);
      }
      {
       addTask?.(taskListId, value);
       setValue("");
      }
     }}
    >
     +
    </Button>
   </div>
   {taskForTodoList?.length === 0 ? (
    <p>Tasks not assigned</p>
   ) : (
    <ul className={s.taskItemsList}>
     {taskForTodoList.map((taskItem, i) => {
      return (
       <TaskItem
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        taskListId={taskListId}
        key={taskItem.id}
        taskItem={taskItem}
       />
      );
     })}
    </ul>
   )}
   <div className={s.btns}>
    <Button
     active={filter === "all"}
     onClick={() => changeTaskListFilter(taskListId, "all")}
    >
     All
    </Button>
    <Button
     active={filter === "active"}
     onClick={() =>
      changeTaskListFilter(taskListId, "active")
     }
    >
     Active
    </Button>
    <Button
     active={filter === "completed"}
     onClick={() =>
      changeTaskListFilter(taskListId, "completed")
     }
    >
     Completed
    </Button>
   </div>
  </Card>
 );
};
