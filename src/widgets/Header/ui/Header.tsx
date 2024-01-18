import { memo } from "react";
import cn from "classnames";
import s from "./Header.module.scss";

interface HeaderProps {
 className?: string;
}

export const Header = memo((props: HeaderProps) => {
 const { className } = props;
 return (
  <div className={cn(s.header, {}, className)}>
   <div>Header</div>
  </div>
 );
});
