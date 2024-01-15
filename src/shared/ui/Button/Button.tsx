import {
 ButtonHTMLAttributes,
 ReactNode,
 memo,
} from "react";
import cn from "classnames";

import s from "./Button.module.scss";
type ButtonVariant = "clear" | "outlined" | "filled";
type ButtonColorType =
 | "primary"
 | "inverted"
 | "cancel"
 | "save"
 | "hint";
interface ButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 onClick?: () => void;
 className?: string;
 variant?: ButtonVariant;
 colorType?: ButtonColorType;
 active?: boolean;
}

export const Button = memo((props: ButtonProps) => {
 const {
  className,
  children,
  onClick,
  active,
  variant = "outlined",
  colorType = "primary",
  ...otherProps
 } = props;
 return (
  <button
   {...otherProps}
   onClick={onClick}
   className={cn(
    s.button,
    s[colorType],
    s[variant],
    { [s.active]: active },
    className
   )}
  >
   {children}
  </button>
 );
});
