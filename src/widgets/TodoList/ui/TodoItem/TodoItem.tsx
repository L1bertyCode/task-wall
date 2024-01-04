import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./TodoItem.module.scss";

interface TodoItemProps {
  className?: string;
  children: ReactNode;
  key: string | number;
}

export const TodoItem = memo((props: TodoItemProps) => {
  const { className, children, key } = props;
  return (
    <li key={key} className={cn(s.todoItem, className)}>
      {children}
    </li>
  );
});
