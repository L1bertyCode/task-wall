import { memo } from "react";

import {
 TaskList,
 TaskListSchema,
} from "@/widgets/TaskList";
import { useSelector } from "react-redux";
import { getyTaskWall } from "../model/selectors/getTaskWall";

import s from "./TaskWall.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface TaskWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskWallProps) => {
 const { className } = props;
 const taksWall = useSelector(getyTaskWall);
 return (
  <div className={classNames(s.taskWall, {}, [className])}>
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
