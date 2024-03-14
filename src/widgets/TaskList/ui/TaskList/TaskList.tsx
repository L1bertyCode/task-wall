import { TaskListSchema } from "../../model/taskList";

export const TaskList = ({ title }: TaskListSchema) => {
 return (
  <div>
   <h3>{title}</h3>
   <div>
    <input />
    <button>+</button>
   </div>
   <ul>
    <li>
     <input type="checkbox" checked={true} />{" "}
     <span>HTML&CSS</span>
    </li>
    <li>
     <input type="checkbox" checked={true} />{" "}
     <span>JS</span>
    </li>
    <li>
     <input type="checkbox" checked={false} />{" "}
     <span>React</span>
    </li>
   </ul>
   <div>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
   </div>
  </div>
 );
};

// import { ChangeEvent, memo } from "react";
// import cn from "classnames";

// import s from "./TaskList.module.scss";

// import { Button } from "@/shared/ui/Button/Button";
// import { FilterValuesType } from "@/app/App";
// import { FormAddItem } from "@/features/addTaskItem";
// import { EditableText } from "@/features/editableText";
// import RemoveIcon from "@/shared/assets/icons/remove.svg";
// import { Icon } from "@/shared/ui/Icon/Icon";
// import { Card } from "@/shared/ui/Card/Card";

// export interface TaskItem {
//  id: string;
//  title: string;
//  isDone: boolean;
// }
// interface TaskListProps {
//  className?: string;
//  title?: string;
//  filter?: FilterValuesType;
//  tasksList?: TaskItem[];
//  TaskListId: string;
//  removeItem: (id: string, TaskListId: string) => void;
//  addTaskHandler: (
//   title: string,
//   TaskListId: string
//  ) => void;
//  changeFilter: (
//   filter: FilterValuesType,
//   TaskListId: string
//  ) => void;
//  changeStatus: (
//   id: string,
//   isDone: boolean,
//   TaskListId: string
//  ) => void;
//  removeTaskList: (taskLitsId: string) => void;
//  onChangeTitleTaskList: (
//   title: string,
//   TaskListId: string
//  ) => void;
//  onChangeTitleTaskItem: (
//   TaskListId: string,
//   taskId: string,
//   title: string
//  ) => void;
// }

// export const TaskList = memo((props: TaskListProps) => {
//  const {
//   className,
//   title,
//   tasksList,
//   removeItem,
//   addTaskHandler,
//   changeFilter,
//   changeStatus,
//   filter,
//   TaskListId,
//   removeTaskList,
//   onChangeTitleTaskItem,
//   onChangeTitleTaskList,
//  } = props;

//  const onAllClickHandler = () =>
//   changeFilter("all", TaskListId);
//  const onActiveClickHandler = () =>
//   changeFilter("active", TaskListId);
//  const onComplitedClickHandler = () =>
//   changeFilter("complited", TaskListId);
//  const removeTaskListHandler = () => {
//   removeTaskList(TaskListId);
//  };
//  const addTask = (title: string) => {
//   addTaskHandler(title, TaskListId);
//  };
//  const onChangeTitleHandler = (title: string) => {
//   onChangeTitleTaskList(title, TaskListId);
//  };

//  return (
//   <div className={cn(s.taksList, className)}>
//    <Card className={s.list}>
//     <div>
//      {title && (
//       <EditableText
//        onChangeTextHandler={onChangeTitleHandler}
//        title={title}
//        editMode={true}
//       />
//      )}
//      <Button
//       variant="clear"
//       onClick={removeTaskListHandler}
//      >
//       <Icon Svg={RemoveIcon} />
//      </Button>
//     </div>
//     <FormAddItem addItem={addTask} />
//     {tasksList &&
//      tasksList?.map((taskItem: TaskItem) => {
//       const onChangeTaskItemTitleHandler = (
//        title: string
//       ) => {
//        onChangeTitleTaskItem(
//         TaskListId,
//         taskItem.id,
//         title
//        );
//       };
//       const onRemoveItem = () =>
//        removeItem(taskItem.id, TaskListId);
//       const onChangeStatusHandler = (
//        taskId: string,
//        e: ChangeEvent<HTMLInputElement>
//       ) => {
//        changeStatus(
//         taskId,
//         e.currentTarget.checked,
//         TaskListId
//        );
//       };

//       return (
//        <li
//         className={cn({
//          [s.isDone]: taskItem.isDone,
//         })}
//         key={taskItem.id}
//        >
//         <input
//          type="checkbox"
//          checked={taskItem.isDone}
//          onChange={(e) =>
//           onChangeStatusHandler(taskItem.id, e)
//          }
//         />

//         <EditableText
//          onChangeTextHandler={onChangeTaskItemTitleHandler}
//          title={taskItem.title}
//          editMode={true}
//         />
//         <Button variant="clear" onClick={onRemoveItem}>
//          <Icon Svg={RemoveIcon} />
//         </Button>
//        </li>
//       );
//      })}
//     <div className={"btns"}>
//      <Button
//       active={filter === "all"}
//       onClick={onAllClickHandler}
//      >
//       All
//      </Button>
//      <Button
//       active={filter === "active"}
//       onClick={onActiveClickHandler}
//      >
//       Active
//      </Button>
//      <Button
//       active={filter === "complited"}
//       onClick={onComplitedClickHandler}
//      >
//       Complited
//      </Button>
//     </div>
//    </Card>
//   </div>
//  );
// });
