import {
 ChangeEvent,
 ReactNode,
 memo,
 useState,
} from "react";
import cn from "classnames";
import s from "./TaskItem.module.scss";
import {
 TaskItemSchema,
 TaskListSchema,
} from "../../model/taskList";
import { Button } from "@/shared/ui/Button/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { taskWallActions } from "@/widgets/TaskWall";

interface TaskItemProps {
 className?: string;
 taskItem: TaskItemSchema;
 taskList: TaskListSchema;
 changeTaskStatus?: (
  taskId: string,
  taskStatus: boolean
 ) => void;
 removeTask?: (taskId: string) => void;
}

export const TaskItem = memo((props: TaskItemProps) => {
 const {
  className,
  taskItem,
  taskList,
  changeTaskStatus,
  removeTask,
 } = props;
 const { title, isDone, id } = taskItem;
 const dispatch = useAppDispatch();
 const changeTaskStatushandler = (
  e: ChangeEvent<HTMLInputElement>
 ) => {
  const newStatusValue = e.currentTarget.checked;
  changeTaskStatus?.(id, newStatusValue);
 };
 return (
  <li>
   <input
    type="checkbox"
    checked={taskItem.isDone}
    onChange={changeTaskStatushandler}
   />
   <span>{taskItem.title}</span>
   <Button
    onClick={
     () => removeTask?.(id)
     //  dispatch(
     //   taskWallActions.removeTask({
     //    numberList: taskList.id,
     //    numberTask: id,
     //   })
     //  )Z
    }
   >
    x
   </Button>
  </li>
 );
});
