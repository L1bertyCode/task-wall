import { Card } from "@/shared/ui/Card/Card";
import { TaskListSchema } from "../../model/taskList";
import s from "./TaskList.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { TaskItem } from "../TaskItem/TaskItem";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { taskWallActions } from "@/widgets/TaskWall";
import { useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
interface TaskListProps {
 taskList: TaskListSchema;
 addTask?: (title: string) => void;
 changeTaskStatus?: (
  taskId: string,
  taskStatus: boolean
 ) => void;
 removeTask?: (taskId: string) => void;
}
export const TaskList = ({
 taskList,
 addTask,
 changeTaskStatus,
 removeTask,
}: TaskListProps) => {
 const [filter, setFilter] = useState<
  "all" | "active" | "completed"
 >("all");
 const [value, setValue] = useState("");
 const [error, setError] = useState<string | boolean>(
  false
 );
 const { title, taskItemsList, date, id } = taskList;
 const dispatch = useAppDispatch();

 let taskForTodoList = taskItemsList;
 switch (filter) {
  case "active":
   taskForTodoList = taskItemsList.filter(
    (task) => task.isDone === false
   );
   break;
  case "completed":
   taskForTodoList = taskItemsList.filter(
    (task) => task.isDone === true
   );
   break;
  default:
   taskForTodoList = taskItemsList;
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
      addTask?.(value);
      setValue("");
     }}
    />
    <Button
     onClick={() => {
      if (value.trim() === "") {
       setError(true);
      }
      {
       addTask?.(value);
       setValue("");
      }
     }}
    >
     +
    </Button>
   </div>
   {taskItemsList.length === 0 ? (
    <p>Tasks not assigned</p>
   ) : (
    <ul className={s.taskItemsList}>
     {taskForTodoList.map((taskItem, i) => {
      return (
       <TaskItem
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        taskList={taskList}
        key={taskItem.id + taskItem.title}
        taskItem={taskItem}
       />
      );
     })}
    </ul>
   )}
   <div>
    <Button
     active={filter === "all"}
     onClick={() => setFilter("all")}
    >
     All
    </Button>
    <Button
     active={filter === "active"}
     onClick={() => setFilter("active")}
    >
     Active
    </Button>
    <Button
     active={filter === "completed"}
     onClick={() => setFilter("completed")}
    >
     Completed
    </Button>
   </div>
   <span>{date}</span>
  </Card>
 );
};
