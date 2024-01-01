import { memo } from "react";
import cn from "classnames";
import s from "./Text.module.scss";
type TextColorType =
  | "primary"
  | "inverted"
  | "save"
  | "error";
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
}

export const Text = memo((props: TextProps) => {
  const { className, title, text } = props;
  return (
    <div className={cn(s.text, className)}>
      {title && <div>{title}</div>}
      {text && <div>{text}</div>}
    </div>
  );
});
