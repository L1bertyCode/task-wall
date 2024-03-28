import { ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./MainLayout.module.scss";

interface MainLayoutProps {
 header: ReactNode;
 main: ReactNode;
 className?: string;
}

export const MainLayout = memo((props: MainLayoutProps) => {
 const { header, main, className } = props;
 return (
  <div
   className={classNames(s.mainLayout, {}, [className])}
  >
   <>{header}</>
   <main>{main}</main>
  </div>
 );
});
