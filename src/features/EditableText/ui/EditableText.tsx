import { ChangeEvent, memo, useState } from "react";
import cn from "classnames";
import s from "./EditableText.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";

interface EditableTextProps {
 className?: string;
 title: string;
 editMode?: boolean;
 onChangeTextHandler: (text: string) => void;
}

export const EditableText = memo(
 (props: EditableTextProps) => {
  const { className, title, onChangeTextHandler } = props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localTitle, setLocalTitle] = useState<string>("");
  const onActiveEditMode = () => {
   setEditMode(true);
   setLocalTitle(title);
  };
  const onActiveViewMode = () => {
   setEditMode(false);
   onChangeTextHandler(localTitle);
  };

  const onChangeLocalTitleHandler = (value: string) => {
   setLocalTitle(value);
  };
  const onSaveNewTitle = () => {
   setEditMode(false);
  };
  return (
   <>
    {editMode ? (
     <Input
      value={localTitle}
      onChange={onChangeLocalTitleHandler}
      onBlur={onActiveViewMode}
      autoFocus
      Btn={<Button onClick={onSaveNewTitle}>save</Button>}
     />
    ) : (
     <h3
      className={cn(s.editableText, {}, className)}
      onDoubleClick={onActiveEditMode}
     >
      {title}
     </h3>
    )}
   </>
  );
 }
);
