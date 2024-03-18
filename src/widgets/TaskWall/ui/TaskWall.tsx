import { memo, useState } from "react";
import {
 TaskList,
 TaskListSchema,
} from "@/widgets/TaskList";
import { useSelector } from "react-redux";
import { getTaskWall } from "../model/selectors/getTaskWall";
import { v1 } from "uuid";
import s from "./TaskWall.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { TaskItemSchema } from "@/widgets/TaskList/model/taskList";

interface TaskWallProps {
 className?: string;
}

export const TaskWall = memo((props: TaskWallProps) => {
 const { className } = props;

 const [taskWall, setTaskWall] = useState([
  {
   date: "01.01.2024",
   id: v1(),
   title: "What to learn",
   taskItemsList: [
    { id: v1(), title: "HTML&CSS", isDone: false },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "ReactJS", isDone: false },
   ],
  },
  {
   id: v1(),
   title: "Songs",
   taskItemsList: [
    { id: v1(), title: "Feature", isDone: false },
    { id: v1(), title: "Sun", isDone: false },
    { id: v1(), title: "Never", isDone: false },
   ],
  },
  {
   id: v1(),
   title: "Books",
   taskItemsList: [
    { id: v1(), title: "Ice", isDone: false },
    { id: v1(), title: "Rain", isDone: false },
    { id: v1(), title: "Dark", isDone: false },
   ],
  },
 ]);
 const [taskList1, setTaskList1] = useState({
  date: "01.01.2024",
  id: v1(),
  title: "What to learn",
  taskItemsList: [
   { id: v1(), title: "HTML&CSS", isDone: false },
   { id: v1(), title: "JS", isDone: false },
   { id: v1(), title: "ReactJS", isDone: false },
  ],
 });
 const addTask = (title: string) => {
  const newTask: TaskItemSchema = {
   id: v1(),
   isDone: false,
   title: title,
  };
  taskList1.taskItemsList.push(newTask);
  setTaskList1({ ...taskList1 });
 };
 return (
  <div className={classNames("", {}, [className])}>
   <Input />
   <Button onClick={() => {}}>+</Button>
   <div className={s.taskWall}>
    {taskWall.map((taskList: TaskListSchema, i) => {
     return (
      <TaskList
       addTask={addTask}
       taskList={taskList}
       key={taskList.id}
      />
     );
    })}
    <TaskList
     addTask={addTask}
     taskList={taskList1}
     key={taskList1.id}
    />
   </div>
  </div>
 );
});
