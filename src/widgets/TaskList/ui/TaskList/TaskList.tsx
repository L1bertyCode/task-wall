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
  <Card>
   <div className={s.header}>
    <h3>{title}</h3>
    <Button onClick={() => {}}>x</Button>
   </div>
   <div>
    <Input
     value={value}
     setValue={setValue}
     onChange={(value: string) => setValue(value)}
     onKeyDown={() => {
      if (value) {
       addTask?.(value);
       setValue("");
      }
     }}
    />
    <Button
     onClick={() => {
      if (value) {
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
    <ul>
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
