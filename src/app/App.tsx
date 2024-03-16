import { MainPage } from "@/pages/MainPage";
import { useEffect } from "react";

export enum Theme {
 LIGHT = "app_light_theme",
 BLUE = "app_blue_theme",
}
export const App = () => {
 useEffect(() => {
  document.body.className = "app_blue_theme";
 });
 return (
  <div className="app_blue_theme">
   <MainPage />
  </div>
 );
};
