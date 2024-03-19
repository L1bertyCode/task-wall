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
import { classNames } from "@/shared/lib/classNames/classNames";

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
  <li
   className={classNames(
    s.taskItem,
    { [s.isDone]: isDone },
    [className]
   )}
  >
   <span>
    <input
     className={s.checkbox}
     type="checkbox"
     checked={taskItem.isDone}
     onChange={changeTaskStatushandler}
    />
    <span>{taskItem.title}</span>
   </span>
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
