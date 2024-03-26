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
 changeTaskListFilter: (
  filter: FilterType,
  taskListId: string
 ) => void;
 changeTaskStatus: (
  taskListId: string,
  taskItemId: string,
  isDone: boolean
 ) => void;
}
export const TaskList = ({
 taskList,
 title,
 taskListId,
 filter,
 changeTaskListFilter,
 changeTaskStatus,
}: TaskListProps) => {
 const [value, setValue] = useState("");
 const [error, setError] = useState<string | boolean>(
  false
 );

 const dispatch = useAppDispatch();

 let taskForTodoList = taskList;
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
    <Button onClick={() => {}}>x</Button>
   </div>
   <div className={s.inputWrapper}>
    <Input
     error={error}
     value={value}
     setValue={setValue}
     setErrorFalse={() => setError(false)}
     onChange={(value: string) => setValue(value)}
     onKeyDown={() => {
      // addTask?.(value);
      setValue("");
     }}
    />
    <Button
     onClick={() => {
      if (value.trim() === "") {
       setError(true);
      }
      {
       //  addTask?.(value);
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
     {taskList.map((taskItem, i) => {
      return (
       <TaskItem
        //  removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        taskListId={taskListId}
        key={taskItem.id + taskItem.title}
        taskItem={taskItem}
       />
      );
     })}
    </ul>
   )}
   <div className={s.btns}>
    <Button
     active={filter === "all"}
     onClick={() => changeTaskListFilter("all", taskListId)}
    >
     All
    </Button>
    <Button
     active={filter === "active"}
     onClick={() =>
      changeTaskListFilter("active", taskListId)
     }
    >
     Active
    </Button>
    <Button
     active={filter === "completed"}
     onClick={() =>
      changeTaskListFilter("completed", taskListId)
     }
    >
     Completed
    </Button>
   </div>
  </Card>
 );
};
