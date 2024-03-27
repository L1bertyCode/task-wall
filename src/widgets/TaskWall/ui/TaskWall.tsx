import { memo, useState } from "react";

import { v1 } from "uuid";
import s from "./taskWall.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

import {
 TaskListDataSchema,
 TaskListWallSchema,
} from "../model/types/taskWall";
import { TaskList } from "@/widgets/TaskList";
import {
 FilterType,
 TaskItemSchema,
} from "@/widgets/TaskList/model/taskList";

interface TaskListWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskListWallProps) => {
 const { className } = props;
 const id1 = v1();
 const id2 = v1();
 const [taskListWall, setTaskListWall] = useState<
  TaskListWallSchema[]
 >([
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
 ]);
 const [taskListData, setTaskListData] = useState<
  Record<string, TaskListDataSchema[]>
 >({
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
  const newTaskListData = taskListData[taskListId].filter(
   (t) => t.id !== taskId
  );
  taskListData[taskListId] = newTaskListData;
  setTaskListData({ ...taskListData, newTaskListData });
 };

 const changeTaskStatus = (
  taskListId: string,
  taskItemId: string,
  newStatus: boolean
 ) => {
  const newTaskListData = taskListData[taskListId].map(
   (taskItem) =>
    taskItem.id === taskItemId
     ? { ...taskItem, isDone: newStatus }
     : taskItem
  );
  taskListData[taskListId] = newTaskListData;
  setTaskListData({ ...taskListData });
 };
 const changeTaskListFilter = (
  taskListId: string,
  filter: FilterType
 ) => {
  taskListWall.map((taskList) =>
   taskList.id === taskListId
    ? (taskList.filter = filter)
    : taskList
  );
  setTaskListWall([...taskListWall]);
 };
 const removeTaskList = (taskListId: string) => {
  if (taskListId) {
   delete taskListData[taskListId];
   const newTaskListWall = taskListWall.filter(
    (taskList) => taskList.id !== taskListId
   );
   setTaskListWall([...newTaskListWall]);
  }
 };
 return (
  <div className={classNames(s.taskWall, {}, [className])}>
   {taskListWall.length ? (
    taskListWall.map((taskListWallItem) => (
     <TaskList
      key={taskListWallItem.id}
      taskListId={taskListWallItem.id}
      title={taskListWallItem.title}
      filter={taskListWallItem.filter}
      taskList={taskListData[taskListWallItem.id]}
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
