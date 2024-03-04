import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./Page.module.scss";

interface PageProps {
 className?: string;
 children?: ReactNode;
}

export const Page = (props: PageProps) => {
 const { className, children } = props;
 return (
  <div className={cn(s.page, [className])}>{children}</div>
 );
};
