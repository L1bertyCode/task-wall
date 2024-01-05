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
  console.log("tasks tasks tasks", tasks);

  const [filter, setFilter] =
    useState<FilterValuesType>("all");

  function removeItem(id: string) {
    console.log("id", id);
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
  return (
    <div className={cn("app", "app_blue_theme")}>
      <TodoList
        title="Langauge"
        tasksList={filtredTasks}
        removeItem={removeItem}
        addTaskHandler={addTaskHandler}
        changeFilter={changeFilter}
      />
    </div>
  );
};
