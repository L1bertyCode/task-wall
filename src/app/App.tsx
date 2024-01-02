import cn from "classnames";
import "./styles/index.scss";
import { TodoList } from "@/widgets/TodoList";

export const App = () => {
  const tasks = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "HTML", isDone: true },
  ];
  const tasks2 = [
    { id: 1, title: "T", isDone: true },
    { id: 2, title: "R", isDone: false },
    { id: 3, title: "O", isDone: true },
  ];
  return (
    <div className={cn("app", "app_blue_theme")}>
      <TodoList title="Langauge" tasksList={tasks} />
      <TodoList title="Movies" tasksList={tasks2} />
    </div>
  );
};
