import { memo } from "react";
import cn from "classnames";

import s from "./TodoList.module.scss";
import { TodoItem } from "../TodoItem/TodoItem";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { FilterValuesType } from "@/app/App";
interface TaskItemProps {
  id: number;
  title: string;
  isDone: boolean;
}
interface TodoListProps {
  className?: string;
  title?: string;
  tasksList?: TaskItemProps[];
  removeItem: (id: number) => void;
  chancgeFilter: (filter: FilterValuesType) => void;
}

export const TodoList = memo((props: TodoListProps) => {
  const {
    className,
    title,
    tasksList,
    removeItem,
    chancgeFilter,
  } = props;

  return (
    <>
      <ul className={cn(s.list, className)}>
        {title && <h3>{title}</h3>}
        <Input />
        {tasksList &&
          tasksList?.map((taskItem) => (
            <li key={taskItem.id}>
              <input
                type="checkbox"
                checked={taskItem.isDone}
              />
              <span>{taskItem.title}</span>
              <Button
                onClick={() => removeItem(taskItem.id)}
              >
                x
              </Button>
            </li>
          ))}
      </ul>
      <div className={"btns"}>
        <Button onClick={() => chancgeFilter("all")}>
          All
        </Button>{" "}
        <Button onClick={() => chancgeFilter("active")}>
          Active
        </Button>{" "}
        <Button onClick={() => chancgeFilter("complited")}>
          Complited
        </Button>
      </div>
    </>
  );
});
