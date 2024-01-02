import {
  ButtonHTMLAttributes,
  ReactNode,
  memo,
} from "react";
import cn from "classnames";

import s from "./Button.module.scss";
type ButtonVariant = "clear" | "outline" | "filled";
type ButtonColorType =
  | "primary"
  | "inverted"
  | "cancel"
  | "save"
  | "hint";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: ButtonVariant;
  colorType?: ButtonColorType;
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
