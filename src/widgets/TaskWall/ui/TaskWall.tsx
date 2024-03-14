import { memo } from "react";

import { TaskList } from "@/widgets/TaskList";
import { useSelector } from "react-redux";
import { getyTaskWall } from "../model/selectors/getTaskWall";

// import cn from "classnames";
import s from "./TaskWall.module.scss";

interface TaskWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskWallProps) => {
 const { className } = props;
 const taksWall = useSelector(getyTaskWall);
 return (
  <div className={`${s.taskWall} ${className}`}>
   {taksWall.map((taskList) => {
    return (
     <TaskList
      date={taskList.date}
      id={taskList.id}
      title={taskList.title}
      key={taskList.id}
      taskItemsList={taskList.taskItemsList}
     />
    );
   })}
  </div>
 );
});
