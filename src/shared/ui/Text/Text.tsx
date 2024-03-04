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
 colorType?: TextColorType;
}

export const Text = memo((props: TextProps) => {
 const {
  className,
  title,
  text,
  colorType = "primary",
 } = props;
 return (
  <div className={cn(s.text, className, s[colorType])}>
   {title && <p>{title}</p>}
   {text && <p>{text}</p>}
  </div>
 );
});
