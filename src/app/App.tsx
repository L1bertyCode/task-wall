import cn from "classnames";
import "./styles/index.scss";
import { TaskList } from "@/widgets/TaskList";
import { useState } from "react";

import { v1 } from "uuid";

export type FilterValuesType =
  | "all"
  | "active"
  | "complited";
interface TaskListArrayType {
  id: string;
  title: string;
  filter: FilterValuesType;
}
export const App = () => {
  let taskListId1 = v1();
  let taskListId2 = v1();
  const [
    objetcWithSomeTaskList,
    setObjetcWithSomeTaskList,
  ] = useState({
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

  function removeItem(id: string, taskListId: string) {
    let tasks = objetcWithSomeTaskList[taskListId];
    let filtredTasks = tasks.filter(
      (taskItem) => taskItem.id !== id
    );
    objetcWithSomeTaskList[taskListId] = filtredTasks;
    setObjetcWithSomeTaskList({
      ...objetcWithSomeTaskList,
    });
  }
  function addTaskHandler(
    title: string,
    taskListId: string
  ) {
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
  }
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
  return (
    <div className={cn("app", "app_blue_theme")}>
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
  );
};
