import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  useState,
} from "react";
import cn from "classnames";

import s from "./Input.module.scss";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  label?: string;
  value: string;
  setValue: (value: string) => void;
  onKeyDown: () => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    label,
    value,
    setValue,
    onKeyDown,
  } = props;
  console.log(value);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };
  const onKyeDownhandler = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onKeyDown();
    }
  };
  return (
    <>
      {label && <label className={s.label}>{label}</label>}
      <input
        value={value}
        onChange={onChangeHandler}
        onKeyDown={(e) => onKyeDownhandler}
        type={type}
        className={cn(s.input, className)}
      />
    </>
  );
});
