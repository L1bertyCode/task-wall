import {
 ChangeEvent,
 InputHTMLAttributes,
 KeyboardEvent,
 ReactNode,
 memo,
} from "react";
import cn from "classnames";

import s from "./Input.module.scss";
import { Button } from "../Button/Button";
type HtmlInputType = Omit<
 InputHTMLAttributes<HTMLInputElement>,
 "onChange" | "value" | "type"
>;
interface InputProps extends HtmlInputType {
 className?: string;
 type?: string;
 label?: string;
 value?: string;
 error?: string;
 setValue?: (value: string) => void;
 onKeyDown?: () => void;
 Btn?: ReactNode;
 setErrorFalse?: () => void;
 onChange?: (value: string) => void;
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
  onChange,
  ...otherProps
 } = props;
 const onChangeHandler = (
  e: ChangeEvent<HTMLInputElement>
 ) => {
  if (error) {
   setErrorFalse?.();
  }
  if (setValue) {
   setValue(e.target.value);
  }
  if (onChange) {
   onChange(e.target.value);
  }
 };
 const onKyeDownHandler = (
  e: KeyboardEvent<HTMLInputElement>
 ) => {
  if (type === "text" && e.key === "Enter") {
   onKeyDown?.();
  }
 };

 return (
  <span className={s.inputWrapper}>
   {label && <label className={s.label}>{label}</label>}
   <input
    {...otherProps}
    value={value}
    onChange={onChangeHandler}
    onKeyDown={onKyeDownHandler}
    onClick={setErrorFalse}
    type={type}
    className={cn(s.input, { [s.error]: error }, className)}
   />
   {value && (
    <Button
     onClick={() => {
      setValue?.("");
     }}
     variant="clear"
     className={s.clearInput}
    >
     x
    </Button>
   )}
   {error && (
    <div className={s.errorMessage}>Field is required</div>
   )}
  </span>
 );
});
