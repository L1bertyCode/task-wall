import { ChangeEvent, memo, useState } from "react";
import cn from "classnames";

import s from "./TaskList.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { FilterValuesType } from "@/app/App";
import { FormAddItem } from "@/features/AddTaskItem";

export interface TaskItem {
  id: string;
  title: string;
  isDone: boolean;
}
interface TaskListProps {
  className?: string;
  title?: string;
  filter?: FilterValuesType;
  tasksList?: TaskItem[];
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

  const onAllClickHandler = () =>
    changeFilter("all", taskListId);
  const onActiveClickHandler = () =>
    changeFilter("active", taskListId);
  const onComplitedClickHandler = () =>
    changeFilter("complited", taskListId);
  const removeTaskListHandler = () => {
    removeTaskList(taskListId);
  };
  const addTask = (title: string) => {
    addTaskHandler(title, taskListId);
  };
  return (
    <div className={s.taksList}>
      <ul className={cn(s.list, className)}>
        {title && <h3>{title}</h3>}
        <FormAddItem addItem={addTask} />
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
