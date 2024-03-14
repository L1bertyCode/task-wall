import { memo } from "react";

import cn from "classnames";
import { Page } from "@/shared/layouts/Page";
import { TaskWall } from "@/widgets/TaskWall";
// import s from "./MainPage.module.scss";

interface MainPageProps {
 className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
 const { className } = props;
 return (
  <Page className={cn("app", "container", className)}>
   <TaskWall />
  </Page>
 );
});
