import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./TaskItem.module.scss";
import { TaskItemSchema } from "../../model/taskList";
import { Button } from "@/shared/ui/Button/Button";

interface TaskItemProps {
 className?: string;
 taskItem: TaskItemSchema;
}

export const TaskItem = memo((props: TaskItemProps) => {
 const { className, taskItem } = props;
 const { title, isDone, id } = taskItem;
 return (
  <li>
   <input type="checkbox" checked={taskItem.isDone} />
   <span>{taskItem.title}</span>
   <Button onClick={() => alert(id)}>x</Button>
  </li>
 );
});
