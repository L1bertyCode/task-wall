import { memo, useState } from "react";
import cn from "classnames";
import s from "./FormAddItem.module.scss";

import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getAddTaskList } from "../model/selectors/getAddTaskList/getAddTaskList";
import { getAddTaskItemError } from "../model/selectors/getAddTaskItemError/getAddTaskItemError";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { addTaskItemActions } from "../model/slices/addTaskItemSlice";

interface FormAddItemProps {
 className?: string;
 addItem: (title: string) => void;
}

export const FormAddItem = memo(
 (props: FormAddItemProps) => {
  const { className, addItem } = props;
  const dispatch = useAppDispatch;

  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");

  const addFormItem = () => {
   if (inputValue.trim()) {
    addItem(inputValue.trim());
    setInputValue("");
   } else {
    setInputError("Field is required");
   }
  };

  const setErrorFalse = () => setInputError("");

  return (
   <Input
    className={cn(s.formAddItem, className)}
    value={inputValue}
    error={inputError}
    setErrorFalse={setErrorFalse}
    setValue={setInputValue}
    onKeyDown={addFormItem}
    Btn={
     <Button
      className={s.btn}
      onClick={addFormItem}
      variant="outlined"
     >
      add
     </Button>
    }
   />
  );
 }
);
