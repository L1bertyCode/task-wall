import { InputHTMLAttributes, memo } from "react";
import cn from "classnames";

import s from "./Input.module.scss";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, type = "text", label } = props;
  return (
    <>
      {label && <label className={s.label}>{label}</label>}
      <input
        type={type}
        className={cn(s.input, className)}
      />
    </>
  );
});
