import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./TaskListFilter.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { FilterType } from "@/widgets/TaskList/model/taskList";

interface TaskListFilterProps {
 className?: string;
 filter: FilterType;
 taskListId: string;
 changeTaskListFilter: (
  taskListId: string,
  filter: FilterType
 ) => void;
}

export const TaskListFilter = memo(
 (props: TaskListFilterProps) => {
  const {
   className,
   changeTaskListFilter,
   filter,
   taskListId,
  } = props;
  return (
   <div
    className={classNames(s.taskListFilter, {}, [
     className,
    ])}
   >
    <Button
     active={filter === "all"}
     onClick={() => changeTaskListFilter(taskListId, "all")}
    >
     All
    </Button>
    <Button
     active={filter === "active"}
     onClick={() =>
      changeTaskListFilter(taskListId, "active")
     }
    >
     Active
    </Button>
    <Button
     active={filter === "completed"}
     onClick={() =>
      changeTaskListFilter(taskListId, "completed")
     }
    >
     Completed
    </Button>
   </div>
  );
 }
);
