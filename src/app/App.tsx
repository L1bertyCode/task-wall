import { MainPage } from "@/pages/MainPage";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Header } from "@/widgets/Header";
import { useEffect, useState } from "react";

export enum Theme {
 LIGHT = "app_light_theme",
 BLUE = "app_blue_theme",
}
export const App = () => {
 const [theme, setTheme] = useState(Theme.BLUE);
 useEffect(() => {
  document.body.className = "app_blue_theme";
 });
 return (
  <div className={`${theme}`}>
   <MainLayout
    header={
     <Header
      theme={theme}
      chnageTheme={() =>
       setTheme(
        theme === Theme.BLUE ? Theme.LIGHT : Theme.BLUE
       )
      }
     />
    }
    main={<MainPage />}
   />
  </div>
 );
};
