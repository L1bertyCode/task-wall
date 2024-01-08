import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./TaskItem.module.scss";

interface TaskItemProps {
  className?: string;
  children: ReactNode;
  key: string | number;
}

export const TaskItem = memo((props: TaskItemProps) => {
  const { className, children, key } = props;
  return (
    <li key={key} className={cn(s.TaskItem, className)}>
      {children}
    </li>
  );
});
