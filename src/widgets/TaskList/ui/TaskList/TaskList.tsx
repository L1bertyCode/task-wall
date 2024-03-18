import { Card } from "@/shared/ui/Card/Card";
import { TaskListSchema } from "../../model/taskList";
import s from "./TaskList.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { TaskItem } from "../TaskItem/TaskItem";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { taskWallActions } from "@/widgets/TaskWall";
interface TaskListProps {
 taskList: TaskListSchema;
}
export const TaskList = ({ taskList }: TaskListProps) => {
 const { title, taskItemsList, date, id } = taskList;
 const dispatch = useAppDispatch();
 return (
  <Card>
   <div className={s.header}>
    <h3>{title}</h3>
    <Button
     onClick={() =>
      dispatch(taskWallActions.removerTaskList(id))
     }
    >
     x
    </Button>
   </div>
   <div>
    <input />
    <Button>+</Button>
   </div>
   {taskItemsList.length === 0 ? (
    <p>Tasks not assigned</p>
   ) : (
    <ul>
     {taskItemsList.map((taskItem, i) => {
      return (
       <TaskItem
       taskList={taskList}
        key={taskItem.id + taskItem.title}
        taskItem={taskItem}
       />
      );
     })}
    </ul>
   )}
   <div>
    <Button>All</Button>
    <Button>Active</Button>
    <Button>Completed</Button>
   </div>
   <span>{date}</span>
  </Card>
 );
};
