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
  active?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, onClick, active } = props;
  return (
    <button
      onClick={onClick}
      className={cn(
        s.button,
        { [s.active]: active },
        className
      )}
    >
      {children}
    </button>
  );
});
