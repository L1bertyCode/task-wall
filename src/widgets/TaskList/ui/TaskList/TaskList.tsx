import { ChangeEvent, memo, useState } from "react";
import cn from "classnames";

import s from "./TaskList.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { FilterValuesType } from "@/app/App";
export interface TaskItemProps {
  id: string;
  title: string;
  isDone: boolean;
}
interface TaskListProps {
  className?: string;
  title?: string;
  filter?: FilterValuesType;
  tasksList?: TaskItemProps[];
  taskListId: string;
  removeItem: (id: string, taskListId: string) => void;
  addTaskHandler: (
    title: string,
    taskListId: string
  ) => void;
  changeFilter: (
    filter: FilterValuesType,
    taskListId: string
  ) => void;
  changeStatus: (
    id: string,
    isDone: boolean,
    taskListId: string
  ) => void;
  removeTaskList: (taskLitsId: string) => void;
}

export const TaskList = memo((props: TaskListProps) => {
  const {
    className,
    title,
    tasksList,
    removeItem,
    addTaskHandler,
    changeFilter,
    changeStatus,
    filter,
    taskListId,
    removeTaskList,
  } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const addTask = () => {
    if (inputValue.trim()) {
      addTaskHandler(inputValue.trim(), taskListId);
      setInputValue("");
    } else {
      setInputError("Field is required");
    }
  };
  const onAllClickHandler = () =>
    changeFilter("all", taskListId);
  const onActiveClickHandler = () =>
    changeFilter("active", taskListId);
  const onComplitedClickHandler = () =>
    changeFilter("complited", taskListId);
  const setErrorFalse = () => setInputError("");
  const removeTaskListHandler = () => {
    removeTaskList(taskListId);
  };
  return (
    <div className={s.taksList}>
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
              removeItem(taskItem.id, taskListId);
            const onChangeHandler = (
              taskId: string,
              e: ChangeEvent<HTMLInputElement>
            ) => {
              changeStatus(
                taskId,
                e.currentTarget.checked,
                taskListId
              );
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
      <Button onClick={removeTaskListHandler}>
        Remove task List
      </Button>
    </div>
  );
});
