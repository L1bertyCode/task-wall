import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  memo,
} from "react";
import cn from "classnames";

import s from "./Input.module.scss";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  label?: string;
  value: string;
  error?: string;
  setValue: (value: string) => void;
  onKeyDown: () => void;
  ChangeBtn?: ReactNode;
  setErrorFalse?: () => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    label,
    value,
    error,
    setErrorFalse,
    setValue,
    onKeyDown,
    ChangeBtn,
  } = props;
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (error) {
      setErrorFalse?.();
    }
    setValue(e.target.value);
  };
  const onKyeDownHandler = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (type === "text" && e.key === "Enter") {
      onKeyDown();
    }
  };

  return (
    <>
      {label && <label className={s.label}>{label}</label>}
      <input
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKyeDownHandler}
        onClick={setErrorFalse}
        type={type}
        className={cn(
          s.input,
          { [s.error]: error },
          className
        )}
      />
      {ChangeBtn}
      {error && (
        <div className={s.errorMessage}>
          Field is required
        </div>
      )}
    </>
  );
});
