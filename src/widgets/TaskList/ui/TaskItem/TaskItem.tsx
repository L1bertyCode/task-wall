import { ReactNode, memo, useState } from "react";
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
}

export const TaskItem = memo((props: TaskItemProps) => {
 const { className, taskItem, taskList } = props;
 const { title, isDone, id } = taskItem;
 const dispatch = useAppDispatch();

 return (
  <li>
   <input type="checkbox" checked={taskItem.isDone} />
   <span>{taskItem.title}</span>
   <Button
    onClick={
     () => {}
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
