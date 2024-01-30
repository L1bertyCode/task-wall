import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
type AppLinkVariant = "clear" | "outlined" | "filled";
interface AppLinkProps extends LinkProps {
 children: ReactNode;
 variant?: AppLinkVariant;
 className?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
 const {
  children,
  variant = "clear",
  className,
  ...otherProps
 } = props;
 return (
  <Link
   {...otherProps}
   className={classNames(s.appAppLink, {}, [
    s[variant],
    className,
   ])}
  >
   {children}
  </Link>
 );
});
