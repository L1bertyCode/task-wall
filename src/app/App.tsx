import cn from "classnames";
import "./styles/index.scss";
import { TodoList } from "@/widgets/TodoList";
import { useState } from "react";

import { v1 } from "uuid";
export type FilterValuesType =
  | "all"
  | "active"
  | "complited";
export const App = () => {
  const [tasks, setTasks] = useState([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "HTML", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  const [filter, setFilter] =
    useState<FilterValuesType>("all");

  function removeItem(id: string) {
    setTasks(
      tasks?.filter((taskItem) => taskItem.id !== id)
    );
    console.log(tasks);
  }
  function addTaskHandler(title: string) {
    let newTask = {
      id: v1(),
      title: title,
      isDone: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }
  let filtredTasks = tasks;
  if (filter === "complited") {
    filtredTasks = tasks.filter(
      (taskItem) => taskItem.isDone === true
    );
  } else if (filter === "active") {
    filtredTasks = tasks.filter(
      (taskItem) => taskItem.isDone === false
    );
  }
  const changeFilter = (filter: FilterValuesType) => {
    setFilter(filter);
  };
  const changeStatus = (id: string, isDone: boolean) => {
    const newTaksList = tasks.map((taskItem) => {
      if (taskItem.id === id) {
        taskItem.isDone = isDone;
      }
      return taskItem;
    });
    setTasks([...newTaksList]);
  };
  return (
    <div className={cn("app", "app_blue_theme")}>
      <TodoList
        filter={filter}
        title="Langauge"
        tasksList={filtredTasks}
        removeItem={removeItem}
        addTaskHandler={addTaskHandler}
        changeFilter={changeFilter}
        changeStatus={changeStatus}
      />
    </div>
  );
};
