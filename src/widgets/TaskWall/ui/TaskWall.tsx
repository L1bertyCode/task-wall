import { memo, useState } from "react";

import { v1 } from "uuid";
import s from "./TaskWall.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

import { TaskWallSchema } from "../model/types/taskWall";
import { TaskList } from "@/widgets/TaskList";
import {
 FilterType,
 TaskItemSchema,
} from "@/widgets/TaskList/model/taskList";

interface TaskWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskWallProps) => {
 const { className } = props;
 const id1 = v1();
 const id2 = v1();
 const [taskWall, setTaskWall] = useState<TaskWallSchema[]>(
  [
   {
    id: id1,
    title: "Want to learn",
    filter: "all",
   },
   {
    id: id2,
    title: "Want to read",
    filter: "all",
   },
  ]
 );
 const [taskListData, setTaskListData] = useState({
  [id1]: [
   { id: v1(), title: "HTML&CSS", isDone: false },
   { id: v1(), title: "JS", isDone: false },
   { id: v1(), title: "ReactJS", isDone: false },
  ],
  [id2]: [
   { id: v1(), title: "HTML&CSS", isDone: false },
   { id: v1(), title: "JS", isDone: false },
   { id: v1(), title: "ReactJS", isDone: false },
  ],
 });
 const addTask = (title: string, taskListId: string) => {
  if (title.trim() !== "") {
   const newTask: TaskItemSchema = {
    id: v1(),
    isDone: false,
    title: title,
   };
   taskListData[id1].push(newTask);
   setTaskListData({ ...taskListData });
  }
 };
 const changeTaskListFilter = (
  filter: FilterType,
  taskListId: string
 ) => {
  setTaskWall([...taskWall]);
 };

 const changeTaskStatus = (
  taskListId: string,
  taskItemId: string,
  isDone: boolean
 ) => {
  taskListData[taskListId].map((taskListDataItem) => {
   if (taskListDataItem.id === taskItemId) {
    taskListDataItem.isDone === isDone;
   }
   taskListDataItem.isDone = taskListDataItem.isDone;
  });
  setTaskListData({ ...taskListData });
 };
 return (
  <div className={classNames(s.taskWall, {}, [className])}>
   {taskWall.map((taskWallItem) => (
    <TaskList
     key={taskWallItem.id}
     taskListId={taskWallItem.id}
     title={taskWallItem.title}
     filter={taskWallItem.filter}
     taskList={taskListData[taskWallItem.id]}
     addTask={addTask}
     changeTaskListFilter={changeTaskListFilter}
     changeTaskStatus={changeTaskStatus}
    />
   ))}
  </div>
 );
});
