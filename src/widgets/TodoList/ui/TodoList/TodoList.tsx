import { memo } from "react";
import cn from "classnames";

import s from "./TodoList.module.scss";
import { TodoItem } from "../TodoItem/TodoItem";
interface TaskItemProps {
  id: number;
  title: string;
  isDone: boolean;
}
interface TodoListProps {
  className?: string;
  title?: string;
  tasksList?: TaskItemProps[];
}

export const TodoList = memo((props: TodoListProps) => {
  const { className, title, tasksList } = props;
  return (
    <ul className={cn(s.list, className)}>
      {title && <h3>{title}</h3>}
      {tasksList &&
        tasksList.map((taskItem) => (
          <TodoItem
            children={
              <>
                <input
                  type="checkbox"
                  checked={taskItem.isDone}
                />
                <span>{taskItem.title}</span>
              </>
            }
          />
        ))}
    </ul>
  );
});
