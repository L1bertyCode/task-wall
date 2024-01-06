import { ChangeEvent, memo, useState } from "react";
import cn from "classnames";

import s from "./TodoList.module.scss";
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
  filter?: FilterValuesType;
  tasksList?: TaskItemProps[];
  removeItem: (id: string) => void;
  addTaskHandler: (title: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
  changeStatus: (id: string, isDone: boolean) => void;
}

export const TodoList = memo((props: TodoListProps) => {
  const {
    className,
    title,
    tasksList,
    removeItem,
    addTaskHandler,
    changeFilter,
    changeStatus,
    filter,
  } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const addTask = () => {
    if (inputValue.trim()) {
      addTaskHandler(inputValue.trim());
      setInputValue("");
    } else {
      setInputError("Field is required");
    }
  };
  const onAllClickHandler = () => changeFilter("all");
  const onActiveClickHandler = () => changeFilter("active");
  const onComplitedClickHandler = () =>
    changeFilter("complited");
  const setErrorFalse = () => setInputError("");
  return (
    <>
      <ul className={cn(s.list, className)}>
        {title && <h3>{title}</h3>}
        <Input
          value={inputValue}
          error={inputError}
          setErrorFalse={setErrorFalse}
          setValue={setInputValue}
          onKeyDown={addTask}
          ChangeBtn={
            <Button onClick={addTask}>add task</Button>
          }
        />

        {tasksList &&
          tasksList?.map((taskItem) => {
            const onRemoveItem = () =>
              removeItem(taskItem.id);
            const onChangeHandler = (
              taskId: string,
              e: ChangeEvent<HTMLInputElement>
            ) => {
              changeStatus(taskId, e.currentTarget.checked);
            };
            return (
              <li
                className={cn({
                  [s.isDone]: taskItem.isDone,
                })}
                key={taskItem.id}
              >
                <input
                  type="checkbox"
                  checked={taskItem.isDone}
                  onChange={(e) =>
                    onChangeHandler(taskItem.id, e)
                  }
                />

                <span>{taskItem.title}</span>
                <Button onClick={onRemoveItem}>x</Button>
              </li>
            );
          })}
      </ul>
      <div className={"btns"}>
        <Button
          active={filter === "all"}
          onClick={onAllClickHandler}
        >
          All
        </Button>
        <Button
          active={filter === "active"}
          onClick={onActiveClickHandler}
        >
          Active
        </Button>
        <Button
          active={filter === "complited"}
          onClick={onComplitedClickHandler}
        >
          Complited
        </Button>
      </div>
    </>
  );
});
