import { memo } from "react";
import cn from "classnames";

import s from "./List.module.scss";

interface TodoListProps {
  className?: string;
}

export const TodoList = memo((props: TodoListProps) => {
  const { className } = props;
  return <div className={cn(s.list, className)}></div>;
});
