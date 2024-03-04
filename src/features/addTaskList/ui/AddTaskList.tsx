import { memo } from "react";
import s from "./AddTaskList.module.scss";
import cn from "classnames";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";

interface AddTaskCardProps {
 className?: string;
}

export const AddTaskList = memo(
 (props: AddTaskCardProps) => {
  const { className } = props;

  return (
   <div className={cn(s.addTaskList, className)}>
    <Input placeholder={"Type name task list"} />
    <Button>{"Add"}</Button>
   </div>
  );
 }
);
