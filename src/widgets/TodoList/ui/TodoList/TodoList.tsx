import { memo, useState } from "react";
import cn from "classnames";

import s from "./TodoList.module.scss";
import { TodoItem } from "../TodoItem/TodoItem";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { FilterValuesType } from "@/app/App";
interface TaskItemProps {
  id: string;
  title: string;
  isDone: boolean;
}
interface TodoListProps {
  className?: string;
  title?: string;
  tasksList?: TaskItemProps[];
  removeItem: (id: string) => void;
  addTaskHandler: (title: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
}

export const TodoList = memo((props: TodoListProps) => {
  const {
    className,
    title,
    tasksList,
    removeItem,
    addTaskHandler,
    changeFilter,
  } = props;
  const [input, setInput] = useState("");
  const addTask = () => {
    addTaskHandler(input);
    setInput("");
  };
  const onAllClickHandler = () => changeFilter("all");
  const onActiveClickHandler = () =>
  changeFilter("active");
  const onComplitedClickHandler = () =>
  changeFilter("complited");

  return (
    <>
      <ul className={cn(s.list, className)}>
        {title && <h3>{title}</h3>}
        <Input
          value={input}
          setValue={setInput}
          onKeyDown={addTask}
        />
        <Button onClick={addTask}>add task</Button>
        {tasksList &&
          tasksList?.map((taskItem) => {
            const onRemoveItem = () =>
              removeItem(taskItem.id);
            return (
              <li key={taskItem.id}>
                <input
                  type="checkbox"
                  checked={taskItem.isDone}
                />

                <span>{taskItem.title}</span>
                <Button onClick={onRemoveItem}>x</Button>
              </li>
            );
          })}
      </ul>
      <div className={"btns"}>
        <Button onClick={onAllClickHandler}>All</Button>
        <Button onClick={onActiveClickHandler}>
          Active
        </Button>
        <Button onClick={onComplitedClickHandler}>
          Complited
        </Button>
      </div>
    </>
  );
});
