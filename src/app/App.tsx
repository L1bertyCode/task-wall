import cn from "classnames";
import "./styles/index.scss";
import { TodoList } from "@/widgets/TodoList";
import { useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
export type FilterValuesType =
  | "all"
  | "active"
  | "complited";
export const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "HTML", isDone: true },
    { id: 4, title: "Redux", isDone: false },
  ]);
  const [filter, setFilter] =
    useState<FilterValuesType>("all");

  const removeItem = (id: number) => {
    console.log("id", id);
    setTasks(
      tasks?.filter((taskItem) => taskItem.id !== id)
    );
    console.log(tasks);
  };
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
  const chancgeFilter = (filter: FilterValuesType) => {
    setFilter(filter);
  };
  return (
    <div className={cn("app", "app_blue_theme")}>
      <TodoList
        title="Langauge"
        tasksList={filtredTasks}
        removeItem={removeItem}
        chancgeFilter={chancgeFilter}
      />
    </div>
  );
};
