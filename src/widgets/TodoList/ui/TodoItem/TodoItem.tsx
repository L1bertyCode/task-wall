import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./TodoItem.module.scss";

interface TodoItemProps {
  className?: string;
  children: ReactNode;
}

export const TodoItem = memo((props: TodoItemProps) => {
  const { className, children } = props;
  return (
    <li className={cn(s.todoItem, className)}>
      {children}
    </li>
  );
});
