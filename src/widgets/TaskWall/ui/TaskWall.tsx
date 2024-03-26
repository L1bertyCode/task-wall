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
   { id: v1(), title: "HTML&CSS", isDone: true },
   { id: v1(), title: "JS", isDone: false },
   { id: v1(), title: "ReactJS", isDone: false },
  ],
  [id2]: [
   { id: v1(), title: "1917", isDone: false },
   { id: v1(), title: "Blood", isDone: false },
   { id: v1(), title: "Moon", isDone: false },
  ],
 });
 const addTask = (taskListId: string, title: string) => {
  if (title.trim() !== "") {
   const newTask: TaskItemSchema = {
    id: v1(),
    isDone: false,
    title: title,
   };
   taskListData[taskListId].push(newTask);
   setTaskListData({ ...taskListData });
  }
 };
 const removeTask = (
  taskListId: string,
  taskId: string
 ) => {
  taskListData[taskListId] = taskListData[
   taskListId
  ].filter((task) => task.id !== taskId);
  setTaskListData({ ...taskListData });
 };

 const changeTaskStatus = (
  taskListId: string,
  taskItemId: string,
  isDone: boolean
 ) => {
  taskListData[taskListId].map((taskItem) =>
   taskItem.id === taskItemId
    ? (taskItem.isDone = isDone)
    : taskItem.isDone
  );
  console.log(taskListData[taskListId]);

  setTaskListData({ ...taskListData });
 };
 const changeTaskListFilter = (
  taskListId: string,
  filter: FilterType
 ) => {
  taskWall.map((taskList) =>
   taskList.id === taskListId
    ? (taskList.filter = filter)
    : taskList
  );
  setTaskWall([...taskWall]);
 };
 const removeTaskList = (taskListId: string) => {
  if (taskListId) {
   delete taskListData[taskListId];
   const newTaskWall = taskWall.filter(
    (taskList) => taskList.id !== taskListId
   );
   setTaskWall([...newTaskWall]);
  }
 };
 return (
  <div className={classNames(s.taskWall, {}, [className])}>
   {taskWall.length ? (
    taskWall.map((taskWallItem) => (
     <TaskList
      key={taskWallItem.id}
      taskListId={taskWallItem.id}
      title={taskWallItem.title}
      filter={taskWallItem.filter}
      taskList={taskListData[taskWallItem.id]}
      addTask={addTask}
      removeTask={removeTask}
      changeTaskListFilter={changeTaskListFilter}
      changeTaskStatus={changeTaskStatus}
      removeTaskList={removeTaskList}
     />
    ))
   ) : (
    <div>Add new task list</div>
   )}
  </div>
 );
});
