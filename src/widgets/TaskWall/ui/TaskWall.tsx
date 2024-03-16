import { memo } from "react";

import {
 TaskList,
 TaskListSchema,
} from "@/widgets/TaskList";
import { useSelector } from "react-redux";
import { getyTaskWall } from "../model/selectors/getTaskWall";

import cn from "classnames";
import s from "./TaskWall.module.scss";

interface TaskWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskWallProps) => {
 const { className } = props;
 const taksWall = useSelector(getyTaskWall);
 return (
  <div className={cn(s.taskWall, className)}>
   {taksWall.map((taskList: TaskListSchema, i) => {
    return (
     <TaskList
      taskList={taskList}
      key={taskList.id + taskList.title}
     />
    );
   })}
  </div>
 );
});
