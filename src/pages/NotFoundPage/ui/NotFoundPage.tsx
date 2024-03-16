import { memo } from "react";

import s from "./NotFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NotFoundPageProps {
 className?: string;
}

 const NotFoundPage = memo(
 (props: NotFoundPageProps) => {
  const { className } = props;
  return (
   <div
   // className={classNames(s.notFoundPage,{},[className])}
   >
    <div>NotFoundPage</div>
   </div>
  );
 }
);
export default NotFoundPage