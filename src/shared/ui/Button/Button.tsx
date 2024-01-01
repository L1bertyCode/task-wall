import {
  ButtonHTMLAttributes,
  ReactNode,
  memo,
} from "react";
import cn from "classnames";

import s from "./Button.module.scss";
type ButtonColortype =
  | "clear"
  | "clear-inverted"
  | "outline"
  | "outline-inverted"
  | "filled"
  | "filled-inverted";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={cn(s.button, className)}
    >
      {children}
    </button>
  );
});
