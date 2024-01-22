import { useState } from "react";
import { v1 } from "uuid";

import { Header } from "@/widgets/Header";
import { TaskList } from "@/widgets/TaskList";
import { TaskItem } from "@/widgets/TaskList/ui/TaskList/TaskList";
import { FormAddItem } from "@/features/AddTaskItem";

import cn from "classnames";
import "./styles/index.scss";
import { Button } from "@/shared/ui/Button/Button";
export type TaskObjectType = {
 [key: string]: TaskItem[];
};
export type FilterValuesType =
 | "all"
 | "active"
 | "complited";
interface TaskListArrayType {
 id: string;
 title: string;
 filter: FilterValuesType;
}
export enum Theme {
 LIGHT = "app_light_theme",
 BLUE = "app_blue_theme",
}
export const App = () => {
 const [theme, setTheme] = useState<Theme>(Theme.BLUE);
 let taskListId1 = v1();
 let taskListId2 = v1();
 const [objetcWithSomeTaskList, setObjetcWithSomeTaskList] =
  useState<TaskObjectType>({
   [taskListId1]: [
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "HTML", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
   ],
   [taskListId2]: [
    { id: v1(), title: "Bread", isDone: true },
    { id: v1(), title: "milk", isDone: false },
   ],
  });
 const [taskListArray, setTaskListArray] = useState<
  TaskListArrayType[]
 >([
  { id: taskListId1, title: "Active", filter: "active" },
  {
   id: taskListId2,
   title: "Complited",
   filter: "complited",
  },
 ]);
 const onChangeTitleTaskList = (
  title: string,
  taskListId: string
 ) => {
  const newTaskListArray = taskListArray.map(
   (taskListArrayItem: TaskListArrayType) => {
    if (taskListArrayItem.id === taskListId) {
     taskListArrayItem.title = title;
     return taskListArrayItem;
    }
    return taskListArrayItem;
   }
  );
  setTaskListArray([...newTaskListArray]);
 };
 const onChangeTitleTaskItem = (
  taskListId: string,
  taskId: string,
  newTitle: string
 ) => {
  console.log("taskListId", taskListId);
  console.log(
   "objetcWithSomeTaskList",
   objetcWithSomeTaskList
  );
  console.log(
   " objetcWithSomeTaskList[taskListId]",
   objetcWithSomeTaskList[taskListId]
  );
  const newTaskListArray =
   objetcWithSomeTaskList[taskListId];
  console.log("newTaskListArray", newTaskListArray);

  if (newTaskListArray) {
   newTaskListArray.map((newTaskListArrayItem) => {
    if (newTaskListArrayItem.id === taskId) {
     newTaskListArrayItem.title = newTitle;
     return newTaskListArrayItem;
    }
    return newTaskListArrayItem;
   });
   objetcWithSomeTaskList[taskListId] = newTaskListArray;
   setObjetcWithSomeTaskList({
    ...objetcWithSomeTaskList,
   });
  }
 };
 const removeItem = (id: string, taskListId: string) => {
  let tasks = objetcWithSomeTaskList[taskListId];
  let filtredTasks = tasks.filter(
   (taskItem) => taskItem.id !== id
  );
  objetcWithSomeTaskList[taskListId] = filtredTasks;
  setObjetcWithSomeTaskList({
   ...objetcWithSomeTaskList,
  });
 };
 const addTaskHandler = (
  title: string,
  taskListId: string
 ) => {
  let tasks = objetcWithSomeTaskList[taskListId];
  let newTask = {
   id: v1(),
   title: title,
   isDone: false,
  };
  const newTasks = [...tasks, newTask];
  objetcWithSomeTaskList[taskListId] = [...newTasks];
  setObjetcWithSomeTaskList({
   ...objetcWithSomeTaskList,
  });
 };
 const changeFilter = (
  filter: FilterValuesType,
  taskListId: string
 ) => {
  let newTaskListArray = taskListArray.map(
   (taskListArrayItem) => {
    if (taskListArrayItem.id === taskListId) {
     taskListArrayItem.filter = filter;
     return taskListArrayItem;
    }
    return taskListArrayItem;
   }
  );
  setTaskListArray(newTaskListArray);
 };
 const changeStatus = (
  id: string,
  isDone: boolean,
  taskListId: string
 ) => {
  const tasks = objetcWithSomeTaskList[taskListId];
  const newTaksList = tasks.map((taskItem) => {
   if (taskItem.id === id) {
    taskItem.isDone = isDone;
   }
   return taskItem;
  });
  objetcWithSomeTaskList[taskListId] = [...newTaksList];
  setObjetcWithSomeTaskList({
   ...objetcWithSomeTaskList,
  });
 };
 const removeTaskList = (taskListId: string) => {
  const filtredTaslList = taskListArray.filter(
   (taskListArrayItem) =>
    taskListArrayItem.id !== taskListId
  );

  setTaskListArray([...filtredTaslList]);
  delete objetcWithSomeTaskList[taskListId];
 };
 const addTaskList = (title: string) => {
  const newTaskList: TaskListArrayType = {
   id: v1(),
   filter: "all",
   title: title,
  };
  setTaskListArray([...taskListArray, newTaskList]);
  setObjetcWithSomeTaskList({
   ...objetcWithSomeTaskList,
   [newTaskList.id]: [
    { id: v1(), title: "Bread", isDone: true },
    { id: v1(), title: "milk", isDone: false },
   ],
  });
 };
 return (
  <div className={cn("app", theme)}>
   <Header />
   <Button
    onClick={() => {
     theme === Theme.LIGHT
      ? setTheme(Theme.BLUE)
      : setTheme(Theme.LIGHT);
    }}
   >
    change theme
   </Button>
   <div className={"container"}>
    <FormAddItem addItem={addTaskList} />
    <div className={"taskListArray"}>
     {taskListArray.map((taskListArrayItem) => {
      let filtredTasks =
       objetcWithSomeTaskList[taskListArrayItem.id];
      if (taskListArrayItem.filter === "complited") {
       filtredTasks = objetcWithSomeTaskList[
        taskListArrayItem.id
       ].filter((taskItem) => taskItem.isDone === true);
      } else if (taskListArrayItem.filter === "active") {
       filtredTasks = objetcWithSomeTaskList[
        taskListArrayItem.id
       ].filter((taskItem) => taskItem.isDone === false);
      }
      return (
       <TaskList
        className={"taskListItem"}
        onChangeTitleTaskList={onChangeTitleTaskList}
        onChangeTitleTaskItem={onChangeTitleTaskItem}
        taskListId={taskListArrayItem.id}
        key={taskListArrayItem.id}
        filter={taskListArrayItem.filter}
        title={taskListArrayItem.title}
        tasksList={filtredTasks}
        removeItem={removeItem}
        addTaskHandler={addTaskHandler}
        changeFilter={changeFilter}
        changeStatus={changeStatus}
        removeTaskList={removeTaskList}
       />
      );
     })}
    </div>
   </div>
  </div>
 );
};
